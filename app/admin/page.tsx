"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Eye,
  Globe,
  Mail,
  Trash2,
  RefreshCw,
  LogOut,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  created_at: string;
}

interface DashboardData {
  contacts: Contact[];
  totalContacts: number;
  totalPages: number;
  currentPage: number;
  totalViews: number;
  todayViews: number;
  uniqueIps: number;
  topPages: { path: string; views: number }[];
  recentVisitors: {
    path: string;
    ip: string;
    user_agent: string;
    created_at: string;
  }[];
  dailyViews: { day: string; views: number }[];
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [cleanupMsg, setCleanupMsg] = useState("");
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("admin_token") : null;

  const fetchData = useCallback(
    async (p: number) => {
      if (!token) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/admin?page=${p}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.status === 401) {
          sessionStorage.removeItem("admin_token");
          router.push("/admin/login");
          return;
        }
        const json = await res.json();
        setData(json);
      } catch {
        // network error
      } finally {
        setLoading(false);
      }
    },
    [token, router]
  );

  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchData(page);
  }, [token, page, fetchData, router]);

  async function handleCleanup() {
    if (!token) return;
    if (!confirm("Delete all data older than 30 days?")) return;
    try {
      const res = await fetch("/api/cleanup", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      setCleanupMsg(json.message || "Cleanup complete");
      fetchData(1);
      setPage(1);
    } catch {
      setCleanupMsg("Cleanup failed");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_token");
    router.push("/admin/login");
  }

  if (!token) return null;

  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container-wide flex items-center justify-between py-4">
          <h1 className="font-heading text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => fetchData(page)}>
              <RefreshCw className="mr-1.5 h-4 w-4" /> Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleCleanup}>
              <Trash2 className="mr-1.5 h-4 w-4" /> Cleanup 30d
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-1.5 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </div>

      {cleanupMsg && (
        <div className="container-wide mt-4">
          <div className="rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent">
            {cleanupMsg}
          </div>
        </div>
      )}

      {loading && !data ? (
        <div className="flex min-h-[40vh] items-center justify-center text-muted-foreground">
          Loading...
        </div>
      ) : data ? (
        <div className="container-wide py-8">
          {/* Stats cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<Eye className="h-5 w-5" />}
              label="Total Page Views"
              value={data.totalViews.toLocaleString()}
              color="#2E5090"
            />
            <StatCard
              icon={<BarChart3 className="h-5 w-5" />}
              label="Today's Views"
              value={data.todayViews.toLocaleString()}
              color="#16A34A"
            />
            <StatCard
              icon={<Globe className="h-5 w-5" />}
              label="Unique Visitors"
              value={data.uniqueIps.toLocaleString()}
              color="#7C3AED"
            />
            <StatCard
              icon={<Mail className="h-5 w-5" />}
              label="Total Contacts"
              value={data.totalContacts.toLocaleString()}
              color="#DC2626"
            />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Top pages */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-heading text-lg font-bold">
                Top Pages
              </h2>
              {data.topPages.length === 0 ? (
                <p className="text-sm text-muted-foreground">No data yet</p>
              ) : (
                <div className="space-y-2">
                  {data.topPages.map((p) => (
                    <div
                      key={p.path}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="truncate font-medium">{p.path}</span>
                      <span className="shrink-0 text-muted-foreground">
                        {p.views}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Daily views */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-heading text-lg font-bold">
                Daily Views (30d)
              </h2>
              {data.dailyViews.length === 0 ? (
                <p className="text-sm text-muted-foreground">No data yet</p>
              ) : (
                <div className="space-y-1.5">
                  {data.dailyViews.slice(0, 10).map((d) => (
                    <div key={d.day} className="flex items-center gap-2 text-sm">
                      <span className="w-24 shrink-0 text-muted-foreground">
                        {d.day}
                      </span>
                      <div className="flex-1">
                        <div
                          className="h-4 rounded-full bg-primary/20"
                          style={{
                            width: `${Math.max(
                              4,
                              (d.views / Math.max(...data.dailyViews.map((x) => x.views))) * 100
                            )}%`,
                          }}
                        >
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <span className="w-10 text-right font-medium">{d.views}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent visitors */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-heading text-lg font-bold">
                Recent Visitors
              </h2>
              {data.recentVisitors.length === 0 ? (
                <p className="text-sm text-muted-foreground">No visitors yet</p>
              ) : (
                <div className="space-y-2">
                  {data.recentVisitors.slice(0, 8).map((v, i) => (
                    <div key={i} className="text-sm">
                      <div className="flex items-center justify-between">
                        <span className="truncate font-medium">{v.path}</span>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {v.ip || "—"}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(v.created_at + "Z").toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contacts table */}
          <div className="mt-8 rounded-2xl border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="font-heading text-lg font-bold">
                <Users className="mr-2 inline h-5 w-5" />
                Contact Messages ({data.totalContacts})
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => setPage(page - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {page} / {data.totalPages || 1}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= data.totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {data.contacts.length === 0 ? (
              <div className="px-6 py-12 text-center text-muted-foreground">
                No contact messages yet
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30 text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Message</th>
                      <th className="px-4 py-3">IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.contacts.map((c) => (
                      <tr key={c.id} className="border-b hover:bg-muted/20">
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                          {new Date(c.created_at + "Z").toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">
                          {c.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">{c.email}</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                            {c.subject}
                          </span>
                        </td>
                        <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">
                          {c.message}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-xs text-muted-foreground">
                          {c.ip || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
          <div className="font-heading text-2xl font-bold">{value}</div>
        </div>
      </div>
    </div>
  );
}

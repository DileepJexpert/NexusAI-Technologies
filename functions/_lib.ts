export interface Env {
  DB: any;
  ADMIN_PASSWORD?: string;
}

export function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
}

export function clientIp(request: Request) {
  return request.headers.get("CF-Connecting-IP") || "";
}

export function requireAdmin(request: Request, env: Env) {
  const expected = env.ADMIN_PASSWORD;
  const auth = request.headers.get("Authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "").trim();
  return Boolean(expected && token && token === expected);
}

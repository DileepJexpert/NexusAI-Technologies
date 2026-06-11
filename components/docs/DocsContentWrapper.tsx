"use client";

import { useEffect } from "react";

export function DocsCopyButtons() {
  useEffect(() => {
    const container = document.querySelector(".docs-content");
    if (!container) return;

    const pres = container.querySelectorAll("pre");
    pres.forEach((pre) => {
      if (pre.querySelector("[data-copy-btn]")) return;
      pre.style.position = "relative";

      const btn = document.createElement("button");
      btn.setAttribute("data-copy-btn", "true");
      btn.setAttribute("aria-label", "Copy code");
      btn.className =
        "absolute right-2 top-2 rounded-md border border-white/10 bg-slate-800 p-1.5 text-slate-400 opacity-0 transition-opacity hover:bg-slate-700 hover:text-white";
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;

      btn.addEventListener("click", async () => {
        const text = pre.textContent || "";
        await navigator.clipboard.writeText(text);
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
        setTimeout(() => {
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
        }, 2000);
      });

      pre.addEventListener("mouseenter", () => { btn.style.opacity = "1"; });
      pre.addEventListener("mouseleave", () => { btn.style.opacity = "0"; });

      pre.appendChild(btn);
    });
  });

  return null;
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  {
    id: 1,
    from: "user" as const,
    text: "Hi! I need help with a crop loan 🌾",
  },
  {
    id: 2,
    from: "bot" as const,
    text: "Hello! I'm KisanMitra 🤖\nI can help with PM-Kisan, KCC loans, crop insurance and government schemes.",
  },
  {
    id: 3,
    from: "user" as const,
    text: "What documents do I need for KCC?",
  },
  {
    id: 4,
    from: "bot" as const,
    text: "For Kisan Credit Card you'll need:\n• Aadhaar + PAN card\n• Land records (7/12 extract)\n• Bank passbook copy\n\nShall I generate a full checklist? ✅",
  },
];

const DELAYS = [600, 1800, 3200, 4600];

export function WAChat() {
  const [visible, setVisible] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    messages.forEach((msg, i) => {
      if (msg.from === "bot") {
        timers.push(setTimeout(() => setTyping(true), DELAYS[i] - 900));
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisible((prev) => (prev.includes(msg.id) ? prev : [...prev, msg.id]));
        }, DELAYS[i])
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="relative w-full max-w-[320px] overflow-hidden rounded-[2rem] shadow-2xl"
      style={{ background: "#E5DDD5" }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{
          background: "linear-gradient(135deg, #075E54 0%, #128C7E 100%)",
        }}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl">
          🤖
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-white">
            NexusAI Assistant
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-[11px] text-white/70">online · WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Message area */}
      <div className="flex min-h-[260px] flex-col gap-2 px-3 py-4">
        <AnimatePresence>
          {messages.map((msg) =>
            visible.includes(msg.id) ? (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className={[
                  "max-w-[82%] whitespace-pre-line rounded-2xl px-3 py-2 text-[12px] leading-relaxed shadow-sm",
                  msg.from === "user"
                    ? "ml-auto rounded-tr-sm bg-[#DCF8C6] text-gray-800"
                    : "mr-auto rounded-tl-sm bg-white text-gray-800",
                ].join(" ")}
              >
                {msg.text}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mr-auto flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block h-1.5 w-1.5 rounded-full bg-gray-400"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.14,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-3 pb-4">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] text-gray-400 shadow-sm">
          Type a message…
        </div>
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-md"
          style={{
            background: "linear-gradient(135deg, #075E54 0%, #25D366 100%)",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

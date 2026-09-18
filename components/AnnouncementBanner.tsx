"use client";

import { useEffect, useState } from "react";
import { announcementLines } from "@/lib/home";

const STORAGE_KEY = "pp-announce-dismissed";

export function AnnouncementBanner() {
  const [hidden, setHidden] = useState<boolean | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    try {
      setHidden(window.sessionStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setHidden(false);
    }
  }, []);

  useEffect(() => {
    if (hidden !== false) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % announcementLines.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [hidden]);

  if (hidden !== false) return null;

  function dismiss() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setHidden(true);
  }

  return (
    <div className="relative flex h-10 items-center justify-center bg-accent px-10 text-center text-[11px] font-medium tracking-wide text-white sm:text-xs">
      <p className="max-w-[90%] truncate">{announcementLines[index]}</p>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-white/90 hover:bg-white/15"
        aria-label="Dismiss announcement"
      >
        <span aria-hidden className="text-base leading-none">
          ×
        </span>
      </button>
    </div>
  );
}

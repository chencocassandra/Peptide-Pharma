"use client";

import { useEffect, useState } from "react";
import { LogoMark, type LogoId, logoIds } from "./LogoMarks";

const STORAGE_KEY = "peptide-pharma-logo";

function isLogoId(value: string | null): value is LogoId {
  return !!value && (logoIds as readonly string[]).includes(value);
}

export function readLogoId(): LogoId {
  if (typeof window === "undefined") return "current";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLogoId(stored) ? stored : "current";
}

export function writeLogoId(id: LogoId) {
  window.localStorage.setItem(STORAGE_KEY, id);
  window.dispatchEvent(new Event("peptide-logo-change"));
}

export function Logo({ className = "size-8" }: { className?: string }) {
  const [id, setId] = useState<LogoId>("current");

  useEffect(() => {
    setId(readLogoId());
    const sync = () => setId(readLogoId());
    window.addEventListener("peptide-logo-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("peptide-logo-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return <LogoMark id={id} className={className} />;
}

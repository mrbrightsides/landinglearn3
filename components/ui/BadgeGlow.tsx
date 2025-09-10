"use client";
import { PropsWithChildren } from "react";
export function BadgeGlow({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white shadow-glow
      bg-gradient-to-r from-fuchsia-600/60 via-indigo-600/60 to-sky-600/60 border border-white/10">
      {children}
    </span>
  );
}

"use client";
import { PropsWithChildren } from "react";
export function Pill({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white active:translate-y-0">
      {children}
    </span>
  );
}
  
"use client";
import { PropsWithChildren } from "react";

export default function GradientText({ children }: PropsWithChildren) {
  return (
    <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

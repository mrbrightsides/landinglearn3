"use client";
import { Anchor } from "lucide-react";
import { useState } from "react";

export default function Heading({
  id,
  level = 2,
  children,
}: {
  id: string;
  level?: 2 | 3;
  children: React.ReactNode;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  const [hover, setHover] = useState(false);

  return (
    <Tag
      id={id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative scroll-mt-24 font-semibold text-lg"
    >
      <button
        onClick={() => navigator.clipboard.writeText(location.origin + location.pathname + "#" + id)}
        className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 transition group-hover:opacity-100"
        aria-label="Copy link to section"
      >
        <Anchor className="h-4 w-4 text-white/60 hover:text-white" />
      </button>
      {children}
    </Tag>
  );
}

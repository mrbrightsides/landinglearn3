"use client";
import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // aman kalau element belum ada
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    // pakai IntersectionObserver biar smooth & hemat performa
    const observer = new IntersectionObserver(
      (entries) => {
        // cari entry yang paling “atas” tapi masih terlihat
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        // rootMargin negatif sedikit supaya “aktif” setelah lewat anchor
        root: null,
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}

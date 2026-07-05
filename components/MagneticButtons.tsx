"use client";

import { useEffect } from "react";

export function MagneticButtons() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".magnetic");
      if (!target) return;
      const r = target.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      target.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };

    const onLeave = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".magnetic");
      if (target) target.style.transform = "translate(0,0)";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return null;
}

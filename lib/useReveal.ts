"use client";

import { useEffect, useRef } from "react";

/**
 * Adds the "in-view" class to any descendant with the "reveal" class
 * once it scrolls into the viewport. Respects prefers-reduced-motion
 * automatically via CSS (see globals.css).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const selector = ".reveal, .mask, .img-reveal";
    const matchesRoot = root.matches(selector);
    const targets = matchesRoot
      ? [root, ...Array.from(root.querySelectorAll(selector))]
      : Array.from(root.querySelectorAll(selector));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

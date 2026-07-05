"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.body.classList.add("custom-cursor-active");

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let frame: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      frame = requestAnimationFrame(loop);
    };

    const setHover = (on: boolean) => () => {
      dotRef.current?.classList.toggle("hover", on);
      ringRef.current?.classList.toggle("hover", on);
    };

    const enterHandler = setHover(true);
    const leaveHandler = setHover(false);

    const attachListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, input, textarea, select, .magnetic"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", enterHandler);
        el.addEventListener("mouseleave", leaveHandler);
      });
      return targets;
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(loop);
    let targets = attachListeners();

    // Re-attach when new interactive elements mount (e.g. portfolio modal)
    const observer = new MutationObserver(() => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enterHandler);
        el.removeEventListener("mouseleave", leaveHandler);
      });
      targets = attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

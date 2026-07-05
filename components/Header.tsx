"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#accueil" className="z-10 icon-anim">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-ink/70 hover:text-plume-deep transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="magnetic eyebrow px-5 py-2.5 bg-charcoal text-paper rounded-full hover:opacity-85 transition-opacity"
          >
            Nous contacter
          </a>
        </div>

        <button
          className="md:hidden z-10 text-ink icon-anim"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-28 px-8 flex flex-col gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

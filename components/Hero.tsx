"use client";

import { ArrowDown } from "lucide-react";
import { heroContent } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import { HeroAccordion } from "./HeroAccordion";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center bg-paper text-ink overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-[0.04]" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-plume/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="relative max-w-content mx-auto w-full px-6 lg:px-10 flex flex-col gap-14"
      >
        <div className="max-w-3xl">
          <p className="reveal eyebrow text-plume-deep mb-6">{heroContent.eyebrow}</p>

          <h1 className="font-display font-bold text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.03] tracking-tight">
            {heroContent.headline.map((line, i) => (
              <span key={i} className="mask">
                <span className={`mask-inner ${i === 1 ? "text-charcoal" : ""}`}>{line}</span>
              </span>
            ))}
          </h1>

          <p className="reveal mt-8 max-w-xl text-graphite text-lg leading-relaxed">
            {heroContent.subheadline}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <a
              href={heroContent.ctaPrimary.href}
              className="magnetic px-7 py-3.5 rounded-full bg-charcoal text-paper font-medium hover:opacity-90 transition-opacity"
            >
              {heroContent.ctaPrimary.label}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="magnetic px-7 py-3.5 rounded-full border border-line text-ink font-medium hover:border-plume-deep hover:text-plume-deep transition-colors"
            >
              {heroContent.ctaSecondary.label}
            </a>
          </div>

          <div className="reveal mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="border-l border-line pl-4">
                <p className="font-display text-2xl sm:text-3xl font-bold text-charcoal">{stat.value}</p>
                <p className="eyebrow text-graphite mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <HeroAccordion />
        </div>
      </div>

      <a
        href="#apropos"
        aria-label="Défiler vers le bas"
        className="icon-anim absolute bottom-8 left-1/2 -translate-x-1/2 text-graphite hover:text-plume-deep transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

"use client";

import Image from "next/image";
import { about } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="apropos" className="py-28 lg:py-36 bg-paper">
      <div
        ref={ref}
        className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start"
      >
        <div className="lg:sticky lg:top-28">
          <div className="img-reveal blueprint-frame text-plume-deep aspect-[3/4] rounded-2xl border border-line">
            <Image src={about.image} alt="Diamond Art, projet villa" fill className="reveal-inner object-cover" />
          </div>
          <div className="reveal mt-8 grid grid-cols-1 gap-4">
            {about.highlights.map((h) => (
              <div key={h.label} className="flex items-center justify-between border-b border-line pb-3">
                <span className="eyebrow text-graphite">{h.label}</span>
                <span className="font-medium text-sm">{h.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="reveal eyebrow text-plume-deep mb-5">{about.eyebrow}</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight max-w-2xl">
            <span className="mask">
              <span className="mask-inner">{about.title}</span>
            </span>
          </h2>

          <div className="mt-10 space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="reveal text-graphite text-lg leading-relaxed max-w-2xl">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

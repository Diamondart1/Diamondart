"use client";

import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const slide = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    const gap = 24;
    const cardWidth = card.getBoundingClientRect().width + gap;
    const maxIndex = testimonials.length - 1;
    const next = Math.min(Math.max(index + dir, 0), maxIndex);
    setIndex(next);
    track.style.transform = `translateX(-${next * cardWidth}px)`;
  };

  return (
    <section className="py-28 lg:py-36 bg-paper">
      <div ref={ref} className="max-w-content mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="reveal eyebrow text-plume-deep mb-5">Témoignages</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight">
              <span className="mask">
                <span className="mask-inner">Ce qu&apos;en disent élèves et partenaires.</span>
              </span>
            </h2>
          </div>
          <div className="reveal flex items-center gap-3">
            <button
              onClick={() => slide(-1)}
              aria-label="Témoignage précédent"
              className="icon-anim magnetic w-11 h-11 rounded-full border border-line flex items-center justify-center hover:border-plume hover:text-plume-deep hover:bg-plume/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => slide(1)}
              aria-label="Témoignage suivant"
              className="icon-anim magnetic w-11 h-11 rounded-full border border-line flex items-center justify-center hover:border-plume hover:text-plume-deep hover:bg-plume/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6 transition-transform duration-500 ease-out">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="reveal shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-line bg-mist p-8 flex flex-col"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <Quote className="text-plume-deep mb-5" size={24} />
                <blockquote className="text-graphite leading-relaxed flex-1">
                  &laquo; {t.quote} &raquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-7 pt-6 border-t border-line">
                  <div className="w-10 h-10 rounded-full bg-ink/10 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="eyebrow text-graphite">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

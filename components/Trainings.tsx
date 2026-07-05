"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { trainings } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export function Trainings() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="formations" className="py-28 lg:py-36 bg-mist relative overflow-hidden">
      <div ref={ref} className="relative max-w-content mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="reveal eyebrow text-plume-deep mb-5">Formations</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight">
            <span className="mask">
              <span className="mask-inner">Apprenez les outils que nous utilisons chaque jour.</span>
            </span>
          </h2>
          <p className="reveal mt-6 text-graphite text-lg leading-relaxed">
            Des formations conçues à partir de cas réels de projets architecturaux, pour progresser vite et produire des livrables professionnels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {trainings.map((training, i) => (
            <div
              key={training.slug}
              className="reveal blueprint-frame text-plume-deep rounded-2xl border border-line bg-paper overflow-hidden flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="img-reveal aspect-[16/9]">
                <Image src={training.image} alt={training.title} fill className="reveal-inner object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display font-bold text-2xl text-ink">{training.title}</h3>
                <p className="text-plume-deep text-sm mt-1">{training.subtitle}</p>
                <p className="text-graphite mt-5 leading-relaxed">{training.description}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {training.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="icon-anim text-plume-deep mt-0.5 shrink-0" />
                      <span className="text-graphite">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="magnetic mt-8 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-charcoal text-paper font-medium hover:opacity-90 transition-opacity"
                >
                  {training.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

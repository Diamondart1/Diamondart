"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export function Portfolio() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-28 lg:py-36 bg-mist">
      <div ref={ref} className="max-w-content mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="reveal eyebrow text-plume-deep mb-5">Portfolio</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight">
              <span className="mask">
                <span className="mask-inner">Des projets pensés, modélisés, livrés.</span>
              </span>
            </h2>
          </div>
          <p className="reveal text-graphite max-w-sm">
            Chaque projet illustre une étape de notre processus : de la maquette BIM au rendu final destiné aux clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              onClick={() => setActive(project)}
              className="reveal blueprint-frame text-plume-deep group text-left rounded-2xl overflow-hidden border border-line bg-paper hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="img-reveal aspect-[16/11]">
                <Image src={project.mainImage} alt={project.title} fill className="reveal-inner object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-graphite mt-1">{project.context}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-graphite/40 group-hover:text-plume-deep transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.software.map((s) => (
                    <span key={s} className="eyebrow px-2.5 py-1 rounded-full bg-ink/5 text-graphite">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-paper max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Fermer"
              className="icon-anim absolute top-5 right-5 w-9 h-9 rounded-full bg-paper/85 flex items-center justify-center hover:bg-plume hover:text-charcoal transition-colors z-10"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/9]">
              <Image src={active.mainImage} alt={active.title} fill className="object-cover" />
            </div>

            <div className="p-8 sm:p-10">
              <h3 className="font-display font-bold text-2xl sm:text-3xl">{active.title}</h3>
              <p className="text-graphite mt-2">{active.context}</p>

              <p className="mt-6 text-graphite leading-relaxed">{active.description}</p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-line">
                <div>
                  <p className="eyebrow text-graphite mb-2">Rôle</p>
                  <p className="font-medium">{active.role}</p>
                </div>
                <div>
                  <p className="eyebrow text-graphite mb-2">Logiciels utilisés</p>
                  <div className="flex flex-wrap gap-2">
                    {active.software.map((s) => (
                      <span key={s} className="eyebrow px-2.5 py-1 rounded-full bg-ink/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="eyebrow text-graphite mb-3">Galerie</p>
                <div className="grid grid-cols-3 gap-3">
                  {active.gallery.map((src) => (
                    <div key={src} className="relative aspect-square rounded-lg overflow-hidden bg-mist">
                      <Image src={src} alt={active.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

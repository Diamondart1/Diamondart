"use client";

import type { ElementType } from "react";
import { Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

const icons: Record<string, ElementType> = {
  instagram: Instagram,
  youtube: Youtube,
  // lucide-react has no official TikTok icon, using a simple custom mark below
};

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.14-1.39v9.94a5.44 5.44 0 1 1-4.69-5.39v2.2a3.24 3.24 0 1 0 2.28 3.09V2h2.29a4.28 4.28 0 0 0 3.26 4.13v2.2a6.5 6.5 0 0 1-.31-.1z" />
    </svg>
  );
}

export function SocialMedia() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-28 lg:py-36 bg-mist">
      <div ref={ref} className="max-w-content mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="reveal eyebrow text-plume-deep mb-5">
            Contenu & communauté
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight">
            <span className="mask"><span className="mask-inner">Nous partageons ce que nous apprenons, chaque semaine.</span></span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, i) => {
            const Icon = icons[social.icon];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group bg-paper rounded-2xl p-7 border border-line hover:border-plume transition-colors flex flex-col"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="icon-anim w-11 h-11 rounded-full bg-charcoal text-plume flex items-center justify-center mb-6 group-hover:bg-plume group-hover:text-charcoal group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {Icon ? <Icon size={19} /> : <TikTokIcon size={18} />}
                </div>
                <h3 className="font-display font-bold text-lg">
                  {social.name}
                </h3>
                <p className="text-sm text-graphite mt-2 leading-relaxed flex-1">
                  {social.description}
                </p>
                <span className="eyebrow text-plume-deep mt-6 flex items-center gap-1.5">
                  Suivre <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="reveal mt-8 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="eyebrow text-graphite">
            Dernières publications
          </p>
          <p className="text-graphite mt-2 max-w-md mx-auto text-sm">
            Cet espace affichera automatiquement les publications récentes
            d&apos;Instagram et TikTok une fois les comptes connectés.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-8 max-w-2xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-ink/5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 lg:py-36 bg-mist">
      <div ref={ref} className="max-w-content mx-auto px-6 lg:px-10 max-w-3xl">
        <div className="max-w-2xl mb-14">
          <p className="reveal eyebrow text-plume-deep mb-5">FAQ</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight">
            <span className="mask">
              <span className="mask-inner">Vos questions, nos réponses.</span>
            </span>
          </h2>
        </div>

        <div className="reveal">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.question} className="border-b border-line py-6">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-6"
                  aria-expanded={open}
                >
                  <span className="font-display font-semibold text-lg">{f.question}</span>
                  <Plus
                    size={22}
                    className={`shrink-0 text-plume-deep transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ maxHeight: open ? "400px" : "0px" }}
                >
                  <p className="text-graphite leading-relaxed pt-4 pr-8">{f.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

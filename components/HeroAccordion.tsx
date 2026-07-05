"use client";

import { useState } from "react";
import Image from "next/image";
import { heroAccordion } from "@/lib/data";

type AccordionItemProps = {
  title: string;
  image: string;
  isActive: boolean;
  onActivate: () => void;
};

function AccordionItem({ title, image, isActive, onActivate }: AccordionItemProps) {
  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={`
        img-reveal blueprint-frame text-plume relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer shrink-0
        transition-[width] duration-700 ease-in-out border border-ink/10
        ${isActive ? "w-[260px] sm:w-[340px]" : "w-[54px] sm:w-[60px]"}
      `}
    >
      <Image src={image} alt={title} fill className="reveal-inner object-cover" />
      <div className="absolute inset-0 bg-black/35" />

      <span
        className={`
          absolute font-display font-semibold text-paper whitespace-nowrap text-sm sm:text-base
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "bottom-20 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {title}
      </span>
    </div>
  );
}

export function HeroAccordion() {
  const [activeIndex, setActiveIndex] = useState(heroAccordion.length - 1);

  return (
    <div className="flex flex-row items-center gap-3 sm:gap-4 overflow-x-auto pb-2 no-scrollbar">
      {heroAccordion.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          image={item.image}
          isActive={index === activeIndex}
          onActivate={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

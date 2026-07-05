import Image from "next/image";
import { imageStrip } from "@/lib/data";

export function ImageStrip() {
  return (
    <div className="bg-paper pb-16 pt-10">
      <div className="max-w-content mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {imageStrip.map((src, i) => (
          <a
            key={src}
            href="#portfolio"
            className="img-reveal blueprint-frame text-plume-deep aspect-[3/4] rounded-xl block border border-line"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Image src={src} alt="Projet Diamond Art" fill className="reveal-inner object-cover" />
          </a>
        ))}
      </div>
    </div>
  );
}

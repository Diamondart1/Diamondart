import { marqueeWords } from "@/lib/data";

export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords]; // duplicated for a seamless loop

  return (
    <div className="bg-mist border-y border-line py-6">
      <div className="marquee">
        <div className="marquee-track dir-left font-display font-bold text-2xl sm:text-3xl text-charcoal">
          {items.map((w, i) => (
            <span key={`${w}-${i}`}>
              <span className="marquee-item">{w}</span>
              <span className="marquee-star">*</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

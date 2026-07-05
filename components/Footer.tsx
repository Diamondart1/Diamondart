import { Logo } from "./Logo";
import { footerLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal text-paper pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-10" aria-hidden="true" />
      <div className="relative max-w-content mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-16 border-b border-white/15">
          <div>
            <Logo light />
            <p className="text-paper/60 text-sm mt-5 max-w-xs leading-relaxed">
              {siteConfig.shortIntro}
            </p>
          </div>

          {footerLinks.columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-paper/45 mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-paper/70 hover:text-plume transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Tous droits
            réservés.
          </p>
          <p className="eyebrow">Studio Diamond Art</p>
        </div>
      </div>
    </footer>
  );
}

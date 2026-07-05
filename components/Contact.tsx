"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle, Instagram, Youtube, Music2 } from "lucide-react";
import { contact, siteConfig, socials } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connectez ce formulaire à votre service d'envoi préféré
    // (Formspree, Resend, une route API Next.js, etc.)
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-28 lg:py-36 bg-mist">
      <div
        ref={ref}
        className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-16"
      >
        <div>
          <p className="reveal eyebrow text-plume-deep mb-5">
            {contact.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight max-w-md">
            <span className="mask">
              <span className="mask-inner">{contact.title}</span>
            </span>
          </h2>
          <p className="reveal mt-6 text-graphite leading-relaxed max-w-md">
            {contact.description}
          </p>

          <div className="reveal mt-10 space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-3 text-sm hover:text-plume-deep transition-colors"
            >
              <Mail size={17} className="icon-anim group-hover:text-plume-deep" /> {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-3 text-sm hover:text-plume-deep transition-colors"
            >
              <Phone size={17} className="icon-anim group-hover:text-plume-deep" /> {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm hover:text-plume-deep transition-colors"
            >
              <MessageCircle size={17} className="icon-anim group-hover:text-plume-deep" /> WhatsApp
            </a>
          </div>

          <div className="reveal flex items-center gap-3 mt-8">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="icon-anim w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-plume hover:text-plume-deep hover:bg-plume/10 transition-colors"
              >
                {s.name === "YouTube" ? (
                  <Youtube size={15} />
                ) : s.name === "TikTok" ? (
                  <Music2 size={15} />
                ) : (
                  <Instagram size={15} />
                )}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal bg-paper rounded-2xl border border-line p-8 sm:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="eyebrow text-graphite block mb-2">
                Nom
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full bg-transparent border-b border-line pb-2.5 focus:outline-none focus:border-plume-deep transition-colors"
              />
            </div>
            <div>
              <label className="eyebrow text-graphite block mb-2">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full bg-transparent border-b border-line pb-2.5 focus:outline-none focus:border-plume-deep transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="eyebrow text-graphite block mb-2">
              Sujet
            </label>
            <select
              name="subject"
              className="w-full bg-transparent border-b border-line pb-2.5 focus:outline-none focus:border-plume-deep transition-colors"
            >
              <option>Projet architectural / BIM</option>
              <option>Formation Revit</option>
              <option>Formation D5 Render</option>
              <option>Autre demande</option>
            </select>
          </div>

          <div>
            <label className="eyebrow text-graphite block mb-2">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full bg-transparent border-b border-line pb-2.5 focus:outline-none focus:border-plume-deep transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="magnetic w-full py-4 rounded-full bg-charcoal text-paper font-medium hover:opacity-90 transition-opacity"
          >
            {status === "sent" ? "Message envoyé ✓" : "Envoyer le message"}
          </button>
          {status === "sent" && (
            <p className="text-xs text-graphite text-center">
              Merci, vous recevrez une réponse sous peu.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

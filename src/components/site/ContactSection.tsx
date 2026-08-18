import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

import { Btn, SectionLabel } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";
import { ADDRESS, EMAIL, MAPS, PHONE, TEL, WA } from "@/lib/site-data";

const contactCards = [
  {
    icon: Phone,
    label: "Telefon urgențe",
    value: PHONE,
    href: `tel:${TEL}`,
    cta: "Sună acum",
    accent: "brand",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp rapid",
    value: "Răspuns în câteva minute",
    href: WA,
    cta: "Scrie pe WhatsApp",
    accent: "success",
  },
  {
    icon: MapPin,
    label: "Adresă atelier",
    value: ADDRESS,
    href: MAPS,
    cta: "Vezi pe hartă",
    accent: "muted",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Non-stop, 24/7",
    href: `mailto:${EMAIL}`,
    cta: "Trimite email",
    accent: "muted",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hai să vorbim.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Sună-ne pentru intervenții urgente sau trimite-ne mesajul direct pe WhatsApp —
              opțional cu locația ta exactă.
            </p>

            {/* Big CTA */}
            <a
              href={`tel:${TEL}`}
              className="group mt-8 flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-float sm:p-8"
            >
              <span className="relative flex size-16 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-glow">
                <span className="absolute inset-0 rounded-2xl bg-brand/20 animate-ping" />
                <Phone className="relative size-7" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Apel de urgență
                </p>
                <p className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  {PHONE}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Disponibil 24/7 · Răspundem în mai puțin de 1 minut
                </p>
              </div>
              <Zap className="ml-auto hidden size-6 shrink-0 text-brand transition-transform group-hover:translate-x-1 sm:block" />
            </a>

            {/* Cards grid */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl ${
                        card.accent === "brand"
                          ? "bg-brand text-brand-foreground"
                          : card.accent === "success"
                            ? "bg-success text-brand-foreground"
                            : "bg-surface text-muted-foreground"
                      }`}
                    >
                      <card.icon className="size-5" />
                    </span>
                    <span className="text-xs font-semibold text-brand transition-transform group-hover:translate-x-1">
                      {card.cta} →
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-semibold text-muted-foreground">{card.label}</p>
                  <p className="mt-1 text-base font-bold">{card.value}</p>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Star, label: "4.9 rating", sub: "120+ recenzii" },
                { icon: Clock, label: "24/7", sub: "Non-stop" },
                { icon: ShieldCheck, label: "Garanție", sub: "La fiecare lucrare" },
                { icon: Zap, label: "< 20 min", sub: "Timp de răspuns" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <b.icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{b.label}</p>
                    <p className="text-[10px] text-muted-foreground">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:pl-4">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <p className="text-base font-bold">Trimite mesaj rapid</p>
                  <p className="text-xs text-muted-foreground">Se deschide în WhatsApp</p>
                </div>
              </div>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { SectionLabel } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";
import { ADDRESS, MAPS, PHONE, TEL, WA } from "@/lib/site-data";

const rows = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Răspuns în câteva minute",
    href: WA,
  },
  {
    icon: MapPin,
    label: "Atelier",
    value: ADDRESS,
    href: MAPS,
  },
  {
    icon: Clock,
    label: "Program",
    value: "Non-stop, 24/7",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <div className="max-w-xl">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Hai să vorbim.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Sună pentru intervenții urgente sau scrie-ne pe WhatsApp cu locația ta.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <a
              href={`tel:${TEL}`}
              className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-float"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <Phone className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-2xl font-black tracking-tight sm:text-3xl">{PHONE}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Disponibil 24/7 · răspundem imediat
                </p>
              </div>
            </a>

            <div className="mt-8 divide-y divide-border border-t border-border">
              {rows.map((row) => {
                const Wrapper = row.href ? "a" : "div";
                return (
                  <Wrapper
                    key={row.label}
                    {...(row.href
                      ? {
                          href: row.href,
                          target: row.href.startsWith("http") ? "_blank" : undefined,
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="group flex items-center gap-4 py-4 transition-colors hover:text-brand"
                  >
                    <row.icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                    <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-medium">{row.value}</span>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
              <p className="text-base font-bold">Trimite mesaj rapid</p>
              <p className="mt-1 text-xs text-muted-foreground">Se deschide în WhatsApp</p>
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

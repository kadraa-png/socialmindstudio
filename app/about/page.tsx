"use client";

import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { SiteHeader } from "@/components/site-header";
import { teamLeads } from "@/lib/team";
import type { Lang } from "@/lib/i18n";
import { usePreferredLanguage } from "@/lib/use-language";
import {
  IconArrowUpRight,
  IconChartDots3,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";

type TimelineEntry = {
  year: string;
  title: Record<Lang, string>;
  copy: Record<Lang, string>;
};

const missionCopy: Record<Lang, string> = {
  en: "We pair research-heavy strategy with intuitive design to guide launches for ambitious founders. Minimal noise, maximum context.",
  bs: "Spajamo istraživačku strategiju i intuitivan dizajn kako bismo vodili lansiranja ambicioznih timova. Minimalna buka, maksimalan kontekst.",
};

const timeline: TimelineEntry[] = [
  {
    year: "2019",
    title: {
      en: "Studio roots",
      bs: "Korijeni studija",
    },
    copy: {
      en: "Started as a duo building fast landing pages for Balkan startups.",
      bs: "Počeli smo kao duo koji gradi brze landing stranice za startupe na Balkanu.",
    },
  },
  {
    year: "2021",
    title: {
      en: "Social-first shift",
      bs: "Pomak ka social-first",
    },
    copy: {
      en: "Expanded to social retainers, creator pods, and paid media orchestration.",
      bs: "Proširili se na social retainere, kreatorske podove i orkestraciju plaćenih kampanja.",
    },
  },
  {
    year: "2024",
    title: {
      en: "Systems studio",
      bs: "Studio sistema",
    },
    copy: {
      en: "Grew into a remote studio delivering launch systems across EU, MENA, and US.",
      bs: "Prerasli u remote studio koji isporučuje launch sisteme kroz EU, MENA i SAD.",
    },
  },
];

const values = [
  {
    icon: IconTargetArrow,
    title: {
      en: "Precision research",
      bs: "Precizno istraživanje",
    },
    copy: {
      en: "Stakeholder interviews, cultural QA, and live dashboards before any creative move.",
      bs: "Intervjui sa stakeholderima, kulturni QA i live dashboardi prije svakog kreativnog poteza.",
    },
  },
  {
    icon: IconChartDots3,
    title: {
      en: "Calm collaboration",
      bs: "Mirna saradnja",
    },
    copy: {
      en: "Fixed cadences, asynchronous reviews, and transparent roadmaps.",
      bs: "Fiksni ritmovi, asinhrone revizije i transparentni roadmapi.",
    },
  },
  {
    icon: IconUsersGroup,
    title: {
      en: "Embedded support",
      bs: "Ugrađena podrška",
    },
    copy: {
      en: "We plug into your team, tooling, and rituals like an internal unit.",
      bs: "Uključujemo se u vaš tim, alate i rituale kao interni odjel.",
    },
  },
];

export default function AboutPage() {
  const { lang, toggle } = usePreferredLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2e3fc4] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,214,107,0.4),transparent_48%),radial-gradient(circle_at_82%_12%,rgba(255,111,156,0.35),transparent_48%),radial-gradient(circle_at_60%_80%,rgba(62,240,197,0.32),transparent_42%)]" />
      <div className="relative z-10 space-y-10 pb-10">
        <SiteHeader lang={lang} onToggleLang={toggle} />
        <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24">
          <section className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              {lang === "en" ? "About" : "O nama"}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              {lang === "en"
                ? "A boutique studio from Sarajevo shaping global launches."
                : "Boutique studio iz Sarajeva koji oblikuje globalna lansiranja."}
            </h1>
            <p className="text-lg text-white/75">{missionCopy[lang]}</p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {lang === "en" ? "View capabilities" : "Pogledaj sposobnosti"}
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </section>

          <section className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              {lang === "en" ? "Timeline" : "Vremenska linija"}
            </p>
            <div className="space-y-4">
              {timeline.map((entry) => (
                <article
                  key={entry.year}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm uppercase tracking-[0.4em] text-white/60">
                      {entry.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {entry.title[lang]}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{entry.copy[lang]}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              {lang === "en" ? "Values" : "Vrijednosti"}
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title.en}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80"
                  >
                    <Icon className="h-8 w-8 text-sky-200" />
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {value.title[lang]}
                    </h3>
                    <p className="mt-2 text-sm">{value.copy[lang]}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              {lang === "en" ? "Leadership" : "Liderstvo"}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {teamLeads.map((lead) => (
                <PortraitPlaceholder
                  key={lead.name}
                  image={lead.image}
                  name={lead.name}
                  role={lead.role[lang]}
                  description={lead.note[lang]}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

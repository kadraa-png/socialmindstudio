"use client";

import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { SiteHeader } from "@/components/site-header";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { teamLeads } from "@/lib/team";
import { usePreferredLanguage } from "@/lib/use-language";
import type { Lang } from "@/lib/i18n";
import {
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandTiktok,
  IconChartArrowsVertical,
  IconDeviceMobile,
  IconSparkles,
} from "@tabler/icons-react";
import Link from "next/link";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

const heroWords: Record<Lang, { text: string; className?: string }[]> = {
  en: [
    { text: "Launch" },
    { text: "calm" },
    { text: "connected" },
    { text: "experiences", className: "text-sky-200" },
  ],
  bs: [
    { text: "Lansiraj" },
    { text: "smirena" },
    { text: "povezana" },
    { text: "iskustva", className: "text-sky-200" },
  ],
};

const heroTitle: Record<Lang, string> = {
  en: "Sleek digital presence with measurable lift",
  bs: "Elegantno digitalno prisustvo sa mjerljivim rastom",
};

const heroCopy: Record<Lang, string> = {
  en: "We craft minimal, data-backed websites and social ecosystems for founders who need clarity, velocity, and results without the clutter.",
  bs: "Gradimo minimalističke, podacima vođene web i social ekosisteme za brendove kojima trebaju jasnoća, brzina i rezultati bez buke.",
};

const stats: { value: string; label: Record<Lang, string> }[] = [
  {
    value: "120+",
    label: {
      en: "Launches shipped",
      bs: "Izvedenih lansiranja",
    },
  },
  {
    value: "4.8x",
    label: {
      en: "Avg ROAS across paid + organic",
      bs: "Prosječni ROAS kroz plaćeni + organski",
    },
  },
  {
    value: "24h",
    label: {
      en: "Emergency creative window",
      bs: "Hitni kreativni prozor",
    },
  },
];

type Capability = {
  icon: IconComponent;
  title: Record<Lang, string>;
  body: Record<Lang, string>;
};

const capabilities: Capability[] = [
  {
    icon: IconSparkles,
    title: {
      en: "Brand direction",
      bs: "Brend smjer",
    },
    body: {
      en: "Positioning, messaging, and creative systems that feel modern but timeless.",
      bs: "Pozicioniranje, poruke i kreativni sistemi koji djeluju moderno, ali bezvremenski.",
    },
  },
  {
    icon: IconDeviceMobile,
    title: {
      en: "Product & web",
      bs: "Proizvod i web",
    },
    body: {
      en: "High-performing sites and experiences optimized for accessibility and speed.",
      bs: "Visokoperformantne stranice i iskustva optimizovana za pristupačnost i brzinu.",
    },
  },
  {
    icon: IconChartArrowsVertical,
    title: {
      en: "Growth loops",
      bs: "Petlje rasta",
    },
    body: {
      en: "Content, creators, and paid media combined in one operating rhythm.",
      bs: "Sadržaj, kreatori i plaćeni mediji objedinjeni u jedinstveni operativni ritam.",
    },
  },
];

const microProjects: {
  name: string;
  metric: string;
  copy: Record<Lang, string>;
}[] = [
  {
    name: "Pulse Athletics",
    metric: "+212% ROAS",
    copy: {
      en: "Unified cart experience and automated drop calendar for a calmer launch cycle.",
      bs: "Ujedinjen checkout i automatiziran kalendar dropova za smireniji launch ciklus.",
    },
  },
  {
    name: "Nova Board",
    metric: "6wk rollout",
    copy: {
      en: "Destination storytelling plus micro-sites that stretched seasonal demand.",
      bs: "Storytelling destinacije i microsite kampanje koje su produžile sezonsku potražnju.",
    },
  },
  {
    name: "Orbis Finance",
    metric: "5 markets",
    copy: {
      en: "Live dashboards and content guardrails to align product, web, and comms.",
      bs: "Live dashboardi i guardrails za usklađivanje produkta, weba i komunikacije.",
    },
  },
];

const contactLinks = [
  {
    icon: IconBrandInstagram,
    label: { en: "Instagram DM", bs: "Instagram DM" },
    href: "https://www.instagram.com/social_mind_studio",
    note: {
      en: "Quick moodboards & progress drops.",
      bs: "Brzi moodboardovi i updateovi.",
    },
  },
  {
    icon: IconBrandTiktok,
    label: { en: "TikTok Studio", bs: "TikTok Studio" },
    href: "https://www.tiktok.com/@social.mind.studio",
    note: {
      en: "Behind-the-scenes and growth ideas.",
      bs: "Iza scene i growth ideje.",
    },
  },
  {
    icon: IconArrowUpRight,
    label: { en: "Send an email", bs: "Pošalji email" },
    href: "mailto:socialmind.contact@gmail.com",
    note: {
      en: "Detailed briefs & partnerships.",
      bs: "Detaljni brifovi i partnerstva.",
    },
  },
];

export default function Home() {
  const { lang, toggle } = usePreferredLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.2),transparent_45%)]" />
      <div className="relative z-10 space-y-10 pb-10">
        <SiteHeader lang={lang} onToggleLang={toggle} />
        <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24">
          <section className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
                {lang === "en" ? "Studio update" : "Studijski update"}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {heroTitle[lang]}
              </h1>
              <p className="mt-4 text-lg text-white/75">{heroCopy[lang]}</p>
              <TypewriterEffect
                words={heroWords[lang]}
                className="mt-6 justify-start text-left text-white"
                cursorClassName="bg-white"
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {lang === "en" ? "See services" : "Pogledaj usluge"}
                </Link>
                <Link
                  href="#contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {lang === "en" ? "Talk to us" : "Pričajmo"}
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label.en}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80"
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em]">
                      {stat.label[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-transparent p-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                  {lang === "en" ? "Workflow" : "Workflow"}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {lang === "en"
                    ? "Calm dashboards, confident rollouts."
                    : "Mirni dashboardi, samouvjerena lansiranja."}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {[
                    lang === "en" ? "Live QA for every post & page" : "Live QA za svaku objavu i stranicu",
                    lang === "en" ? "Creator pods + media buying loops" : "Kreator podovi + media buying petlje",
                    lang === "en" ? "Weekly retro with action items" : "Sedmični retro sa akcijama",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                  {lang === "en" ? "Currently collaborating" : "Trenutno sarađujemo"}
                </p>
                <div className="mt-4 space-y-3 text-sm text-white/80">
                  <p>Meta Partners</p>
                  <p>Figma Guild</p>
                  <p>Webflow Circle</p>
                </div>
              </div>
            </div>
          </section>

          <section id="capabilities" className="space-y-8">
            <div className="flex flex-col gap-3 text-left">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                {lang === "en" ? "Core capabilities" : "Ključne sposobnosti"}
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {lang === "en"
                  ? "Strategy, craft, and measurement in unison."
                  : "Strategija, zanat i mjerenje u istom ritmu."}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <article
                    key={cap.title.en}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80"
                  >
                    <Icon className="h-8 w-8 text-sky-200" />
                    <h3 className="mt-4 text-xl font-semibold text-white">{cap.title[lang]}</h3>
                    <p className="mt-2 text-sm">{cap.body[lang]}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="team" className="space-y-8">
            <div className="flex flex-col gap-3 text-left">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                {lang === "en" ? "Creative leads" : "Kreativni lideri"}
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {lang === "en"
                  ? "Hands-on partners guiding every launch."
                  : "Partneri koji lično vode svako lansiranje."}
              </h2>
            </div>
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

          <section id="work" className="space-y-8">
            <div className="flex flex-col gap-3 text-left">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                {lang === "en" ? "Selected work" : "Odabrani radovi"}
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {lang === "en"
                  ? "Momentum across commerce, finance, and travel."
                  : "Momentum kroz e‑commerce, finansije i turizam."}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {microProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142d5c] via-[#1b2750] to-[#0b1327] p-6"
                >
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{project.name}</span>
                    <span className="text-white">{project.metric}</span>
                  </div>
                  <p className="mt-4 text-sm text-white/80">{project.copy[lang]}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#1d2b6f] via-[#243b89] to-[#2f6bff] p-8 text-white">
            <div className="flex flex-col gap-3 text-left">
              <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                {lang === "en" ? "Contact" : "Kontakt"}
              </p>
              <h2 className="text-3xl font-semibold">
                {lang === "en"
                  ? "Tell us what needs to ship next."
                  : "Recite nam šta sljedeće treba da se lansira."}
              </h2>
              <p className="text-sm text-white/80">
                {lang === "en"
                  ? "Choose the lane that matches your pace."
                  : "Odaberite kanal koji odgovara vašem tempu."}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex flex-col gap-2 rounded-2xl border border-white/30 bg-white/10 p-5 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <Icon className="h-6 w-6" />
                    <p className="text-lg font-semibold">{link.label[lang]}</p>
                    <p className="text-sm text-white/80">{link.note[lang]}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
        <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Social Mind Studio — crafted in Sarajevo.
        </footer>
      </div>
    </div>
  );
}

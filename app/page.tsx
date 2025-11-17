"use client";

import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { ScrollReveal } from "@/components/scroll-reveal";
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
    {
      text: "experiences",
      className:
        "bg-gradient-to-r from-[#3ef0c5] via-[#ffd66b] to-[#ff6f9c] bg-clip-text text-transparent",
    },
  ],
  bs: [
    { text: "Lansiraj" },
    { text: "smirena" },
    { text: "povezana" },
    {
      text: "iskustva",
      className:
        "bg-gradient-to-r from-[#3ef0c5] via-[#ffd66b] to-[#ff6f9c] bg-clip-text text-transparent",
    },
  ],
};

const heroTitle: Record<Lang, string> = {
  en: "Sleek digital presence with measurable lift",
  bs: "Elegantno digitalno prisustvo sa mjerljivim rastom",
};

const heroCopy: Record<Lang, string> = {
  en: "We craft minimal, data-backed websites and social ecosystems for founders who need clarity, velocity, and results without the clutter.",
  bs: "Gradimo minimalističke, podacima vođene web i društvene ekosisteme za brendove kojima trebaju jasnoća, brzina i rezultati bez buke.",
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
      bs: "Prosječni ROAS kroz plaćene i organske kanale",
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

const statGradients = [
  "from-[#3ef0c5]/60 via-[#2e3fc4]/40 to-[#ffd66b]/45",
  "from-[#ff6f9c]/55 via-[#2e3fc4]/35 to-[#ffd66b]/45",
  "from-[#915bff]/60 via-[#2e3fc4]/35 to-[#3ef0c5]/45",
] as const;

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
      bs: "Smjer brenda",
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

const capabilityGradients = [
  "from-[#11184d]/85 via-[#2e3fc4]/55 to-[#3ef0c5]/20",
  "from-[#1a1f5f]/85 via-[#915bff]/45 to-[#ff6f9c]/20",
  "from-[#11133f]/90 via-[#2e3fc4]/45 to-[#ffd66b]/20",
] as const;

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
      bs: "Objedinjeni checkout i automatizovan kalendar dropova za smireniji ciklus lansiranja.",
    },
  },
  {
    name: "Nova Board",
    metric: "6wk rollout",
    copy: {
      en: "Destination storytelling plus micro-sites that stretched seasonal demand.",
      bs: "Storytelling za destinacije i microsite kampanje koje su produžile sezonsku potražnju.",
    },
  },
  {
    name: "Orbis Finance",
    metric: "5 markets",
    copy: {
      en: "Live dashboards and content guardrails to align product, web, and comms.",
      bs: "Live dashboardi i smjernice za usklađivanje proizvoda, weba i komunikacije.",
    },
  },
];

const heroPills: { label: Record<Lang, string>; gradient: string }[] = [
  {
    label: {
      en: "Commerce sprints",
      bs: "Komercijalni sprintovi",
    },
    gradient: "from-[#ffd66b]/80 to-[#ff6f9c]/80",
  },
  {
    label: {
      en: "Travel launches",
      bs: "Lansiranja u turizmu",
    },
    gradient: "from-[#3ef0c5]/80 to-[#2e3fc4]/80",
  },
  {
    label: {
      en: "Finance playbooks",
      bs: "Finansijski vodiči",
    },
    gradient: "from-[#915bff]/80 to-[#ff6f9c]/80",
  },
];

const microProjectGradients = [
  "from-[#101742]/90 via-[#2e3fc4]/55 to-[#3ef0c5]/25",
  "from-[#1a1f5f]/85 via-[#915bff]/45 to-[#ffd66b]/25",
  "from-[#111331]/90 via-[#2e3fc4]/45 to-[#ff6f9c]/25",
] as const;

const contactLinks = [
  {
    icon: IconBrandInstagram,
    label: { en: "Instagram DM", bs: "Instagram DM" },
    href: "https://www.instagram.com/social_mind_studio",
    note: {
      en: "Quick moodboards & progress drops.",
      bs: "Brzi moodboardovi i ažuriranja.",
    },
  },
  {
    icon: IconBrandTiktok,
    label: { en: "TikTok Studio", bs: "TikTok Studio" },
    href: "https://www.tiktok.com/@social.mind.studio",
    note: {
      en: "Behind-the-scenes and growth ideas.",
      bs: "Iza scene i ideje za rast.",
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

const contactLinkGradients = [
  "from-white/10 via-[#2e3fc4]/25 to-[#3ef0c5]/15",
  "from-white/10 via-[#915bff]/20 to-[#ff6f9c]/15",
  "from-white/10 via-[#2e3fc4]/20 to-[#ffd66b]/15",
] as const;

export default function Home() {
  const { lang, toggle } = usePreferredLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2e3fc4] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,214,107,0.35),transparent_50%),radial-gradient(circle_at_82%_15%,rgba(255,111,156,0.4),transparent_50%),radial-gradient(circle_at_65%_80%,rgba(62,240,197,0.35),transparent_45%)]" />
      <div className="relative z-10 space-y-10 pb-10">
        <SiteHeader lang={lang} onToggleLang={toggle} />
        <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24">
          <section className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <ScrollReveal as="div" className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
                  {lang === "en" ? "Studio update" : "Novosti studija"}
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  {heroTitle[lang]}
                </h1>
                <p className="mt-4 text-lg text-white/80">{heroCopy[lang]}</p>
              </div>
              <TypewriterEffect
                words={heroWords[lang]}
                className="justify-start text-left text-white"
                cursorClassName="bg-white"
              />
              <div className="flex flex-wrap gap-3 pt-2">
                {heroPills.map((pill) => (
                  <span
                    key={pill.label.en}
                    className={`inline-flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r ${pill.gradient} px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900/80 shadow-[0_10px_25px_rgba(3,6,23,0.35)]`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    {pill.label[lang]}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-gradient-to-r from-[#2e3fc4] via-[#5c6dff] to-[#ff6f9c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2e3fc4]/30 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd66b]/70"
                >
                  {lang === "en" ? "See services" : "Pogledaj usluge"}
                </Link>
                <Link
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-[#ffd66b] via-[#3ef0c5] to-[#ff6f9c] p-[1px] text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <span className="block rounded-full bg-[#1a1f78]/80 px-6 py-3 text-white/95">
                    {lang === "en" ? "Talk to us" : "Pričajmo"}
                  </span>
                </Link>
              </div>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label.en}
                    className={`rounded-2xl border border-white/20 bg-gradient-to-br ${statGradients[index % statGradients.length]} p-4 text-white shadow-[0_25px_50px_rgba(3,6,23,0.45)]`}
                  >
                    <p className="text-3xl font-semibold text-white drop-shadow-sm">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/80">
                      {stat.label[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal
              as="div"
              delay={120}
              className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0c1033]/90 via-[#101a55]/70 to-[#182468]/60 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.55)]"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                  {lang === "en" ? "Workflow" : "Tok rada"}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {lang === "en"
                    ? "Calm dashboards, confident rollouts."
                    : "Mirni dashboardi, samouvjerena lansiranja."}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {[
                    lang === "en" ? "Live QA for every post & page" : "Live QA za svaku objavu i stranicu",
                    lang === "en" ? "Creator pods + media buying loops" : "Kreatorski podovi + oglašivačke petlje",
                    lang === "en" ? "Weekly retro with action items" : "Sedmični retro sa zadacima",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#3ef0c5] to-[#ffd66b]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#060b24]/80 p-6">
                <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                  {lang === "en" ? "Currently collaborating" : "Trenutno sarađujemo"}
                </p>
                <div className="mt-4 space-y-3 text-sm text-white/85">
                  <p className="text-white">Meta Partners</p>
                  <p>Figma Guild</p>
                  <p>Webflow Circle</p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <ScrollReveal as="section" id="capabilities" className="space-y-8">
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
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                const gradient = capabilityGradients[index % capabilityGradients.length];
                return (
                  <article
                    key={cap.title.en}
                    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} p-6 text-white/85 shadow-[0_25px_40px_rgba(3,6,23,0.45)]`}
                  >
                    <div className="pointer-events-none absolute -right-6 top-6 h-20 w-20 rounded-full bg-white/10 blur-3xl" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="relative mt-6 text-xl font-semibold text-white">{cap.title[lang]}</h3>
                    <p className="relative mt-2 text-sm text-white/80">{cap.body[lang]}</p>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal as="section" id="team" className="space-y-8" delay={80}>
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
                  imageWidth={lead.imageWidth}
                  imageHeight={lead.imageHeight}
                  name={lead.name}
                  role={lead.role[lang]}
                  description={lead.note[lang]}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal as="section" id="work" className="space-y-8" delay={120}>
            <div className="flex flex-col gap-3 text-left">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                {lang === "en" ? "Selected work" : "Odabrani radovi"}
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {lang === "en"
                  ? "Momentum across commerce, finance, and travel."
                  : "Zamah kroz e‑commerce, finansije i turizam."}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {microProjects.map((project, index) => (
                <article
                  key={project.name}
                  className={`rounded-3xl border border-white/10 bg-gradient-to-br ${microProjectGradients[index % microProjectGradients.length]} p-6 shadow-[0_25px_45px_rgba(3,6,23,0.5)]`}
                >
                  <div className="flex items-center justify-between text-sm text-white/75">
                    <span className="font-medium">{project.name}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                      {project.metric}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-white/90">{project.copy[lang]}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            as="section"
            id="contact"
            className="space-y-8 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(62,240,197,0.25),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(255,111,156,0.25),transparent_45%),linear-gradient(120deg,#111744,#2e3fc4,#915bff)] p-8 text-white shadow-[0_30px_60px_rgba(3,6,23,0.55)]"
            delay={160}
          >
            <div className="flex flex-col gap-3 text-left">
              <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                {lang === "en" ? "Contact" : "Kontakt"}
              </p>
              <h2 className="text-3xl font-semibold">
                {lang === "en"
                  ? "Tell us what needs to ship next."
                  : "Recite nam šta sljedeće treba lansirati."}
              </h2>
              <p className="text-sm text-white/80">
                {lang === "en"
                  ? "Choose the lane that matches your pace."
                  : "Odaberite kanal koji odgovara vašem tempu."}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                const gradient = contactLinkGradients[index % contactLinkGradients.length];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`flex flex-col gap-3 rounded-2xl border border-white/20 bg-gradient-to-br ${gradient} p-5 text-white transition hover:-translate-y-1 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd66b]/60`}
                  >
                    <Icon className="h-6 w-6 text-[#ffd66b]" />
                    <p className="text-lg font-semibold">{link.label[lang]}</p>
                    <p className="text-sm text-white/85">{link.note[lang]}</p>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </main>
        <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Social Mind Studio — crafted in Sarajevo.
        </footer>
      </div>
    </div>
  );
}

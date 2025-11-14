"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import type { Lang } from "@/lib/i18n";
import { usePreferredLanguage } from "@/lib/use-language";
import type { ComponentType } from "react";
import {
  IconAlignBoxCenterMiddle,
  IconChartHistogram,
  IconDeviceLaptop,
  IconSpeakerphone,
} from "@tabler/icons-react";

type Service = {
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  icon: ComponentType<{ className?: string }>;
  deliverables: Record<Lang, string[]>;
};

const services: Service[] = [
  {
    title: { en: "Brand Direction Sprint", bs: "Brand smjer sprint" },
    summary: {
      en: "Positioning, tone, and creative systems built in four focused weeks.",
      bs: "Pozicioniranje, ton i kreativni sistemi kompletirani u četiri fokusirane sedmice.",
    },
    icon: IconAlignBoxCenterMiddle,
    deliverables: {
      en: [
        "Audience + competitor field notes",
        "Messaging matrix and voice kit",
        "Mood, typography, and art direction",
      ],
      bs: [
        "Bilješke publike i konkurencije",
        "Matrica poruka i voice kit",
        "Mood, tipografija i art direkcija",
      ],
    },
  },
  {
    title: { en: "Product & Web Build", bs: "Izrada proizvoda i weba" },
    summary: {
      en: "Webflow, Next.js, or Shopify builds that stay fast and accessible.",
      bs: "Webflow, Next.js ili Shopify izrade koje ostaju brze i pristupačne.",
    },
    icon: IconDeviceLaptop,
    deliverables: {
      en: [
        "Information architecture + wireframes",
        "Component libraries + CMS setup",
        "Performance budget & accessibility report",
      ],
      bs: [
        "Informaciona arhitektura + wireframe",
        "Biblioteke komponenti + CMS setup",
        "Budžet performansi i accessibility izvještaj",
      ],
    },
  },
  {
    title: { en: "Social & Creator Ops", bs: "Social i creator operacije" },
    summary: {
      en: "Content systems, creator pods, and paid loops handled end-to-end.",
      bs: "Sistemi sadržaja, kreatorski podovi i plaćene petlje odrađeni end-to-end.",
    },
    icon: IconSpeakerphone,
    deliverables: {
      en: [
        "Editorial calendar + creative briefs",
        "Creator sourcing & UGC direction",
        "Paid media pairing + reporting",
      ],
      bs: [
        "Urednički kalendar + kreativni brifovi",
        "Sourcing kreatora i UGC direkcija",
        "Spoj sa plaćenim kanalima + izvještavanje",
      ],
    },
  },
  {
    title: { en: "Growth Intelligence", bs: "Inteligencija rasta" },
    summary: {
      en: "Dashboards, experiments, and insights to keep momentum visible.",
      bs: "Dashboardi, eksperimenti i uvidi koji čine momentum vidljivim.",
    },
    icon: IconChartHistogram,
    deliverables: {
      en: [
        "Measurement framework & KPIs",
        "Experiment backlog + prioritization",
        "Weekly signal summaries",
      ],
      bs: [
        "Okvir mjerenja i KPI-jevi",
        "Backlog eksperimenata i prioriteti",
        "Sedmični sažeci signala",
      ],
    },
  },
];

const serviceGradients = [
  "from-[#11184d]/85 via-[#2e3fc4]/55 to-[#3ef0c5]/20",
  "from-[#1b1f5f]/85 via-[#915bff]/45 to-[#ffd66b]/20",
  "from-[#101433]/90 via-[#2e3fc4]/45 to-[#ff6f9c]/20",
  "from-[#0f1438]/90 via-[#2e3fc4]/40 to-[#ffd66b]/18",
] as const;

const processSteps: { title: Record<Lang, string>; copy: Record<Lang, string> }[] = [
  {
    title: { en: "01. Deep dive", bs: "01. Dubinsko istraživanje" },
    copy: {
      en: "Interviews, analytics pull, and systems audit.",
      bs: "Intervjui, analitika i audit sistema.",
    },
  },
  {
    title: { en: "02. Build", bs: "02. Izrada" },
    copy: {
      en: "Co-create assets in FigJam, Notion, and Webflow/Next.",
      bs: "Kreiranje asseta u FigJam-u, Notionu i Webflow/Next stacku.",
    },
  },
  {
    title: { en: "03. Iterate", bs: "03. Iteracija" },
    copy: {
      en: "Weekly retros, dashboards, and performance reviews.",
      bs: "Sedmični retro, dashboardi i performance pregledi.",
    },
  },
];

export default function ServicesPage() {
  const { lang, toggle } = usePreferredLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2e3fc4] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(255,214,107,0.4),transparent_45%),radial-gradient(circle_at_80%_12%,rgba(255,111,156,0.35),transparent_45%),radial-gradient(circle_at_60%_80%,rgba(62,240,197,0.35),transparent_40%)]" />
      <SiteHeader lang={lang} onToggleLang={toggle} />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <ScrollReveal as="section" className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">
            {lang === "en" ? "Services" : "Usluge"}
          </p>
          <div className="h-1 w-32 rounded-full bg-gradient-to-r from-[#ffd66b] via-[#3ef0c5] to-[#ff6f9c]" />
          <h1 className="text-4xl font-semibold leading-tight text-white">
            {lang === "en"
              ? "Choose the layer you need, or stack them for full momentum."
              : "Odaberite sloj koji vam treba ili ih spojite za puni momentum."}
          </h1>
          <p className="text-lg text-white/75">
            {lang === "en"
              ? "Every engagement includes a dedicated producer, async support, and a live command hub so nothing slips."
              : "Svaki angažman uključuje dedicated producenta, async podršku i live command hub kako ništa ne bi iskliznulo."}
          </p>
        </ScrollReveal>

        <ScrollReveal as="section" className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const gradient = serviceGradients[index % serviceGradients.length];
            return (
              <article
                key={service.title.en}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} p-6 text-white/85 shadow-[0_25px_45px_rgba(3,6,23,0.45)]`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  {service.title[lang]}
                </h2>
                <p className="mt-2 text-sm">{service.summary[lang]}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {service.deliverables[lang].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#3ef0c5] to-[#ffd66b]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </ScrollReveal>

        <ScrollReveal
          as="section"
          className="grid gap-6 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,214,107,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(62,240,197,0.3),transparent_45%),linear-gradient(120deg,#111744,#1b2780,#2e3fc4)] p-8 text-white md:grid-cols-3"
          delay={120}
        >
          {processSteps.map((step) => (
            <div key={step.title.en}>
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                {step.title[lang]}
              </p>
              <p className="mt-3 text-sm text-white/80">{step.copy[lang]}</p>
            </div>
          ))}
        </ScrollReveal>
      </main>
    </div>
  );
}

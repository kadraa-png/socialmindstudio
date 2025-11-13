"use client";

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
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader lang={lang} onToggleLang={toggle} />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">
            {lang === "en" ? "Services" : "Usluge"}
          </p>
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
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title.en}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80"
              >
                <Icon className="h-8 w-8 text-sky-200" />
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  {service.title[lang]}
                </h2>
                <p className="mt-2 text-sm">{service.summary[lang]}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {service.deliverables[lang].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#131b38] via-[#1a2752] to-[#1d3181] p-8 text-white md:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.title.en}>
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                {step.title[lang]}
              </p>
              <p className="mt-3 text-sm text-white/80">{step.copy[lang]}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

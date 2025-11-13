import Link from "next/link";

export const metadata = {
  title: "Social Mind Studio | Work",
  description: "Selected case studies that showcase how we craft momentum across web, content, and growth.",
};

const caseStudyDetails = [
  {
    name: "Pulse Athletics",
    focus: "Headless commerce, social conversion, automation",
    outcome: "+212% QoQ revenue, 42% repeat rate",
    insight:
      "We paired a lightning-fast storefront with creator-led drops. A shared analytics layer let marketing, dev, and fulfillment ship twice per sprint.",
  },
  {
    name: "Orbis Finance",
    focus: "Brand system, multi-market rollout, paid media",
    outcome: "35-day launch cycles, +68% lead quality",
    insight:
      "Centralized content ops and a design token library so five regions told the same story while swapping currencies, imagery, and compliance.",
  },
  {
    name: "Nova Tourism Board",
    focus: "Narrative microsites, campaign film, geo targeting",
    outcome: "+460% impressions, year-round bookings",
    insight:
      "We architected modular story blocks and TikTok-first edits so each destination had a cinematic hook without rebuilding the whole funnel.",
  },
] as const;

const processMilestones = [
  {
    title: "Pulse Session",
    detail:
      "We kick off with a 90‑minute workshop to map KPIs, audiences, and friction points. You leave with a living mural, not a static intake form.",
  },
  {
    title: "Systems sprint",
    detail:
      "Design, content, and engineering pair in parallel. We build a source-of-truth brief inside Notion + Linear so feedback is asynchronous.",
  },
  {
    title: "Launch theater",
    detail:
      "Every launch travels through a rehearsal: QA, accessibility, performance, platform policies, and rollout comms. Nothing deploys silently.",
  },
] as const;

const trustedStack = [
  "Next.js 16",
  "React 19",
  "Tailwind 4",
  "Vercel",
  "Sanity",
  "Medusa",
  "HubSpot",
  "Meta + TikTok Ads",
] as const;

export default function WorkPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-24 text-white">
      <header className="blur-panel relative overflow-hidden p-10">
        <div className="absolute -right-12 top-8 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
          Work
        </p>
        <h1 className="mt-4 text-4xl font-black">
          Launches engineered for speed, story, and measurable lift.
        </h1>
        <p className="mt-4 text-white/80">
          We combine product-grade builds with channel-ready storytelling. Each project pairs design systems,
          growth dashboards, and playbooks your team can reuse.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a1a55] shadow-lg shadow-blue-900/40 transition hover:-translate-y-1"
          >
            Book a working session
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Back to homepage
          </Link>
        </div>
      </header>

      <section className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
            Case study snapshots
          </p>
          <h2 className="mt-2 text-3xl font-bold">Momentum that compounds</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudyDetails.map((caseStudy) => (
            <article
              key={caseStudy.name}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-lg shadow-black/30"
            >
              <p className="text-sm uppercase tracking-widest text-white/70">{caseStudy.name}</p>
              <p className="mt-2 text-xs font-semibold text-sky-200">{caseStudy.focus}</p>
              <p className="mt-3 text-lg font-bold">{caseStudy.outcome}</p>
              <p className="mt-3 text-sm text-white/85">{caseStudy.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
            Launch playbook
          </p>
          <h2 className="mt-2 text-3xl font-bold">Our process keeps scope flexible, not flimsy</h2>
        </div>
        <div className="space-y-4">
          {processMilestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-base font-bold text-[#0a1a55]">
                {index + 1}
              </span>
              <div>
                <p className="text-lg font-semibold">{milestone.title}</p>
                <p className="text-sm text-white/80">{milestone.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
          Stack
        </p>
        <h2 className="text-3xl font-bold">Tools we deploy daily</h2>
        <div className="flex flex-wrap gap-3">
          {trustedStack.map((tool) => (
            <span key={tool} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

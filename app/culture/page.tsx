import Link from "next/link";

export const metadata = {
  title: "Social Mind Studio | Culture",
  description: "The principles, rituals, and guardrails that shape how we collaborate with partners.",
};

const cultureValues = [
  {
    title: "Clarity over noise",
    detail:
      "We document every sprint inside a shared operating system so you always know what shipped, what slipped, and why.",
  },
  {
    title: "Design + data duet",
    detail: "Strategists and makers sit together. Every idea ships with a metric we agree to watch.",
  },
  {
    title: "Accessibility by default",
    detail: "Performance budgets, semantic markup, and localization are non-negotiable from day one.",
  },
] as const;

const studioRituals = [
  {
    title: "Monday build review",
    detail: "A 30-minute async video plus live AMA so stakeholders can react without derailing focus time.",
  },
  {
    title: "Creator lab",
    detail: "Weekly table read with our creator network to audition hooks, scripts, and visual stories.",
  },
  {
    title: "Signal sync",
    detail: "A shared Looker / GA4 snapshot delivered every Thursday highlighting trends, not just charts.",
  },
] as const;

const openings = [
  { role: "Senior Product Designer", note: "Remote • Contract" },
  { role: "Video Editor (Vertical)", note: "Remote • Freelance bench" },
  { role: "Growth Strategist", note: "Sarajevo • Hybrid" },
] as const;

export default function CulturePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-24 text-white">
      <header className="blur-panel p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
          Culture
        </p>
        <h1 className="mt-4 text-4xl font-black">We operate like an embedded team, not a vendor.</h1>
        <p className="mt-4 text-white/80">
          Every engagement gets the same rituals, transparency, and creative stretch. Here’s how we keep speed
          without sacrificing craft.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a1a55] shadow-lg shadow-blue-900/40 transition hover:-translate-y-1"
          >
            Start collaborating
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            See the work
          </Link>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {cultureValues.map((value) => (
          <article
            key={value.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-100">{value.title}</p>
            <p className="mt-3 text-sm text-white/80">{value.detail}</p>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Rituals</p>
          <h2 className="mt-2 text-3xl font-bold">Cadence keeps everyone aligned</h2>
        </div>
        <div className="space-y-4">
          {studioRituals.map((ritual, index) => (
            <div
              key={ritual.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{ritual.title}</h3>
              <p className="mt-2 text-sm text-white/80">{ritual.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Open bench</p>
        <h2 className="text-3xl font-bold">We’re always meeting collaborators</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {openings.map((opening) => (
            <div
              key={opening.role}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 text-sm text-white/80"
            >
              <p className="text-lg font-semibold text-white">{opening.role}</p>
              <p className="mt-1">{opening.note}</p>
              <Link
                href="mailto:socialmind.contact@gmail.com"
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-widest text-sky-100"
              >
                Pitch yourself →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

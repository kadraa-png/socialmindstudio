import { ScrollReveal } from "@/components/scroll-reveal";
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
    <div className="relative min-h-screen overflow-hidden bg-[#2e3fc4] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,214,107,0.4),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(255,111,156,0.35),transparent_48%),radial-gradient(circle_at_60%_82%,rgba(62,240,197,0.32),transparent_42%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-16 px-6 py-24">
        <ScrollReveal as="header" className="blur-panel p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
            Culture
          </p>
          <div className="mt-2 h-1 w-32 rounded-full bg-gradient-to-r from-[#ffd66b] via-[#3ef0c5] to-[#ff6f9c]" />
          <h1 className="mt-4 text-4xl font-black">We operate like an embedded team, not a vendor.</h1>
          <p className="mt-4 text-white/80">
            Every engagement gets the same rituals, transparency, and creative stretch. Here’s how we keep speed
            without sacrificing craft.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-[#2e3fc4] via-[#5c6dff] to-[#ff6f9c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2e3fc4]/40 transition hover:-translate-y-0.5"
            >
              Start collaborating
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-white hover:text-white"
            >
              See the work
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="grid gap-6 md:grid-cols-3" delay={60}>
          {cultureValues.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#121842]/80 via-[#2e3fc4]/45 to-[#3ef0c5]/20 p-6 shadow-[0_25px_45px_rgba(3,6,23,0.45)]"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-white/75">{value.title}</p>
              <p className="mt-3 text-sm text-white/85">{value.detail}</p>
            </article>
          ))}
        </ScrollReveal>

        <ScrollReveal as="section" className="flex flex-col gap-6" delay={120}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Rituals</p>
            <h2 className="mt-2 text-3xl font-bold">Cadence keeps everyone aligned</h2>
          </div>
          <div className="space-y-4">
            {studioRituals.map((ritual, index) => (
              <div
                key={ritual.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0f1438]/85 via-[#16205a]/65 to-[#2e3fc4]/35 p-6 shadow-inner shadow-black/20"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-white/65">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{ritual.title}</h3>
                <p className="mt-2 text-sm text-white/85">{ritual.detail}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" className="flex flex-col gap-4" delay={180}>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Open bench</p>
          <h2 className="text-3xl font-bold">We’re always meeting collaborators</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {openings.map((opening) => (
              <div
                key={opening.role}
                className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#0f1333]/90 via-[#2e3fc4]/40 to-[#ff6f9c]/15 p-6 text-sm text-white/85"
              >
                <p className="text-lg font-semibold text-white">{opening.role}</p>
                <p className="mt-1">{opening.note}</p>
                <Link
                  href="mailto:socialmind.contact@gmail.com"
                  className="mt-4 inline-flex text-xs font-semibold uppercase tracking-widest text-[#ffd66b]"
                >
                  Pitch yourself →
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

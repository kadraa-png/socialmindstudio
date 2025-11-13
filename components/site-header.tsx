"use client";

import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: { en: "Home", bs: "Početna" } },
  { href: "/about", label: { en: "About", bs: "O nama" } },
  { href: "/services", label: { en: "Services", bs: "Usluge" } },
  { href: "/#contact", label: { en: "Contact", bs: "Kontakt" } },
] as const;

type SiteHeaderProps = {
  lang: Lang;
  onToggleLang: () => void;
  className?: string;
};

export function SiteHeader({ lang, onToggleLang, className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <Link href="/" className="flex items-center gap-3 text-white">
        <Image
          src="/logo.jpg"
          alt="Social Mind Studio"
          width={44}
          height={44}
          className="rounded-xl border border-white/20"
          priority
        />
        <span className="text-base font-semibold uppercase tracking-[0.4em]">
          Social Mind
        </span>
      </Link>

      <nav className="flex flex-wrap items-center gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1 text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {link.label[lang]}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleLang}
          className="rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {lang === "en" ? "Bosanski" : "English"}
        </button>
        <Link
          href="/services"
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {lang === "en" ? "Start" : "Kreni"}
        </Link>
      </div>
    </header>
  );
}

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
        "mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-sm text-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(3,6,23,0.35)] sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <Link href="/" className="flex items-center gap-3 text-white">
        <Image
          src="/logo.png"
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
            className="rounded-full px-3 py-1 text-white/70 transition hover:text-[#ffd66b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd66b]/50"
          >
            {link.label[lang]}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleLang}
          className="rounded-full border border-white/25 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/85 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ef0c5]/60"
        >
          {lang === "en" ? "Bosanski" : "English"}
        </button>
        <Link
          href="/services"
          className="rounded-full bg-gradient-to-r from-[#2e3fc4] via-[#5c6dff] to-[#ff6f9c] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white shadow-lg shadow-[#2e3fc4]/40 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd66b]/70"
        >
          {lang === "en" ? "Start" : "Kreni"}
        </Link>
      </div>
    </header>
  );
}

import Image from "next/image";

import { cn } from "@/lib/utils";

type PortraitPlaceholderProps = {
  image: string;
  name: string;
  role: string;
  description?: string;
  className?: string;
};

export function PortraitPlaceholder({
  image,
  name,
  role,
  description,
  className,
}: PortraitPlaceholderProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1338]/85 via-[#1b2464]/65 to-[#2e3fc4]/25 p-6 text-white shadow-[0_25px_50px_rgba(2,6,23,0.45)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-8 top-12 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mb-6 h-60 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>
      <p className="text-xs uppercase tracking-[0.4em] text-white/60">{role}</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">{name}</h3>
      {description && <p className="mt-3 text-sm text-white/80">{description}</p>}
    </article>
  );
}

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
      <div className="relative mb-6 h-60 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f162f] via-[#1b275a] to-[#2e3fc4]/40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040614] via-[#090f2a]/80 to-transparent" />
        <div className="relative flex h-full flex-col justify-end rounded-2xl p-4 text-xs uppercase tracking-[0.35em] text-white/60">
          Upload {image}
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.4em] text-white/60">{role}</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">{name}</h3>
      {description && <p className="mt-3 text-sm text-white/80">{description}</p>}
    </article>
  );
}

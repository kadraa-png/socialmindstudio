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
        "rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_25px_50px_rgba(2,6,23,0.45)]",
        className,
      )}
    >
      <div className="relative mb-6 h-60 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        <div className="relative flex h-full flex-col justify-end rounded-2xl p-4 text-xs uppercase tracking-[0.35em] text-white/60">
          Upload {image}
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">{role}</p>
      <h3 className="mt-2 text-2xl font-semibold">{name}</h3>
      {description && <p className="mt-3 text-sm text-white/70">{description}</p>}
    </article>
  );
}

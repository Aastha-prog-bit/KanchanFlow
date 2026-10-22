import type { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
};

export default function Card({ title, icon: Icon, children }: CardProps) {
  return (
    <article className="border-t-4 border-graphite bg-white p-6 transition-colors hover:border-gold">
      {Icon && (
        <Icon size={28} className="text-gold-dark" aria-hidden="true" />
      )}
      <h3 className="mt-4 font-heading text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-graphite/75">{children}</p>
    </article>
  );
}
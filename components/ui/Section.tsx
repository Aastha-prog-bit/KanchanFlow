type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  children: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  children,
}: SectionProps) {
  const isDark = tone === "dark";
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={isDark ? "bg-graphite text-white" : "bg-steel text-graphite"}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          {eyebrow && (
            <p
                className={`text-sm font-semibold uppercase tracking-widest ${
                    isDark ? "text-gold" : "text-gold-text"
                }`}
            >
            {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="mt-2 font-heading text-4xl font-bold leading-tight md:text-5xl"
          >
            {title}
          </h2>
          {intro && (
            <p className={`mt-4 text-lg ${isDark ? "text-white/70" : "text-graphite/70"}`}>
              {intro}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
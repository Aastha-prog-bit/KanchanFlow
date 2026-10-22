type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-graphite text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-5xl font-bold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75">{intro}</p>
      </div>
    </section>
  );
}
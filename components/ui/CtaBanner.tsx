import Button from "@/components/ui/Button";

type CtaBannerProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export default function CtaBanner({
  title,
  text,
  buttonLabel,
  href,
}: CtaBannerProps) {
  return (
    <section className="bg-gold text-graphite">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-lg">{text}</p>
        </div>
        <Button href={href} variant="dark">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
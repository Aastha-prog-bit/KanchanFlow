import Button from "@/components/ui/Button";
import PipelineMockup from "@/components/home/PipelineMockup";

export default function Hero() {
  return (
    <section className="bg-graphite text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            CRM for manufacturers
          </p>
          <h1 className="mt-3 font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            From quote to dispatch,{" "}
            <span className="text-gold">without the chasing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            KanchanFlow keeps quotes, bills of materials and work orders in one
            pipeline, so your sales team and your shop floor always see the same
            job status.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/pricing">Start free trial</Button>
            <Button href="/features" variant="secondaryLight">
              See how it works
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">
            14-day free trial · No credit card needed
          </p>
        </div>

        <PipelineMockup />
      </div>
    </section>
  );
}
const stages = [
  {
    name: "Quoted",
    cards: [
      { company: "Rao Fabricators", job: "Steel brackets x 500", value: "₹2.4L" },
      { company: "Mehta Auto Parts", job: "Gear housing x 120", value: "₹5.8L" },
    ],
  },
  {
    name: "In production",
    cards: [
      { company: "Singh Engineering", job: "Hydraulic fittings x 800", value: "₹3.1L" },
      { company: "Nair Castings", job: "Pump bodies x 60", value: "₹7.2L" },
    ],
  },
  {
    name: "Ready to ship",
    cards: [
      { company: "Verma Tools", job: "Cutting dies x 40", value: "₹1.9L" },
    ],
  },
];

export default function PipelineMockup() {
  return (
    <div
      role="img"
      aria-label="KanchanFlow sales pipeline showing orders moving from quoted to in production to ready to ship"
      className="border border-white/10 bg-graphite-soft shadow-2xl"
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-2 border-b border-white/10 px-4 py-3"
      >
        <span className="size-2.5 rounded-full bg-white/30" />
        <span className="size-2.5 rounded-full bg-white/30" />
        <span className="size-2.5 rounded-full bg-white/30" />
        <span className="ml-3 text-xs text-white/60">Sales pipeline</span>
      </div>

      <div
        aria-hidden="true"
        className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3"
      >
        {stages.map((stage, index) => (
          <div key={stage.name} className={index === 2 ? "hidden sm:block" : ""}>
            <p className="flex justify-between text-xs font-semibold uppercase tracking-wider text-gold">
              {stage.name}
              <span className="text-white/50">{stage.cards.length}</span>
            </p>
            <ul className="mt-3 space-y-3">
              {stage.cards.map((card) => (
                <li
                  key={card.company}
                  className="border-l-4 border-gold bg-graphite p-3"
                >
                  <p className="text-sm font-semibold text-white">
                    {card.company}
                  </p>
                  <p className="mt-1 text-xs text-white/60">{card.job}</p>
                  <p className="mt-2 text-sm font-semibold text-gold">
                    {card.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
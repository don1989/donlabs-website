const services = [
  {
    tag: "Strategy",
    title: "AI roadmap & opportunity mapping",
    body:
      "We sit with your leadership and product teams, map the high-leverage opportunities, and rank them by feasibility, cost, and impact. You leave with a sequenced plan — not a 60-page deck.",
  },
  {
    tag: "Build",
    title: "Production AI features",
    body:
      "From RAG over messy internal docs to multi-step agents that actually do the job. We write the code, build the evals, wire up the observability, and hand it to you owning every line.",
  },
  {
    tag: "Build",
    title: "Internal copilots & workflow automation",
    body:
      "Replace the spreadsheet, the Slack thread, and the 11-tab process. We design and ship copilots that fit how your team already works — and surface metrics so you can see the time-back.",
  },
  {
    tag: "Enablement",
    title: "Team training & embedded engineering",
    body:
      "Workshops, pairing, and structured rituals so your engineers go from cautious to confident. We embed with one team at a time and leave them shipping AI without us.",
  },
  {
    tag: "Operate",
    title: "AI ops, evals, and safety",
    body:
      "Quality regressions, cost blow-ups, and silent prompt-injection failures are the three reasons AI features get rolled back. We put the guardrails in before they bite.",
  },
  {
    tag: "Advisory",
    title: "Fractional AI leadership",
    body:
      "If you&apos;re between hires, we plug in as a fractional VP of AI: hiring loops, vendor selection, board updates, and the unglamorous decisions that compound.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">What we do</span>
            <h2 className="section-heading">
              Six ways we plug in.
              <br />
              One bar: ship it.
            </h2>
          </div>
          <p className="mt-6 max-w-md text-white/60 md:mt-0">
            Most engagements blend two or three of the below. We&apos;ll tell
            you which mix fits — and which ones you don&apos;t need.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card flex h-full flex-col">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {s.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-white/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    tag: "Automation",
    title: "Replace your spreadsheet rituals",
    body:
      "The repeat work — quoting, reporting, chasing, reconciling — pulled out of spreadsheets and Slack threads and turned into an AI workflow that just runs. You watch it work; you don't operate it.",
  },
  {
    tag: "Knowledge",
    title: "Your own AI assistant, trained on your business",
    body:
      "Drop your docs, SOPs, contracts, and past projects into a private Claude-powered assistant that answers in your voice and your context. Onboard staff faster. Stop being the only person who knows the thing.",
  },
  {
    tag: "Customer-facing",
    title: "AI in your inbox, your forms, your funnel",
    body:
      "Inbound leads triaged, quoted, and routed. Customer questions answered in seconds. We build the front-line AI so your team handles the work only humans should.",
  },
  {
    tag: "Research & Analysis",
    title: "Done-For-You research and reporting",
    body:
      "Property comps, market scans, competitive intel, due-diligence packs — turned from a half-day job into a one-click report. Built around your data, with the sources cited so you can trust the output.",
  },
  {
    tag: "Onboarding",
    title: "We get your team comfortable with AI",
    body:
      "Plain-English walkthroughs, recorded for whoever you hire next. No technical jargon. By the end, your team uses Claude like a co-worker — not a scary black box.",
  },
  {
    tag: "Security",
    title: "Security-first by default",
    body:
      "We design every system so your data stays yours, secrets stay secret, and nothing leaves your control without your sign-off. Fear of AI is usually a fear of losing control — we remove both.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">What we build</span>
            <h2 className="section-heading">
              The work you keep meaning to fix.
              <br />
              We fix it with AI.
            </h2>
          </div>
          <p className="mt-6 max-w-md text-white/60 md:mt-0">
            Every engagement starts with one question: where is your team
            spending hours on something a system should be doing? We build
            around that — and only that.
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

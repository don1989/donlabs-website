const services = [
  {
    tag: "Automation",
    title: "Replace your spreadsheet rituals",
    body:
      "The repeat work that lives in spreadsheets and Slack threads. Quoting, reporting, chasing, reconciling. We turn it into a workflow that runs itself, so your team watches the output instead of doing the process.",
  },
  {
    tag: "Knowledge",
    title: "Your own AI assistant, trained on your business",
    body:
      "Drop your docs, SOPs, contracts and past projects into a private assistant powered by Claude. It answers in your tone and your context. Onboard new staff in a fraction of the time. Stop being the only person who knows how things work.",
  },
  {
    tag: "Customer-facing",
    title: "AI in your inbox, your forms, your funnel",
    body:
      "Inbound leads triaged, quoted and routed. Customer questions answered in seconds. We build the front line so your team can focus on the work only humans should be doing.",
  },
  {
    tag: "Research & analysis",
    title: "Research and reporting on tap",
    body:
      "Property comps, market scans, competitive intel, due diligence packs. Half a day of digging becomes a one-click report. Built around your data, with every source cited so you can trust what comes out.",
  },
  {
    tag: "Onboarding",
    title: "We get your team comfortable with AI",
    body:
      "Walkthroughs in plain English, recorded so they're there for whoever you hire next. No jargon, no AI buzzwords. By the end your team treats Claude like a co-worker, not a black box.",
  },
  {
    tag: "Security",
    title: "Security is the default, not an add-on",
    body:
      "Every system we build keeps your data yours. Secrets stay secret. Nothing leaves your control without you signing it off. Most fear of AI is really fear of losing control, so we take that off the table.",
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
            Every engagement starts with one question. Where is your team
            burning hours on something a system should be doing? We build
            around that, and nothing else.
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

const steps = [
  {
    n: "01",
    title: "Discover",
    body:
      "A working session — not a sales call. We pressure-test the problem, the data, and what 'good' looks like. You leave with a one-page plan whether or not we work together.",
    bullets: ["Stakeholder interviews", "Data + tooling audit", "Risk register"],
  },
  {
    n: "02",
    title: "Build",
    body:
      "We embed with your team and ship in weekly increments. Evals and observability go in on day one, so we measure progress in outcomes — not vibes.",
    bullets: ["Prototype → MVP → production", "Eval suite + dashboards", "Code you own"],
  },
  {
    n: "03",
    title: "Compound",
    body:
      "Once it's live, we keep an eye on cost, latency, and quality. We hand over playbooks and train your team so the next AI feature is yours to ship.",
    bullets: ["Monitoring + on-call", "Roadmap reviews", "Team enablement"],
  },
];

export default function HowWeWork() {
  return (
    <section id="approach" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">How we work</span>
            <h2 className="section-heading">
              Three phases.
              <br />
              No surprises.
            </h2>
          </div>
          <p className="mt-6 max-w-md text-white/60 md:mt-0">
            Most AI projects stall between prototype and production. Our
            engagement model is built around getting through that gap quickly,
            then making sure you don&apos;t need us forever.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card group relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <span className="h-2 w-2 rounded-full bg-accent/70 transition group-hover:bg-accent" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-white/65 md:text-base">{s.body}</p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

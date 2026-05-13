const featured = {
  client: "Northwind Logistics",
  sector: "Operations · Series C",
  title:
    "Cut quote turnaround from 2 days to 90 seconds with an agent on top of their pricing system.",
  body:
    "Their pricing team was the bottleneck on every enterprise deal. We built a tool-using agent on top of their existing rate engine, wired up evals against three years of historical quotes, and shipped to live traffic in eight weeks.",
  results: [
    { k: "92%", v: "of quotes now auto-priced" },
    { k: "1,300x", v: "faster median turnaround" },
    { k: "£2.1M", v: "annualised margin recovered" },
  ],
  quote:
    "DonLabs gave us a working system in the time other agencies wanted to spend on a pitch deck. They left us with code we actually understand.",
  attrib: "VP Engineering, Northwind",
};

const more = [
  {
    client: "Helix Health",
    sector: "Healthtech",
    title:
      "Clinical-grade summarisation across 11 EHR formats, deployed to 4,000 clinicians.",
    metric: "−63% admin time per shift",
  },
  {
    client: "Lumen Capital",
    sector: "Financial services",
    title:
      "Diligence copilot that reads data rooms and surfaces the three things the analyst missed.",
    metric: "5 hrs → 18 mins per memo",
  },
  {
    client: "Foundry OS",
    sector: "Developer tools",
    title:
      "Reduced support load with an in-product copilot grounded in their docs and changelogs.",
    metric: "−41% tier-1 tickets",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Selected work</span>
            <h2 className="section-heading">
              Real systems.
              <br />
              Real users. Receipts.
            </h2>
          </div>
          <a href="#contact" className="btn-ghost mt-6 md:mt-0">
            Discuss your case
          </a>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft">
          <div className="grid md:grid-cols-5">
            <div className="relative md:col-span-3 p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Featured · {featured.sector}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-6 max-w-xl text-white/65 md:text-lg">
                {featured.body}
              </p>

              <figure className="mt-10 border-l-2 border-accent pl-5">
                <blockquote className="text-base text-white/80 md:text-lg">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-white/50">
                  {featured.attrib}
                </figcaption>
              </figure>
            </div>

            <div className="border-t border-white/10 md:col-span-2 md:border-l md:border-t-0">
              <div className="grid h-full grid-cols-1 divide-y divide-white/10">
                {featured.results.map((r) => (
                  <div
                    key={r.v}
                    className="flex h-full flex-col justify-center p-8 md:p-10"
                  >
                    <div className="font-display text-4xl font-medium tracking-tightest text-accent md:text-5xl">
                      {r.k}
                    </div>
                    <div className="mt-2 text-sm text-white/65 md:text-base">
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {more.map((c) => (
            <div key={c.client} className="card flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                  {c.client}
                </span>
                <span className="text-xs text-white/40">{c.sector}</span>
              </div>
              <p className="mt-6 flex-1 text-base text-white/80">{c.title}</p>
              <div className="mt-6 border-t border-white/10 pt-4 text-sm text-accent">
                {c.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

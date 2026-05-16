const items = [
  {
    big: "65%",
    label: "of organisations now regularly use generative AI, nearly double the figure 10 months earlier",
    src: "McKinsey, State of AI 2024",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024",
  },
  {
    big: "95%",
    label: "of enterprise generative-AI pilots deliver no measurable impact on P&L",
    src: "MIT Project NANDA, State of AI in Business 2025",
    href: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/",
  },
  {
    big: "$15.7T",
    label: "projected AI contribution to global GDP by 2030",
    src: "PwC, Sizing the Prize",
    href: "https://www.pwc.com/gx/en/issues/data-and-analytics/publications/artificial-intelligence-study.html",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4">Why now</span>
          <h2 className="section-heading">
            The businesses that figure AI out
            <br />
            will leave the rest behind.
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            Most businesses know they should be using AI. Few know where to
            start, and fewer still get past a half-finished prototype. The
            tech isn&apos;t the bottleneck any more. The bottleneck is finding
            someone who can build it properly, hand it over working, and teach
            your team to run it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="card">
              <div className="font-display text-6xl font-medium tracking-tightest text-accent md:text-7xl">
                {it.big}
              </div>
              <p className="mt-6 text-base text-white/80">{it.label}</p>
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-white/40 underline-offset-4 transition hover:text-accent hover:underline"
              >
                {it.src}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

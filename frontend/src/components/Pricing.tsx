const tiers = [
  {
    name: "Sprint",
    price: "From £18k",
    cadence: "fixed-scope, 2–4 weeks",
    blurb:
      "A focused engagement to ship one well-defined AI feature, or to de-risk a roadmap before you commit further.",
    features: [
      "One staff engineer, full-time",
      "Discovery → working prototype",
      "Eval suite + runbook",
      "Async daily updates",
      "Code lives in your repo",
    ],
    cta: "Scope a sprint",
    highlighted: false,
  },
  {
    name: "Embedded",
    price: "From £14k / month",
    cadence: "rolling, 30-day notice",
    blurb:
      "Our most popular engagement. We embed with one of your teams, ship continuously, and train your engineers to take over.",
    features: [
      "1–2 staff engineers, dedicated",
      "Weekly demos to stakeholders",
      "Full ops: evals, monitoring, on-call",
      "Roadmap reviews + hiring support",
      "Knowledge transfer baked in",
    ],
    cta: "Start the conversation",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow mb-4">Engagements</span>
          <h2 className="section-heading">
            Two ways in.
            <br />
            Pick the one that fits.
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            No retainers for slide decks. Every engagement is sized to a clear
            outcome and reviewed at the end of each phase.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-8 md:p-10 ${
                t.highlighted
                  ? "border-accent bg-gradient-to-b from-accent/[0.08] to-transparent"
                  : "border-white/10 bg-ink-soft"
              }`}
            >
              {t.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-ink">
                  Most popular
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {t.name}
                </h3>
              </div>
              <div className="mt-6">
                <div className="font-display text-4xl font-medium tracking-tightest md:text-5xl">
                  {t.price}
                </div>
                <div className="mt-2 text-sm text-white/50">{t.cadence}</div>
              </div>
              <p className="mt-6 text-base text-white/70">{t.blurb}</p>

              <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 ${
                  t.highlighted ? "btn-primary" : "btn-ghost"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/45">
          Need something different? Fractional advisory, board-prep workshops,
          and one-off audits all available — drop us a note.
        </p>
      </div>
    </section>
  );
}

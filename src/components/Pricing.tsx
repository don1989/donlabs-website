const tiers = [
  {
    name: "AI Kickstart",
    price: "From £4,500",
    cadence: "fixed scope · 2–3 weeks",
    blurb:
      "One specific workflow — built, deployed, and handed over with Claude wired in. The fastest way to go from 'we should be doing this' to 'this is running'.",
    features: [
      "Strategy call to pick the right first win",
      "Done-For-You build of one workflow or assistant",
      "Claude connected so you can extend it yourself",
      "Plain-English walkthrough + recorded training",
      "30 days of support after handover",
    ],
    cta: "Book a strategy call",
    highlighted: false,
  },
  {
    name: "AI Install",
    price: "From £12,000",
    cadence: "fixed scope · 4–8 weeks",
    blurb:
      "The full Done-For-You install. We pick two or three of the highest-leverage workflows, build the whole stack, secure it, and leave your team running everything without us.",
    features: [
      "Discovery + opportunity map for your business",
      "Multiple workflows / assistants built end-to-end",
      "Security review + safe data handling baked in",
      "Claude wired into your day-to-day tools",
      "Team training so you actually use it",
      "60 days of support, then you own it",
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
            Both fixed-price. Both yours to keep.
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            No monthly retainer trap. No mystery invoices. You pay for a
            defined outcome — we build it, hand it over, and your team runs it.
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
          Not sure which fits? Book a free strategy call — we&apos;ll tell you
          honestly, even if the answer is &quot;you don&apos;t need us yet&quot;.
        </p>
      </div>
    </section>
  );
}

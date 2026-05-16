const tiers = [
  {
    name: "AI Kickstart",
    price: "Fixed price",
    cadence: "Scoped on the strategy call · 2–3 weeks",
    blurb:
      "One workflow, built, deployed and handed over with Claude wired in. The quickest way to go from 'we should be doing this' to 'this is live and saving us hours'.",
    features: [
      "Strategy call to find the right first win",
      "Full build of one workflow or assistant",
      "Claude connected so you can extend it later",
      "Walkthrough in plain English, recorded for your team",
      "30 days of support after launch",
    ],
    cta: "Book a strategy call",
    highlighted: false,
  },
  {
    name: "AI Install",
    price: "Fixed price",
    cadence: "Scoped on the strategy call · 4–8 weeks",
    blurb:
      "The full install. We find the two or three workflows with the biggest payoff, build the whole stack, secure it properly, and leave your team running it without us in the room.",
    features: [
      "Discovery and opportunity map across your business",
      "Multiple workflows and assistants, built end to end",
      "Security review and safe data handling, built in",
      "Claude wired into the tools you already use",
      "Team training so it actually gets used",
      "60 days of support, then it's all yours",
    ],
    cta: "Start the conversation",
    highlighted: true,
  },
  {
    name: "AI Partner",
    price: "Monthly",
    cadence: "Pause any month · no long contract",
    blurb:
      "For teams that want us in their corner after the first build. New workflows, fixes, model upgrades and a direct line when something needs to change.",
    features: [
      "Pool of hours each month for builds, tweaks and upgrades",
      "Quarterly review to spot the next wins",
      "Priority response when something needs fixing",
      "First in line when new Claude models ship",
      "Pause or stop any month, no long contract",
    ],
    cta: "Talk about ongoing support",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow mb-4">Engagements</span>
          <h2 className="section-heading">
            Three ways in.
            <br />
            Pick the one that fits.
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            Every build is scoped up front, every system is yours to keep,
            and nothing is locked behind a retainer you can&apos;t leave.
            Start with a single workflow, a full install, or stay on the
            books for the long run.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="font-display text-3xl font-medium tracking-tightest md:text-4xl">
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
          Not sure which one fits? Book a free strategy call. We&apos;ll tell
          you honestly, even if the answer is &quot;you don&apos;t need us
          yet&quot;.
        </p>
      </div>
    </section>
  );
}

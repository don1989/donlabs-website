const steps = [
  {
    n: "01",
    title: "Map the wins",
    body:
      "We get on a call, learn how your business actually runs, and pinpoint the two or three places AI will pay for itself fastest. You leave with a clear plan — even if we never work together.",
    bullets: ["No jargon, no decks", "Honest about what AI can't do", "Security + data review up front"],
  },
  {
    n: "02",
    title: "We build it for you",
    body:
      "Done-For-You — not DIY, not Done-With-You. We design, build, and deploy the tools, automations and AI workflows your team needs. You don't need to learn LangChain. You don't need to hire a developer.",
    bullets: ["Fixed scope, fixed timeline", "Connected to your real systems", "Security baked in from day one"],
  },
  {
    n: "03",
    title: "Hand it over with Claude",
    body:
      "This is the part everyone else skips. We wire Claude into your setup, teach you and your team exactly how everything works, and leave you able to extend it yourself. No retainer trap. No developer who fucks off.",
    bullets: ["Claude wired into your workflow", "Plain-English walkthroughs", "You own the code, the prompts, everything"],
  },
];

export default function HowWeWork() {
  return (
    <section id="approach" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">How it works</span>
            <h2 className="section-heading">
              We build it. We teach you.
              <br />
              You run it.
            </h2>
          </div>
          <p className="mt-6 max-w-md text-white/60 md:mt-0">
            Most businesses get burned twice with AI: once by a developer who
            charges a fortune and disappears, and once by a tool they can&apos;t
            actually run. We do it the other way round.
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

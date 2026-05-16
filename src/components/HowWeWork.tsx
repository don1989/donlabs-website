const steps = [
  {
    n: "01",
    title: "Find the wins",
    body:
      "We get on a call and learn how your business actually runs. Then we pin down the two or three places AI will pay for itself fastest. You leave with a plan, even if we never end up working together.",
    bullets: ["No jargon, no decks", "Honest about what AI can't do", "Security and data covered up front"],
  },
  {
    n: "02",
    title: "We build it for you",
    body:
      "You don't have to learn prompt engineering. You don't have to hire a developer. We design, build and deploy the tools, automations and assistants your team needs, then bring you in once they work.",
    bullets: ["Fixed scope and timeline", "Plugged into your real systems", "Security built in from day one"],
  },
  {
    n: "03",
    title: "Hand it over with Claude",
    body:
      "This is the bit everyone else skips. We wire Claude into your setup, walk your team through how it all works, and leave you able to tweak and extend it yourself. No lock-in. No vanishing developer.",
    bullets: ["Claude built into your workflow", "Walkthroughs in plain English", "You own the code and the prompts"],
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
            Most businesses get burned twice with AI. Once by a developer who
            charges a fortune and disappears. Once by a tool nobody can
            actually operate. We do it the other way round.
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

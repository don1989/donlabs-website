export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />

      <div className="container-page relative">
        <div className="flex flex-col items-start">
          <span className="eyebrow mb-6">Done-For-You AI · Security-first · Claude-native</span>

          <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tightest md:text-7xl lg:text-[88px]">
            You know you should
            <br />
            be using AI.
            <br />
            <span className="text-accent">We make it happen.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-white/70 md:text-xl">
            Most businesses know AI is the unlock — they just don&apos;t know
            where to start, or they&apos;re nervous to. Don Labs is the partner
            that builds the tools and systems for you, wires Claude in so your
            team can actually run them, and stays around long enough to make
            sure it sticks.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Book a free strategy call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#approach" className="btn-ghost">
              See how it works
            </a>
          </div>

          <div className="mt-16 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              ["Done", "For You — not DIY, not Done-With-You"],
              ["Claude", "wired in, so you run it yourself"],
              ["Security", "first — your data, your control"],
              ["No ghost", "we don't fuck off after delivery"],
            ].map(([stat, label]) => (
              <div key={label} className="bg-ink p-6 md:p-7">
                <div className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {stat}
                </div>
                <div className="mt-1 text-xs text-white/55 md:text-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

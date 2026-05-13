const items = [
  {
    big: "78%",
    label: "of enterprise AI pilots never reach production",
    src: "MIT Sloan Management Review, 2024",
  },
  {
    big: "3.5×",
    label: "ROI seen by AI-mature orgs vs. AI-laggards",
    src: "McKinsey State of AI, 2024",
  },
  {
    big: "$15.7T",
    label: "projected global GDP impact from AI by 2030",
    src: "PwC Global AI Study",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4">The gap, in numbers</span>
          <h2 className="section-heading">
            The companies that figure this out
            <br />
            will outrun the ones that don&apos;t.
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            AI is the largest reorganisation of leverage in a generation. The
            difference between the teams pulling away and the teams getting
            stuck is rarely about model choice — it&apos;s about execution.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="card">
              <div className="font-display text-6xl font-medium tracking-tightest text-accent md:text-7xl">
                {it.big}
              </div>
              <p className="mt-6 text-base text-white/80">{it.label}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-white/40">
                {it.src}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

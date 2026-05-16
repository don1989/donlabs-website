const stack = [
  "Claude",
  "Anthropic API",
  "OpenAI",
  "Next.js",
  "Postgres",
  "Vercel",
  "n8n",
  "Zapier",
  "Notion",
  "Slack",
  "Google Workspace",
  "Your existing tools",
];

export default function Partners() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow mb-4">The stack</span>
          <h2 className="section-heading">
            Claude-native.
            <br />
            Tool-agnostic.
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            Claude is our default. It&apos;s the model your team will actually
            keep using, and the one we wire into your business so you can
            extend things yourself. Everything else, we pick to fit your stack
            rather than ours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {stack.map((p) => (
            <div
              key={p}
              className="flex h-24 items-center justify-center bg-ink-soft text-base font-medium text-white/55 transition hover:bg-ink-muted hover:text-white md:h-28"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

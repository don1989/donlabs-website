const partners = [
  "OpenAI",
  "Anthropic",
  "Google Cloud",
  "AWS",
  "Modal",
  "LangSmith",
  "Pinecone",
  "Vercel",
  "Postgres",
  "Snowflake",
  "Datadog",
  "Linear",
];

export default function Partners() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow mb-4">The stack</span>
          <h2 className="section-heading">
            Vendor-neutral.
            <br />
            Opinion-rich.
          </h2>
          <p className="mt-6 text-white/65 md:text-lg">
            We pick tools based on the job, not the partnership tier. Here&apos;s
            what we reach for most often — and we&apos;ll happily argue for
            something else when the case is there.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((p) => (
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

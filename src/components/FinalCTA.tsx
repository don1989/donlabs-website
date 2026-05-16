export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-soft via-ink-soft to-accent/10 p-10 md:p-16">
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-5 md:items-end">
            <div className="md:col-span-3">
              <span className="eyebrow mb-4">Let&apos;s talk</span>
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest md:text-6xl">
                Stop putting AI off.
                <br />
                Book the call.
              </h2>
              <p className="mt-6 max-w-xl text-white/70 md:text-lg">
                30 minutes, free, no pitch. We&apos;ll look at how your
                business actually runs, pin down where AI will pay back
                fastest, and you&apos;ll leave with a plan whether or not we
                end up working together.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@donlabs.ai" className="btn-primary">
                  hello@donlabs.ai
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="https://calendly.com/dondemetrius/30min"
                  className="btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a free strategy call
                </a>
                <p className="mt-2 text-sm text-white/40">
                  Replies within 1 business day, usually the same day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

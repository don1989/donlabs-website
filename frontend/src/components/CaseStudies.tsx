import Image from "next/image";

const industries = [
  "Games",
  "Fintech",
  "E-commerce",
  "Blockchain",
  "Self-development",
];

const outcomes = [
  {
    k: "Hours back",
    v: "per week, on the work your team kept meaning to automate",
  },
  {
    k: "Plain English",
    v: "walkthroughs, so your team can run and extend it without us",
  },
  {
    k: "You own it",
    v: "every line of code, every prompt, every connection — yours",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">A human behind the AI</span>
            <h2 className="section-heading">
              Don&apos;t hire an agency.
              <br />
              Work with the engineer.
            </h2>
          </div>
          <a href="#contact" className="btn-ghost mt-6 md:mt-0">
            Book a call with Don
          </a>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft">
          <div className="grid md:grid-cols-5">
            <div className="relative md:col-span-2 bg-gradient-to-br from-accent/15 via-ink-soft to-ink-soft">
              <div className="relative h-80 w-full md:h-full md:min-h-[460px]">
                <Image
                  src="/headshot.jpg"
                  alt="Don — Lead Software Engineer and founder of Don Labs. Real photo, not AI-generated."
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur">
                  Real photo · Not AI-generated
                </span>
              </div>
            </div>

            <div className="md:col-span-3 p-8 md:p-12">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                Don · Founder, Lead Engineer
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight md:text-4xl">
                15 years of shipping real software.
                <br />
                Now pointed at AI for your business.
              </h3>
              <p className="mt-6 text-white/70 md:text-lg">
                I&apos;ve led engineering across games, fintech, e-commerce,
                blockchain, and self-development products — building apps,
                platforms, and the unglamorous systems behind them. Don Labs is
                me taking that experience and using it to install AI into your
                business, properly, so it actually changes how you work.
              </p>
              <p className="mt-4 text-sm text-white/45">
                Yes, that&apos;s a real photo. No, it&apos;s not AI-generated —
                and neither is anything else on this site.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {industries.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                  >
                    {i}
                  </span>
                ))}
              </div>

              <figure className="mt-10 border-l-2 border-accent pl-5">
                <blockquote className="text-base text-white/80 md:text-lg">
                  &ldquo;Most businesses don&apos;t need a 60-page AI strategy.
                  They need someone to come in, find the highest-leverage two
                  or three workflows, build them, and leave you running it. So
                  that&apos;s what I do.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm text-white/50">
                  Don, founder of Don Labs
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.k} className="card flex h-full flex-col">
              <div className="font-display text-2xl font-medium tracking-tight text-accent md:text-3xl">
                {o.k}
              </div>
              <p className="mt-4 text-base text-white/75">{o.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline relative">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-ink font-display font-bold">
                D
              </span>
              <span className="font-display text-base font-medium tracking-tight">
                Don Labs
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Done-For-You AI for businesses that know they should be using it
              but don&apos;t know where to start. We build it, teach you, wire
              Claude in, and leave you running it.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40">
              Sitemap
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#approach" className="text-white/75 hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/75 hover:text-white">
                  What we build
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/75 hover:text-white">
                  About Don
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/75 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/75 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@donlabs.ai"
                  className="text-white/75 hover:text-white"
                >
                  hello@donlabs.ai
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/dondemetrius/30min"
                  className="text-white/75 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a strategy call
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dondemetrius"
                  className="text-white/75 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="text-white/75">donlabs.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <div>© {year} Don Labs. All rights reserved. · donlabs.ai</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white/70">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

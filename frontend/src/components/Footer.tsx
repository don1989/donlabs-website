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
                DonLabs
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              A staff engineer-led AI consultancy. We help ambitious teams turn
              AI from a roadmap bullet into shipped product.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40">
              Sitemap
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#approach" className="text-white/75 hover:text-white">
                  Approach
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/75 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/75 hover:text-white">
                  Work
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
                  href="https://cal.com/donlabs/intro"
                  className="text-white/75 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a call
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/donlabs"
                  className="text-white/75 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <div>© {year} DonLabs Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="hover:text-white/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms — Don Labs",
  description:
    "Terms of use for donlabs.ai. Engagement-specific terms are handled in separately signed agreements.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen pb-24 pt-24 md:pt-32">
      <div className="container-page max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Back to donlabs.ai
        </Link>

        <span className="eyebrow mb-4 mt-12">Terms</span>
        <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
          Terms of use.
        </h1>
        <p className="mt-6 text-sm text-white/40">
          Last updated 15 May 2026
        </p>

        <div className="prose-legal mt-12 space-y-10">
          <section>
            <h2>The short version</h2>
            <p>
              donlabs.ai is a marketing site for Don Labs. The content is for
              information only and doesn&apos;t itself form a contract. If we
              work together, the engagement is governed by a separate written
              agreement.
            </p>
          </section>

          <section>
            <h2>About Don Labs</h2>
            <p>
              Don Labs is operated by Don Demetrius, based in the United
              Kingdom. Contact:{" "}
              <a href="mailto:hello@donlabs.ai">hello@donlabs.ai</a>.
            </p>
          </section>

          <section>
            <h2>Use of this website</h2>
            <p>
              You&apos;re welcome to read, share, and link to anything on this
              site. You may not republish substantial portions of the content
              as your own, scrape or systematically copy the site, or use it
              for anything unlawful.
            </p>
          </section>

          <section>
            <h2>No professional advice</h2>
            <p>
              Anything written here is general information, not advice. AI
              choices, security choices, and business decisions should always
              be made in the context of your specific situation — ideally with
              someone who&apos;s looked at it. We&apos;re happy to be that
              someone for an engagement, but reading the website alone
              doesn&apos;t make us your advisor.
            </p>
          </section>

          <section>
            <h2>Engagements</h2>
            <p>
              When we agree to work together, the terms of that work — scope,
              fees, timelines, IP ownership, confidentiality, liability — are
              set out in a written engagement agreement signed by both sides.
              That agreement, not this page, governs the relationship.
            </p>
            <p>
              Indicative pricing and packages mentioned on this site are
              starting points and may change. The price for any specific
              engagement is the one in your signed agreement.
            </p>
          </section>

          <section>
            <h2>Third-party links</h2>
            <p>
              This site links to third-party services such as LinkedIn,
              Calendly, and external research articles. We don&apos;t control
              those sites and we&apos;re not responsible for their content or
              their practices.
            </p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              All content on donlabs.ai — text, images (including the
              photograph of Don), layout, code, and brand marks — belongs to
              Don Labs unless credited otherwise. The third-party research we
              cite belongs to the organisations that published it; we link to
              the originals.
            </p>
          </section>

          <section>
            <h2>No warranty</h2>
            <p>
              We do our best to keep this site accurate and online, but
              we&apos;re providing it on an &ldquo;as-is&rdquo; basis. We
              don&apos;t guarantee uninterrupted availability or that
              everything is free of errors. Nothing in these terms limits any
              liability that cannot lawfully be limited under UK law.
            </p>
          </section>

          <section>
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. The
              courts of England and Wales have non-exclusive jurisdiction over
              any dispute arising from them.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              We may update these terms from time to time. The version that
              applies is the one published here at the time you read the site,
              dated at the top of this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

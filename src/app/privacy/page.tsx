import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Don Labs",
  description:
    "How Don Labs handles your data, what we collect, and your rights under UK GDPR.",
};

export default function PrivacyPage() {
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

        <span className="eyebrow mb-4 mt-12">Privacy</span>
        <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
          What we do
          <br />
          with your data.
        </h1>
        <p className="mt-6 text-sm text-white/40">
          Last updated 15 May 2026
        </p>

        <div className="prose-legal mt-12 space-y-10">
          <section>
            <h2>The short version</h2>
            <p>
              Don Labs runs a marketing site at donlabs.ai. We don&apos;t set
              tracking cookies, run third-party analytics, or sell anything to
              advertisers. If you email us, we keep that email so we can reply
              and remember the conversation. That&apos;s it.
            </p>
          </section>

          <section>
            <h2>Who we are</h2>
            <p>
              Don Labs is operated by Don Demetrius, based in the United
              Kingdom. For any privacy question, email{" "}
              <a href="mailto:hello@donlabs.ai">hello@donlabs.ai</a>.
            </p>
          </section>

          <section>
            <h2>What we collect on the website</h2>
            <p>
              Visiting donlabs.ai itself does not require you to provide any
              personal data. We do not run third-party analytics tools (no
              Google Analytics, no Meta pixel) and we do not set marketing
              cookies.
            </p>
            <p>
              The site is served through Cloudflare. Cloudflare processes
              limited request data (such as your IP address, browser version,
              and the page you requested) for security, abuse prevention, and
              basic performance. This processing is described in{" "}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noreferrer"
              >
                Cloudflare&apos;s privacy policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2>What we collect when you contact us</h2>
            <p>
              If you email <a href="mailto:hello@donlabs.ai">hello@donlabs.ai</a>{" "}
              or book a call, we receive the information you choose to send —
              typically your name, email address, company, and the contents of
              your message. We use that information to reply to you, schedule
              calls, and keep continuity across an engagement.
            </p>
            <p>
              The email itself is forwarded to our inbox via Cloudflare Email
              Routing, then stored by our mail provider. Call bookings are
              handled by a third-party scheduling tool (e.g. Cal.com), which
              has its own privacy policy.
            </p>
          </section>

          <section>
            <h2>How long we keep things</h2>
            <p>
              We keep correspondence for as long as it&apos;s useful for an
              ongoing or potential engagement, plus a reasonable period after
              for record-keeping and tax purposes. You can ask us to delete it
              at any time.
            </p>
          </section>

          <section>
            <h2>Your rights under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li>ask what data we hold about you;</li>
              <li>ask us to correct it if it&apos;s wrong;</li>
              <li>ask us to delete it;</li>
              <li>
                complain to the UK Information Commissioner&apos;s Office (ICO)
                if you think we&apos;ve mishandled your data.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href="mailto:hello@donlabs.ai">hello@donlabs.ai</a>. We&apos;ll
              respond within 30 days.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              If we change how we handle data, we&apos;ll update this page and
              change the &ldquo;last updated&rdquo; date at the top. There are
              no other notification mechanisms because we don&apos;t hold a
              mailing list.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

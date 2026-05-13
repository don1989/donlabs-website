"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who actually does the work?",
    a: "Staff-level engineers with 10+ years of shipping production software, and an extra few of doing it specifically with LLMs. No subcontractors, no offshore handoffs, no junior bait-and-switch.",
  },
  {
    q: "How quickly can we start?",
    a: "Usually two to three weeks from first call. We run a short discovery first so we both know what success looks like before any code is written.",
  },
  {
    q: "Do you sign NDAs / DPAs / work in regulated environments?",
    a: "Yes to all three. We've shipped inside healthcare, financial services, and government settings. We're happy to work inside your VPC and follow your security posture.",
  },
  {
    q: "What if we don't know what we want yet?",
    a: "Start with a Sprint. We'll do the discovery, build a working prototype against your real data, and you'll know whether the deeper engagement is worth it.",
  },
  {
    q: "Do you do pure strategy work?",
    a: "Yes — workshops, opportunity mapping, vendor selection, hiring loops, board prep. But we only take on strategy when we'd be confident executing it ourselves.",
  },
  {
    q: "What stack do you use?",
    a: "Whatever earns its place. We tend to default to TypeScript or Python services, Postgres + pgvector for retrieval, OpenAI/Anthropic for frontier work, and small fine-tuned models where they pay back. We argue for the simplest stack that solves the problem.",
  },
  {
    q: "What happens at the end of an engagement?",
    a: "You keep the code, the evals, the dashboards, the playbooks — and ideally an engineer or two who can run with it. Most clients bring us back for the next thing; that's optional, not a lock-in.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="eyebrow mb-4">FAQ</span>
            <h2 className="section-heading">
              The questions
              <br />
              we get most.
            </h2>
            <p className="mt-6 text-white/60">
              Something not covered? Send us a note —{" "}
              <a
                href="mailto:hello@donlabs.ai"
                className="text-accent underline-offset-4 hover:underline"
              >
                hello@donlabs.ai
              </a>
              .
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg font-medium tracking-tight md:text-xl">
                        {f.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-white/70 transition ${
                          isOpen ? "rotate-45 border-accent text-accent" : ""
                        }`}
                        aria-hidden
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] pb-6"
                          : "grid-rows-[0fr] pb-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="max-w-xl text-white/70">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

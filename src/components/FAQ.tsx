"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I don't know anything about AI. Will I be able to use what you build?",
    a: "Yes, that's the whole point. We build the system, wire Claude into it, and walk you and your team through it in plain English. By the end you'll be using it like a co-worker, not a black box. No prompt engineering degree required.",
  },
  {
    q: "How is this different from hiring a developer?",
    a: "Most developers charge a fortune, build something nobody can operate, then disappear. We do the opposite. Fixed price, fixed scope, and we hand it over with Claude connected so you can extend it yourself. We teach you how it works. No retainer trap.",
  },
  {
    q: "What about security and our data?",
    a: "Security is the default, not an add-on. Your data stays where it should. Secrets stay secret. Nothing leaves your control without your sign-off, and we walk you through exactly what's running and where.",
  },
  {
    q: "Why don't you list specific prices?",
    a: "Because what we build depends entirely on what you need. A single workflow and a full install live at very different price points. Hop on a call, tell us what you're trying to fix, and we'll quote you something fixed and honest before you commit to anything.",
  },
  {
    q: "Do you offer ongoing support after the build?",
    a: "Yes. AI Partner is a monthly option for teams that want us in their corner long term. New workflows, fixes, model upgrades, and a direct line when something needs to change. It's optional, easy to pause, and most clients add it after a Kickstart or Install.",
  },
  {
    q: "Who actually does the work?",
    a: "Don. 15 years shipping production software across games, fintech, e-commerce, blockchain and self-development products. No subcontractors, no offshore handoffs, no agency middle layer.",
  },
  {
    q: "How quickly can we start?",
    a: "Usually one to two weeks from the first call. We start free, agree on the one or two workflows that'll pay back fastest, and go from there.",
  },
  {
    q: "What if I'm not sure AI will help my business?",
    a: "Book the call anyway. It's free, and you'll leave with an honest answer. If AI isn't the right tool for what you're doing, we'll say so. We'd rather not take the work than build something that doesn't earn its keep.",
  },
  {
    q: "What happens after you hand it over?",
    a: "You own everything. The code, the prompts, the connections. Claude is wired in so you can extend and tweak workflows yourself. There's a built-in support window after launch, with no required retainer and no lock-in. If you want us back, you can have us. If you want to take it from there, take it.",
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
              Something not covered? Send us a note at{" "}
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

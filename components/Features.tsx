"use client";

export default function Features() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.045] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            From document to understanding.
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-500">
            DocMind handles the heavy reading so you can focus on what
            actually matters.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20 grid gap-5 md:grid-cols-3">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent md:block" />

          {/* Step 1 */}
          <div className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/[0.035]">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-sm text-violet-300">
              01
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-white">
                Upload your document
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Drop in a research paper, report, lecture notes or any PDF
                you need to understand.
              </p>
            </div>

            <div className="mt-8 flex h-20 items-center justify-center rounded-2xl border border-dashed border-violet-400/15 bg-violet-500/[0.025]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                  <span className="text-lg text-violet-300">↑</span>
                </div>

                <div className="text-left">
                  <p className="text-xs text-neutral-300">PDF document</p>
                  <p className="mt-1 text-[10px] text-neutral-600">
                    Ready to analyze
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/[0.035]">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-sm text-violet-300">
              02
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-white">
                Let AI understand it
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                DocMind extracts the content and turns hundreds of pages into
                structured, useful information.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                <span className="text-[10px] uppercase tracking-wider text-violet-300">
                  Processing
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <div className="h-full w-[78%] rounded-full bg-violet-400/40" />
                </div>

                <div className="h-1.5 w-[82%] rounded-full bg-white/[0.05]" />

                <div className="h-1.5 w-[60%] rounded-full bg-white/[0.05]" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/[0.035]">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-sm text-violet-300">
              03
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-white">
                Ask anything
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Get summaries, key insights and direct answers grounded in the
                document you uploaded.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.05] bg-black/20 p-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-violet-300">✦</span>
                <span className="text-[10px] text-neutral-500">
                  AI response
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-1.5 w-[90%] rounded-full bg-white/[0.07]" />
                <div className="h-1.5 w-[76%] rounded-full bg-white/[0.06]" />
                <div className="h-1.5 w-[84%] rounded-full bg-white/[0.06]" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature strip */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6">
            <p className="text-sm font-medium text-white">Instant summaries</p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Get the important information without manually reading every
              page.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6">
            <p className="text-sm font-medium text-white">Key insights</p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Surface important concepts, topics and information from your
              document.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6">
            <p className="text-sm font-medium text-white">Document Q&A</p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Ask questions naturally and get answers based on your uploaded
              document.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
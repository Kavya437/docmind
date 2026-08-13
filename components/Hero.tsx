"use client";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[92vh] max-w-[1500px] flex-col items-center overflow-hidden px-6 pt-20 text-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[150px] animate-[breathe_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute left-[12%] top-[45%] h-32 w-32 rounded-full bg-indigo-500/[0.06] blur-[80px] animate-[floatSlow_8s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute right-[12%] top-[35%] h-40 w-40 rounded-full bg-violet-500/[0.05] blur-[90px] animate-[floatSlow_10s_2s_ease-in-out_infinite]" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="animate-[fadeUp_.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-neutral-400 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
            </span>
            AI-powered document intelligence
          </div>
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-7 max-w-6xl animate-[fadeUp_.8s_.08s_ease-out_both] text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-7xl">
          Understand your documents.
          <br />
          <span className="text-neutral-500">
            Without reading every page.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-3xl animate-[fadeUp_.8s_.16s_ease-out_both] text-base leading-7 text-neutral-400 md:text-lg">
          Upload research papers, reports, books or notes and turn them into
          clear summaries, insights and answers in seconds.
        </p>

        {/* Supported documents */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-neutral-600">
          <span>Research papers</span>
          <span>Reports</span>
          <span>Lecture notes</span>
          <span>Books</span>
        </div>

        {/* ================= VISUAL ================= */}

        <div className="relative mx-auto mt-16 h-[320px] w-full max-w-5xl animate-[fadeUp_1s_.35s_ease-out_both] sm:h-[390px]">
          {/* Central glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[90px]" />

          {/* Orbit */}
          <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.08] animate-[orbitPulse_5s_ease-in-out_infinite] sm:h-[280px] sm:w-[280px]" />

          {/* Floating document */}
          <div className="absolute left-1/2 top-1/2 w-[185px] -translate-x-[62%] -translate-y-1/2 rotate-[-7deg] animate-[documentFloat_5s_ease-in-out_infinite] sm:w-[230px]">
            <div className="rounded-2xl border border-white/[0.1] bg-[#111116]/90 p-5 text-left shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10">
                    <div className="h-3 w-2.5 rounded-sm border border-violet-400/70" />
                  </div>

                  <div>
                    <div className="h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="mt-1.5 h-1 w-10 rounded-full bg-white/10" />
                  </div>
                </div>

                <span className="text-[9px] text-neutral-600">PDF</span>
              </div>

              <div className="mt-6 space-y-2.5">
                <div className="h-2 w-full rounded-full bg-white/[0.08]" />
                <div className="h-2 w-[88%] rounded-full bg-white/[0.06]" />
                <div className="h-2 w-[94%] rounded-full bg-white/[0.06]" />
                <div className="h-2 w-[72%] rounded-full bg-white/[0.06]" />
              </div>

              <div className="mt-6 h-12 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
                <div className="h-1.5 w-16 rounded-full bg-violet-400/30" />
                <div className="mt-2 h-1 w-full rounded-full bg-white/[0.06]" />
                <div className="mt-1.5 h-1 w-4/5 rounded-full bg-white/[0.05]" />
              </div>
            </div>
          </div>

          {/* AI insight card */}
          <div className="absolute left-1/2 top-1/2 w-[190px] translate-x-[8%] translate-y-[-35%] rotate-[6deg] animate-[insightFloat_5s_1s_ease-in-out_infinite] sm:w-[230px]">
            <div className="rounded-2xl border border-violet-400/[0.18] bg-[#111116]/95 p-5 text-left shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_50px_rgba(139,92,246,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/10">
                  <span className="text-xs text-violet-300">✦</span>
                </div>

                <div>
                  <p className="text-[9px] font-medium tracking-wider text-violet-300">
                    AI ANALYSIS
                  </p>
                  <p className="mt-0.5 text-[8px] text-neutral-600">
                    Understanding document
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-2 w-24 rounded-full bg-white/20" />

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <div className="h-1.5 w-[75%] rounded-full bg-white/[0.08]" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400/70" />
                    <div className="h-1.5 w-[88%] rounded-full bg-white/[0.07]" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400/50" />
                    <div className="h-1.5 w-[62%] rounded-full bg-white/[0.06]" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                <span className="text-[9px] text-neutral-500">
                  Insights extracted
                </span>
              </div>
            </div>
          </div>

          {/* Connecting energy */}
          <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-violet-400/50 to-transparent blur-[0.5px] animate-[energy_2.5s_ease-in-out_infinite]" />

          {/* Floating particles */}
          <span className="absolute left-[28%] top-[32%] h-1 w-1 rounded-full bg-violet-300/70 animate-[particle_4s_ease-in-out_infinite]" />
          <span className="absolute left-[65%] top-[24%] h-1.5 w-1.5 rounded-full bg-violet-400/50 animate-[particle_5s_1s_ease-in-out_infinite]" />
          <span className="absolute left-[72%] top-[70%] h-1 w-1 rounded-full bg-indigo-300/60 animate-[particle_4.5s_2s_ease-in-out_infinite]" />
          <span className="absolute left-[22%] top-[68%] h-1.5 w-1.5 rounded-full bg-violet-400/40 animate-[particle_5s_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            opacity: 0.6;
            transform: translateX(-50%) scale(0.95);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.08);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes documentFloat {
          0%,
          100% {
            transform: translate(-72%, -50%) rotate(-7deg);
          }
          50% {
            transform: translate(-72%, calc(-50% - 10px)) rotate(-4deg);
          }
        }

        @keyframes insightFloat {
          0%,
          100% {
            transform: translate(-2%, -35%) rotate(6deg);
          }
          50% {
            transform: translate(-2%, calc(-35% - 12px)) rotate(3deg);
          }
        }

        @keyframes orbitPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: translate(-50%, -50%) scale(0.96);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.04);
          }
        }

        @keyframes energy {
          0%,
          100% {
            opacity: 0.15;
            width: 40px;
          }
          50% {
            opacity: 0.8;
            width: 100px;
          }
        }

        @keyframes particle {
          0%,
          100% {
            opacity: 0.2;
            transform: translate(0, 0) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translate(8px, -14px) scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}
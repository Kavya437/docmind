type SummaryCardProps = {
  summary: string;
};

export default function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <section className="mx-auto mt-10 max-w-5xl px-6 pb-20">
      <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-5">
          <div>
            <p className="text-sm font-medium text-violet-400">AI ANALYSIS</p>
            <h2 className="mt-1 text-2xl font-semibold">Document Summary</h2>
          </div>

          <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
            Gemini AI
          </div>
        </div>

        <div className="prose prose-invert max-w-none px-6 py-8">
          <div className="whitespace-pre-wrap text-sm leading-7 text-neutral-300">
            {summary}
          </div>
        </div>
      </div>
    </section>
  );
}
type SummaryCardProps = {
  summary: string;
};

function getSection(summary: string, title: string, nextTitles: string[]) {
  const start = summary.indexOf(title);

  if (start === -1) return "";

  const contentStart = start + title.length;

  const nextPositions = nextTitles
    .map((next) => summary.indexOf(next, contentStart))
    .filter((position) => position !== -1);

  const end = nextPositions.length > 0
    ? Math.min(...nextPositions)
    : summary.length;

  return summary.slice(contentStart, end).trim();
}

function getBullets(content: string) {
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[-*•]\s*/, ""));
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  const sections = [
    "OVERVIEW",
    "KEY POINTS",
    "IMPORTANT DATES",
    "IMPORTANT PEOPLE",
    "KEY TOPICS",
  ];

  const overview = getSection(summary, "OVERVIEW", sections.slice(1));
  const keyPoints = getBullets(
    getSection(summary, "KEY POINTS", sections.slice(2))
  );
  const dates = getBullets(
    getSection(summary, "IMPORTANT DATES", sections.slice(3))
  );
  const people = getBullets(
    getSection(summary, "IMPORTANT PEOPLE", sections.slice(4))
  );
  const topics = getBullets(
    getSection(summary, "KEY TOPICS", [])
  );

  return (
    <section className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-violet-400">
            AI Analysis
          </p>

          <h2 className="mt-1 text-lg font-semibold text-white">
            Document Summary
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-violet-400/10 bg-violet-500/10 px-3 py-1.5 text-[11px] font-medium text-violet-300">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Gemini AI
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">

        {/* Overview */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
            Overview
          </p>

          <p className="text-sm leading-7 text-neutral-300">
            {overview || "No overview available."}
          </p>
        </div>

        {/* Key Points */}
        <div className="mt-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
            Key Points
          </p>

          <div className="space-y-2">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-3"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                <p className="text-sm leading-6 text-neutral-300">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dates + People */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
              Important Dates
            </p>

            <div className="space-y-3">
              {dates.map((date, index) => (
                <p
                  key={index}
                  className="text-sm leading-6 text-neutral-300"
                >
                  {date}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
              Important People
            </p>

            <div className="space-y-3">
              {people.map((person, index) => (
                <p
                  key={index}
                  className="text-sm leading-6 text-neutral-300"
                >
                  {person}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
            Key Topics
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
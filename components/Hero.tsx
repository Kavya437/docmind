export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-300">
        AI-Powered Document Intelligence
      </span>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        Understand Any PDF
        <span className="text-violet-500"> in Seconds.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-neutral-400">
        Upload research papers, reports, books or notes and get AI-powered
        summaries, insights and answers instantly.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500">
          Upload PDF
        </button>

        <button className="rounded-xl border border-neutral-700 px-6 py-3 hover:border-neutral-500">
          Learn More
        </button>
      </div>
    </section>
  );
}
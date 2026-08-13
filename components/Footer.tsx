export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/[0.06] bg-[#08080A] px-6 pb-10 pt-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
            D
          </div>

          <div>
            <p className="text-sm font-medium text-white">DocMind</p>
            <p className="text-xs text-neutral-600">
              AI-powered document intelligence
            </p>
          </div>
        </div>

        <p className="text-xs text-neutral-600">
          Built with AI · © 2026 DocMind
        </p>
      </div>
    </footer>
  );
}
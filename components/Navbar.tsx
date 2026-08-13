export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-300 group-hover:bg-violet-500">
            D
          </div>

          <span className="text-[17px] font-semibold tracking-tight text-white">
            DocMind
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-neutral-500 transition-colors duration-200 hover:text-white"
          >
            How it works
          </a>

          <a
            href="#upload"
            className="text-sm text-neutral-500 transition-colors duration-200 hover:text-white"
          >
            Upload
          </a>
        </div>

        {/* CTA */}
        <a
          href="#upload"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
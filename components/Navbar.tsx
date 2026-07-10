export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold">DocMind</h1>

        <div className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>

        <div className="flex gap-3">
          <button className="rounded-lg border border-neutral-700 px-4 py-2">
            Sign In
          </button>

          <button className="rounded-lg bg-violet-600 px-4 py-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
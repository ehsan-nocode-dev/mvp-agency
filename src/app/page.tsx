export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-base flex items-center">

      <div className="container mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-400">No-Code MVP Studio</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
          Launch your MVP fast — <span className="text-orange-500">without technical chaos</span>.
        </h1>
        <p className="mt-5 max-w-xl text-gray-400">
          We design, build, and iterate with speed and clarity so you can validate, learn, and grow.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#" className="rounded-md bg-orange-500 text-black px-6 py-3 font-semibold hover:opacity-90">
            Book a 30-min call
          </a>
          <a href="#process" className="rounded-md border border-gray-700 px-6 py-3 font-semibold">
            See our process
          </a>
        </div>
      </div>
    </main>
  );
}

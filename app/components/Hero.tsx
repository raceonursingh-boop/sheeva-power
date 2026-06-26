import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">

      {/* Background Glows */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute bottom-20 left-20 h-52 w-52 rounded-full bg-red-700/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl text-center">

        <p className="mb-8 uppercase tracking-[0.7em] text-red-500">
          PERFORMANCE STREETWEAR
        </p>

        <h1 className="text-7xl font-black uppercase leading-none text-white md:text-9xl">
          SHEEVA
        </h1>

        <h1 className="text-7xl font-black uppercase leading-none text-red-600 md:text-9xl">
          POWER
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-xl leading-8 text-gray-400">
          Built for athletes, creators and relentless minds.
          Every piece is designed to push you further.
        </p>

        <div className="mt-14">
          <Button>SHOP NOW</Button>
        </div>

      </div>
    </section>
  );
}
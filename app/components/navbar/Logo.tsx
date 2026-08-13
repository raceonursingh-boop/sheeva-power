import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-[#080808] to-black px-2 py-1 transition-all duration-500">
        <Image
          src="/sheeva-logo-navbar.png"
          alt="Sheeva Power"
          width={420}
          height={84}
          priority
          className="h-10 w-auto opacity-95 mix-blend-screen transition-all duration-500 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:opacity-100 group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.18)] sm:h-11 md:h-12 lg:h-14 xl:h-16"
        />

        {/* subtle hover glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
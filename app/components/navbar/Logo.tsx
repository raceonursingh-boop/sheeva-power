import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/sheeva-logo-navbar.png"
        alt="Sheeva Power"
        width={420}
        height={84}
        priority
       className="h-11 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-[72px] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      />
    </Link>
  );
}
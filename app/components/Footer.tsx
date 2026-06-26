import { Camera, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black uppercase text-white">
              SHEEVA
              <span className="text-red-600"> POWER</span>
            </h2>

            <p className="mt-6 max-w-sm text-gray-400">
              Built for the relentless. Premium oversized streetwear
              designed for athletes, creators, and anyone who refuses
              to settle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="cursor-pointer transition hover:text-red-500">
                Home
              </li>
              <li className="cursor-pointer transition hover:text-red-500">
                Shop
              </li>
              <li className="cursor-pointer transition hover:text-red-500">
                About
              </li>
              <li className="cursor-pointer transition hover:text-red-500">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Connect
            </h3>

            <div className="space-y-4">
              <div className="flex cursor-pointer items-center gap-3 text-gray-400 transition hover:text-red-500">
                <Camera size={20} />
                Instagram
              </div>

              <div className="flex cursor-pointer items-center gap-3 text-gray-400 transition hover:text-red-500">
                <Mail size={20} />
                hello@sheevapower.com
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 SHEEVA POWER. All Rights Reserved.
          </p>

          <button className="flex items-center gap-2 rounded-full border border-red-600 px-5 py-3 text-white transition hover:bg-red-600">
            Back To Top
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function SizeGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 transition hover:text-red-500"
      >
        Size Guide
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            {/* Header */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.6em] text-red-500">
                  SHEEVA POWER
                </p>

                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight">
                  Oversized Fit Size Guide
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-2 text-neutral-400 transition hover:border-red-500 hover:text-white"
                aria-label="Close size guide"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/5 text-xs uppercase tracking-[0.25em] text-neutral-400">
                  <tr>
                    <th className="border-b border-white/10 px-6 py-4">Size</th>
                    <th className="border-b border-white/10 px-6 py-4">Chest (in)</th>
                    <th className="border-b border-white/10 px-6 py-4">Length (in)</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["S", "42", "27"],
                    ["M", "44", "28"],
                    ["L", "46", "29"],
                    ["XL", "48", "30"],
                    ["XXL", "50", "31"],
                  ].map(([size, chest, length]) => (
                    <tr
                      key={size}
                      className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.03]"
                    >
                      <td className="px-6 py-4 font-semibold text-white">
                        {size}
                      </td>

                      <td className="px-6 py-4 text-neutral-300">
                        {chest}&quot;
                      </td>

                      <td className="px-6 py-4 text-neutral-300">
                        {length}&quot;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Fit Note */}
            <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
                Fit Note
              </p>

              <p className="mt-3 text-sm leading-7 text-neutral-300">
                Sheeva Power tees are designed with a relaxed oversized silhouette.
                Choose your regular size for the intended heavyweight streetwear fit,
                or size down for a slightly more fitted look.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
              <span>240 GSM Premium Cotton</span>
              <span>Oversized Fit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
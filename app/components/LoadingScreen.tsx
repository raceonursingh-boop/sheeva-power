"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="text-5xl font-black uppercase tracking-[0.5em]"
            >
              SHEEVA
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: .7 }}
              transition={{ delay: .5 }}
              className="mt-3 text-sm uppercase tracking-[0.7em] text-neutral-500"
            >
              POWER
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 text-xs uppercase tracking-[0.4em] text-neutral-500"
            >
              Crafted With Purpose
            </motion.p>

            {/* Loading Bar */}

            <div className="mx-auto mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-neutral-800">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="h-full bg-red-600"
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
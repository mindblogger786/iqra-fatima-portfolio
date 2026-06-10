"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Prevent body scroll while loading
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              document.body.style.overflow = "auto";
              onLoadingComplete();
            }, 800);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #FAFAF8 0%, #F2E6E9 50%, #E8E0F0 100%)",
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Floating background orbs */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #B76E79 0%, transparent 70%)",
              top: "20%",
              left: "15%",
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-[250px] h-[250px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
              bottom: "20%",
              right: "15%",
            }}
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main content */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Brand Mark */}
            <motion.div
              className="mb-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center shadow-lg">
                <span className="text-white font-playfair text-3xl font-bold">
                  I
                </span>
              </div>
              <motion.div
                className="absolute -inset-2 rounded-2xl border border-brand-rose/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-playfair text-2xl md:text-3xl text-neutral-dark mb-2 tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Iqra S Fatima
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="font-cormorant text-lg text-neutral-text italic mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Crafting the future, one line at a time
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-neutral-medium rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-accent rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress percentage */}
            <motion.span
              className="mt-4 text-sm text-neutral-text font-inter tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {progress}%
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

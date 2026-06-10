"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-dark text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center shadow-lg">
              <span className="text-white font-playfair text-base font-bold">
                I
              </span>
            </div>
            <span className="font-playfair text-lg text-white">
              Iqra S Fatima
            </span>
          </div>

          {/* Tagline */}
          <p className="text-white/80 text-base text-center font-cormorant italic">
            Driven by curiosity · Shaped by learning · Committed to impact
          </p>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-white/80">
            <span>Made with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#B76E79"
              className="w-4 h-4"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <motion.p
            className="text-xs text-white/60 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A lifelong learner transforming knowledge into solutions
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
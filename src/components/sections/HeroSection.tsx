"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection({ show }: { show: boolean }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 md:py-0">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Floating Orbs - constrained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #B76E79 0%, transparent 70%)",
            top: "10%",
            right: "-10%",
          }}
          animate={{ y: [-30, 30, -30], x: [-15, 15, -15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
            bottom: "15%",
            left: "-10%",
          }}
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #E8E0F0 0%, transparent 70%)",
            top: "50%",
            left: "50%",
          }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
        {/* Overline */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-[10px] sm:text-xs text-neutral-text tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full gradient-accent" />
            Welcome to my world
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-playfair text-neutral-dark mb-6 leading-[1.15] break-words"
          style={{ fontSize: "clamp(1.75rem, 7vw, 5.5rem)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Iqra S Fatima</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-cormorant text-base sm:text-xl md:text-2xl lg:text-3xl text-neutral-text italic mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          A lifelong learner transforming knowledge into solutions,
          <br className="hidden md:block" />
          growth into excellence, and ambition into achievement.
        </motion.p>

        {/* Identity Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            "Aspiring Technologist",
            "Problem Solver",
            "Future Leader",
            "Creative Thinker",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm text-neutral-dark font-medium tracking-wide hover-lift cursor-default whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <motion.button
            onClick={() =>
              document
                .querySelector("#story")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-8 py-3.5 gradient-accent text-white rounded-full text-sm font-medium tracking-wide hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover My Journey
          </motion.button>
          <motion.button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-8 py-3.5 glass-card text-neutral-dark rounded-full text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Motto */}
        <motion.p
          className="hidden sm:block mt-16 text-xs tracking-[0.3em] uppercase text-neutral-text/60"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Driven by curiosity · Shaped by learning · Committed to impact
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        onClick={() =>
          document
            .querySelector("#story")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-xs tracking-widest text-neutral-text/50 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-neutral-text/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
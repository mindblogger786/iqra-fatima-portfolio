"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const values = [
  {
    icon: "◈",
    title: "Integrity",
    description:
      "Building trust through transparency, honesty, and consistency in every interaction and every line of code.",
    bgColor: "bg-brand-blush/40",
  },
  {
    icon: "◆",
    title: "Discipline",
    description:
      "Showing up consistently, delivering on promises, and maintaining the highest standards of work quality.",
    bgColor: "bg-brand-lavender/40",
  },
  {
    icon: "▲",
    title: "Growth Mindset",
    description:
      "Embracing challenges as opportunities, viewing failures as lessons, and believing that ability can be developed.",
    bgColor: "bg-brand-peach/40",
  },
  {
    icon: "○",
    title: "Continuous Learning",
    description:
      "Staying curious, exploring new technologies, and never settling for what I already know.",
    bgColor: "bg-green-50/60",
  },
  {
    icon: "□",
    title: "Professionalism",
    description:
      "Approaching every task with maturity, respect, and a commitment to excellence that earns trust.",
    bgColor: "bg-blue-50/60",
  },
  {
    icon: "△",
    title: "Collaboration",
    description:
      "Believing that the best solutions emerge when diverse minds work together toward a shared vision.",
    bgColor: "bg-rose-50/60",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-40" />
      <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-brand-rose/5 blur-3xl -z-10 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          overline="What I Stand For"
          title="My Personal Values"
          subtitle="The principles that guide my decisions, shape my character, and define my professional identity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1}>
              <motion.div
                className="glass-card rounded-2xl p-8 hover-lift cursor-default text-center h-full"
                whileHover={{ y: -6 }}
              >
                <div
                  className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6`}
                >
                  <span className="text-neutral-dark/60">{value.icon}</span>
                </div>
                <h3 className="font-playfair text-lg text-neutral-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-text text-sm leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Inspirational Quote */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 text-center">
            <div className="inline-block glass-card rounded-2xl px-10 py-8 max-w-2xl">
              <p className="font-cormorant text-xl md:text-2xl italic text-neutral-dark/80 leading-relaxed">
                &ldquo;Values are not just words we speak — they are choices we
                make, actions we take, and the legacy we leave behind.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-8 h-px gradient-accent" />
                <span className="text-xs tracking-widest text-neutral-text uppercase">
                  Iqra S Fatima
                </span>
                <div className="w-8 h-px gradient-accent" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
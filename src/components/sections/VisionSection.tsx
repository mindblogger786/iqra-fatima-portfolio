"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const visionItems = [
  {
    icon: "🎯",
    title: "Career Goals",
    description:
      "To establish myself as a skilled software engineer at a leading technology company, contributing to products that impact millions of users worldwide.",
  },
  {
    icon: "🚀",
    title: "Future Aspirations",
    description:
      "To evolve into a technology leader who bridges the gap between innovation and implementation, mentoring the next generation of developers and creators.",
  },
  {
    icon: "💡",
    title: "Areas of Interest",
    description:
      "Full-stack development, system design, emerging technologies, artificial intelligence, and the intersection of technology with real-world problem solving.",
  },
  {
    icon: "🌍",
    title: "Long-Term Vision",
    description:
      "To build technology solutions that are not just functional, but meaningful — creating tools and platforms that improve lives, empower communities, and drive positive change.",
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="section-padding relative bg-white">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-peach/15 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-lavender/15 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          overline="Looking Ahead"
          title="Vision for the Future"
          subtitle="A glimpse into where I'm headed and the impact I aspire to create"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.12}>
              <motion.div
                className="glass-card rounded-2xl p-8 hover-lift h-full border border-white/40"
                whileHover={{ y: -6 }}
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-playfair text-xl text-neutral-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-text text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Vision Statement */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 gradient-accent rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

            <p className="text-white/80 text-sm tracking-widest uppercase mb-4">
              My Vision
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-6 leading-relaxed">
              To become a recognized technology leader who bridges the gap
              between complex technical challenges and elegant, human-centered
              solutions.
            </h3>
            <p className="text-white/70 text-sm max-w-xl mx-auto leading-relaxed font-light">
              I envision a future where I don&apos;t just write code — I architect
              experiences, mentor minds, and build technology that truly matters.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
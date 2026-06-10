"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const highlights = [
  {
    question: "Who am I?",
    answer:
      "I am Iqra S Fatima — a passionate technologist, a relentless learner, and an aspiring leader. I believe in the power of technology to transform lives and am committed to being part of that transformation.",
    icon: "✦",
    gradient: "from-brand-blush to-white",
  },
  {
    question: "What do I stand for?",
    answer:
      "I stand for excellence with humility, continuous growth with discipline, and innovation with purpose. Every project I undertake, every skill I learn, and every team I join reflects these core principles.",
    icon: "◈",
    gradient: "from-brand-lavender to-white",
  },
  {
    question: "What value do I bring?",
    answer:
      "I bring a unique combination of technical proficiency, strong communication skills, and an unwavering growth mindset. I don't just solve problems — I understand them deeply and create solutions that last.",
    icon: "◇",
    gradient: "from-brand-peach to-white",
  },
  {
    question: "Why should someone work with me?",
    answer:
      "Because I am not just committed to my own growth — I am invested in collective success. I bring energy, adaptability, and a genuine passion for creating meaningful impact. I am someone who shows up, delivers, and inspires.",
    icon: "→",
    gradient: "from-brand-blush to-brand-lavender",
  },
];

export default function BrandHighlights() {
  return (
    <section className="section-padding relative bg-white">
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-brand-blush/15 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          overline="Personal Brand"
          title="What Sets Me Apart"
          subtitle="The essence of who I am, distilled into what matters most"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 0.12}>
              <motion.div
                className={`rounded-2xl bg-gradient-to-br ${item.gradient} p-8 md:p-10 hover-lift h-full border border-white/50`}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                    <span className="text-white text-sm">{item.icon}</span>
                  </div>
                  <h3 className="font-playfair text-xl text-neutral-dark">
                    {item.question}
                  </h3>
                </div>
                <p className="text-neutral-text leading-relaxed font-light">
                  {item.answer}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
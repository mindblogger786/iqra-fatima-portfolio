"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const strengths = [
  {
    icon: "💬",
    title: "Communication",
    description:
      "Articulating complex ideas with clarity and confidence, bridging the gap between technical and non-technical audiences.",
    color: "bg-brand-blush",
    borderColor: "border-brand-rose/10",
  },
  {
    icon: "🧩",
    title: "Problem Solving",
    description:
      "Approaching challenges with analytical precision, breaking down complex problems into elegant, actionable solutions.",
    color: "bg-brand-lavender",
    borderColor: "border-purple-200/30",
  },
  {
    icon: "🌊",
    title: "Adaptability",
    description:
      "Thriving in dynamic environments, embracing change as an opportunity for growth and innovation.",
    color: "bg-brand-peach",
    borderColor: "border-amber-200/30",
  },
  {
    icon: "🤝",
    title: "Teamwork",
    description:
      "Fostering collaborative environments where diverse perspectives unite to create extraordinary outcomes.",
    color: "bg-green-50",
    borderColor: "border-green-200/30",
  },
  {
    icon: "🎯",
    title: "Leadership",
    description:
      "Inspiring others through initiative, mentorship, and a clear vision that turns potential into performance.",
    color: "bg-blue-50",
    borderColor: "border-blue-200/30",
  },
  {
    icon: "⚡",
    title: "Quick Learning",
    description:
      "Rapidly absorbing new technologies and concepts, transforming knowledge into practical expertise with remarkable speed.",
    color: "bg-rose-50",
    borderColor: "border-rose-200/30",
  },
];

export default function StrengthsSection() {
  return (
    <section id="strengths" className="section-padding relative bg-white">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-lavender/20 blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-brand-peach/20 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          overline="What Defines Me"
          title="Core Strengths"
          subtitle="The qualities that shape my professional identity and drive my success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <ScrollReveal key={strength.title} delay={index * 0.1}>
              <motion.div
                className={`glass-card rounded-2xl p-8 hover-lift cursor-default border ${strength.borderColor} h-full`}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className={`w-14 h-14 ${strength.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}
                >
                  {strength.icon}
                </div>
                <h3 className="font-playfair text-xl text-neutral-dark mb-3">
                  {strength.title}
                </h3>
                <p className="text-neutral-text text-sm leading-relaxed font-light">
                  {strength.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
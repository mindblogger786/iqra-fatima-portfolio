"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const milestones = [
  {
    period: "2019 — 2020",
    title: "High School (10th)",
    institution: "Central Board of Secondary Education",
    location: "Lucknow, UP",
    description:
      "Developed strong foundations in self-learning, time management, and adaptability. Built solid roots in mathematics, science, and communication that would later fuel my passion for technology.",
    highlight: "Foundation Building",
    color: "from-brand-sage to-green-300",
  },
  {
    period: "2021 — 2022",
    title: "Intermediate (10+2)",
    institution: "Central Board of Secondary Education",
    location: "Lucknow, UP",
    description:
      "Enhanced analytical thinking and problem-solving abilities through a rigorous academic curriculum. This period shaped my logical reasoning and ignited a deeper interest in computer science.",
    highlight: "Analytical Growth",
    color: "from-blue-400 to-brand-lavender",
  },
  {
    period: "2022 — 2025",
    title: "Bachelor of Computer Applications",
    institution: "University of Lucknow",
    location: "Lucknow, UP",
    description:
      "Gained comprehensive expertise in programming, database management, web development, and software engineering. Built real-world projects that transformed theoretical knowledge into practical solutions.",
    highlight: "Technical Mastery",
    color: "from-brand-rose to-brand-gold",
  },
  {
    period: "2025 — 2027",
    title: "Master of Computer Applications",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Lucknow, UP",
    description:
      "Advancing into software development, system design, emerging technologies, and research methodologies. Preparing for leadership roles in the technology industry with professional project management skills.",
    highlight: "Advanced Excellence",
    color: "from-brand-deep-rose to-purple-500",
    current: true,
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-blush/20 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          overline="Education"
          title="My Academic Journey"
          subtitle="A continuous path of growth, learning, and transformation"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-rose/20 via-brand-gold/20 to-brand-lavender/20 md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={milestone.title}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 top-8">
                    <motion.div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${milestone.color} shadow-lg`}
                      whileInView={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    {milestone.current && (
                      <motion.div
                        className="absolute -inset-2 rounded-full border-2 border-brand-rose/30"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[45%] ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div
                      className={`glass-card-strong rounded-2xl p-6 md:p-8 hover-lift ${
                        milestone.current
                          ? "border border-brand-rose/20 shadow-lg shadow-brand-rose/5"
                          : ""
                      }`}
                    >
                      {/* Period Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${milestone.color}`}
                        >
                          {milestone.highlight}
                        </span>
                        {milestone.current && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-700 uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-neutral-text mb-2 font-light">
                        {milestone.period}
                      </p>
                      <h3 className="font-playfair text-xl text-neutral-dark mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-brand-rose font-medium mb-1">
                        {milestone.institution}
                      </p>
                      <p className="text-xs text-neutral-text mb-4">
                        {milestone.location}
                      </p>
                      <p className="text-neutral-text text-sm leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const certifications = [
  {
    title: "Python with Django — Full Stack Web Development",
    issuer: "Analyze Infotech Pvt. Ltd.",
    period: "May 2024 — Aug 2024",
    type: "Professional Course",
    highlights: [
      "Full-stack project development using Django framework",
      "Improved application response time by 20% through optimized SQL queries",
    ],
    color: "border-l-brand-rose",
    bgColor: "bg-brand-blush/20",
  },
  {
    title: "Python Add-On Course",
    issuer: "Certified Training Program",
    period: "Completed",
    type: "Certification",
    highlights: [
      "Hands-on experience in Python programming",
      "Problem-solving, automation, and application development fundamentals",
    ],
    color: "border-l-purple-400",
    bgColor: "bg-brand-lavender/20",
  },
  {
    title: "Java Software Development Workshop",
    issuer: "Certified Workshop",
    period: "Completed",
    type: "Workshop",
    highlights: [
      "Foundational knowledge of Java programming",
      "Object-oriented concepts and software development practices",
    ],
    color: "border-l-amber-400",
    bgColor: "bg-brand-peach/20",
  },
  {
    title: "Digital Marketing Workshop",
    issuer: "Certified Workshop",
    period: "Completed",
    type: "Workshop",
    highlights: [
      "Digital marketing strategies and social media promotion",
      "SEO fundamentals and online audience engagement",
    ],
    color: "border-l-green-400",
    bgColor: "bg-green-50/40",
  },
  {
    title: "Internet of Things (IoT) Workshop",
    issuer: "Certified Workshop",
    period: "Completed",
    type: "Workshop",
    highlights: [
      "IoT concepts, sensor integration, and device communication",
      "Real-world applications of connected systems",
    ],
    color: "border-l-blue-400",
    bgColor: "bg-blue-50/40",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          overline="Achievements"
          title="Certifications & Growth"
          subtitle="Each certification represents a milestone in my continuous journey of learning"
        />

        <div className="space-y-5">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1}>
              <motion.div
                className={`glass-card-strong rounded-2xl p-6 md:p-8 border-l-4 ${cert.color} hover-lift`}
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-medium ${cert.bgColor} text-neutral-dark`}
                      >
                        {cert.type}
                      </span>
                      <span className="text-xs text-neutral-text">
                        {cert.period}
                      </span>
                    </div>
                    <h3 className="font-playfair text-lg text-neutral-dark mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-brand-rose mb-3">{cert.issuer}</p>
                    <ul className="space-y-1.5">
                      {cert.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-neutral-text font-light"
                        >
                          <span className="w-1 h-1 rounded-full bg-brand-rose mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
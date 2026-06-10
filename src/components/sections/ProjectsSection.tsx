"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Doctor Appointment Booking System",
    period: "Dec 2024 — Mar 2025",
    purpose:
      "To create a seamless healthcare experience where patients can book appointments effortlessly and doctors can manage their practice efficiently.",
    challenge:
      "Building a reliable booking system that handles payment processing, real-time availability, and multi-role authentication securely.",
    solution:
      "Developed a full-stack application using the MERN Stack with integrated payment gateway, user authentication, and a doctor/patient management system.",
    impact:
      "Optimized database queries to enhance system efficiency by 90%, creating a smooth experience for both doctors and patients.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Payment Gateway"],
    learning:
      "Mastered full-stack architecture, payment integration, and complex role-based access control systems.",
    gradient: "from-brand-rose/10 to-brand-peach/10",
    accentColor: "text-brand-rose",
    dotColor: "bg-brand-rose",
  },
  {
    number: "02",
    title: "Social Media Platform",
    period: "Oct 2023 — Dec 2023",
    purpose:
      "To build a responsive social platform that enables meaningful connections through profile management and content sharing.",
    challenge:
      "Creating a responsive platform with real-time features, secure user authentication, and an intuitive content management system.",
    solution:
      "Built with Python and Django, featuring integrated profile management, user authentication, and a complete post management system.",
    impact:
      "Delivered a fully functional social platform demonstrating proficiency in full-stack development and user experience design.",
    technologies: ["Python", "Django", "HTML/CSS", "JavaScript", "SQLite"],
    learning:
      "Deepened understanding of user authentication patterns, responsive design, and scalable application architecture.",
    gradient: "from-brand-lavender/10 to-blue-50",
    accentColor: "text-purple-600",
    dotColor: "bg-purple-500",
  },
  {
    number: "03",
    title: "Library Management System",
    period: "Mar 2024 — May 2024",
    purpose:
      "To automate library operations, making book transactions efficient and reducing manual workload for librarians.",
    challenge:
      "Designing a system that handles complex book transactions, member management, and reporting while maintaining optimal database performance.",
    solution:
      "Designed a comprehensive web-based system using Python with Django, with optimized database queries for maximum efficiency.",
    impact:
      "Enhanced system efficiency by 85% through optimized database queries, significantly reducing transaction processing time.",
    technologies: ["Python", "Django", "MySQL", "HTML/CSS", "JavaScript"],
    learning:
      "Learned the art of database optimization and the importance of clean, maintainable code architecture.",
    gradient: "from-brand-peach/10 to-brand-blush/10",
    accentColor: "text-amber-600",
    dotColor: "bg-amber-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative bg-white">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-lavender/15 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          overline="Featured Work"
          title="Projects That Tell a Story"
          subtitle="Every project is a chapter in my journey — each one teaching me something invaluable"
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div
                className={`rounded-3xl bg-gradient-to-br ${project.gradient} border border-white/60 p-8 md:p-10 hover-lift`}
                whileHover={{ y: -4 }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`font-playfair text-4xl font-bold ${project.accentColor} opacity-30`}
                      >
                        {project.number}
                      </span>
                      <div className="h-px w-8 bg-current opacity-20" />
                    </div>
                    <h3 className="font-playfair text-2xl md:text-3xl text-neutral-dark mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-text font-light">
                      {project.period}
                    </p>
                  </div>
                </div>

                {/* Story Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-neutral-text mb-2 font-medium">
                      Purpose
                    </h4>
                    <p className="text-neutral-dark text-sm leading-relaxed font-light">
                      {project.purpose}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-neutral-text mb-2 font-medium">
                      Challenge
                    </h4>
                    <p className="text-neutral-dark text-sm leading-relaxed font-light">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-neutral-text mb-2 font-medium">
                      Solution
                    </h4>
                    <p className="text-neutral-dark text-sm leading-relaxed font-light">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-neutral-text mb-2 font-medium">
                      Impact
                    </h4>
                    <p className="text-neutral-dark text-sm leading-relaxed font-light">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-neutral-dark/5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/70 text-xs text-neutral-text font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-neutral-text italic font-cormorant text-base">
                    &ldquo;{project.learning}&rdquo;
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
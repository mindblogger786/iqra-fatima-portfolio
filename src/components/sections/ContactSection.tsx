"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { Mail, Link2, MapPin, ArrowUpRight } from "lucide-react";

// Custom GitHub Icon (SVG)
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "fatimaiqra0786@gmail.com",
    href: "mailto:fatimaiqra0786@gmail.com",
    color: "bg-brand-blush hover:bg-brand-blush/80",
    textColor: "text-neutral-dark",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/iqrasfatima",
    href: "https://github.com/iqrasfatima",
    color: "bg-neutral-dark hover:bg-neutral-black",
    textColor: "text-white",
  },
  {
    icon: Link2,
    label: "Portfolio",
    value: "iqra-fatima-portfolio.vercel.app",
    href: "https://iqra-fatima-portfolio.vercel.app",
    color: "bg-brand-lavender hover:bg-brand-lavender/80",
    textColor: "text-neutral-dark",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-rose/5 blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-lavender/10 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blush/60 text-xs tracking-[0.2em] uppercase text-brand-deep-rose font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
              Let&apos;s Connect
            </span>
            <h2
              className="font-playfair text-neutral-dark leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Start a Conversation
            </h2>
            <p className="text-neutral-text text-lg max-w-xl mx-auto font-light leading-relaxed">
              I&apos;m always open to new opportunities, collaborations, and
              meaningful connections. Let&apos;s create something extraordinary
              together.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <ScrollReveal key={link.label} delay={index * 0.1}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-strong rounded-2xl p-6 flex flex-col items-center text-center hover-lift group cursor-pointer"
                  whileHover={{ y: -6 }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${link.color} flex items-center justify-center mb-4 transition-colors duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${link.textColor}`} />
                  </div>
                  <h3 className="font-medium text-neutral-dark mb-1">
                    {link.label}
                  </h3>
                  <p className="text-sm text-neutral-text font-light mb-3 break-all">
                    {link.value}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-neutral-text/40 group-hover:text-brand-rose group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Location */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-neutral-text">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-light">Lucknow, India</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Inspirational closing */}
        <ScrollReveal delay={0.3}>
          <div className="text-center glass-card rounded-3xl p-10 md:p-14">
            <p className="font-cormorant text-2xl md:text-3xl italic text-neutral-dark/70 leading-relaxed mb-6">
              &ldquo;The best way to predict the future is to create it.&rdquo;
            </p>
            <p className="text-sm text-neutral-text font-light">
              — And I&apos;m ready to start building.
            </p>
            <div className="mt-6">
              <motion.a
                href="mailto:fatimaiqra0786@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 gradient-accent text-white rounded-full text-sm font-medium tracking-wide hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Say Hello
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
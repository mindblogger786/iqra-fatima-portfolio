"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  overline: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 md:mb-20 ${alignClass}`}>
      <ScrollReveal>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blush/60 text-xs tracking-[0.2em] uppercase text-brand-deep-rose font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
          {overline}
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2
          className="font-playfair text-neutral-dark leading-tight text-balance"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {title}
        </h2>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-neutral-text text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
"use client";

import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

export default function StorySection() {
  return (
    <section id="story" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blush/30 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          overline="My Story"
          title="The Journey So Far"
          subtitle="Every great story begins with a spark of curiosity"
        />

        <div className="space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blush flex items-center justify-center shrink-0 mt-1">
                  <span className="text-brand-rose text-lg">✦</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-neutral-dark mb-3">
                    The Spark of Curiosity
                  </h3>
                  <p className="text-neutral-text leading-relaxed font-light">
                    My journey into the world of technology began not with a grand
                    plan, but with a simple question: <em className="font-cormorant text-lg text-brand-deep-rose">&ldquo;How does this work?&rdquo;</em> 
                    From my early days in Lucknow, I found myself endlessly fascinated
                    by the invisible systems that power our world — the logic behind
                    software, the elegance of algorithms, and the magic of turning
                    an idea into something real.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-lavender flex items-center justify-center shrink-0 mt-1">
                  <span className="text-purple-600 text-lg">◈</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-neutral-dark mb-3">
                    Building the Foundation
                  </h3>
                  <p className="text-neutral-text leading-relaxed font-light">
                    Through my academic journey — from mastering the fundamentals
                    in high school to pursuing a Bachelor&apos;s in Computer Applications
                    at the University of Lucknow — I didn&apos;t just learn to code. I
                    learned to think. Every course, every project, and every challenge
                    taught me that technology is not just about syntax and frameworks
                    — it&apos;s about solving real problems for real people.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-peach flex items-center justify-center shrink-0 mt-1">
                  <span className="text-amber-600 text-lg">◇</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-neutral-dark mb-3">
                    From Learning to Creating
                  </h3>
                  <p className="text-neutral-text leading-relaxed font-light">
                    The transition from student to creator came naturally. Building
                    a Library Management System taught me the beauty of optimization.
                    Creating a Social Media Platform showed me the power of user
                    experience. And developing a Doctor Appointment Booking System
                    revealed how technology can genuinely improve lives. Each project
                    was more than code — it was a lesson in impact.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="glass-card rounded-2xl p-8 md:p-10 hover-lift border-brand-rose/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-lg">→</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-neutral-dark mb-3">
                    The Path Ahead
                  </h3>
                  <p className="text-neutral-text leading-relaxed font-light">
                    Now, as I pursue my Master&apos;s at Dr. APJ Abdul Kalam Technical
                    University, I carry with me not just technical knowledge, but
                    a philosophy: <em className="font-cormorant text-lg text-brand-deep-rose">
                    &ldquo;Never stop learning. Never stop building. Never stop growing.&rdquo;
                    </em> I believe the best technology is built by those who
                    understand both the machine and the human behind it.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Quote */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <blockquote className="font-cormorant text-2xl md:text-3xl italic text-neutral-dark/80 leading-relaxed">
              &ldquo;Driven by curiosity, shaped by continuous learning, and
              committed to creating meaningful impact through technology
              and collaboration.&rdquo;
            </blockquote>
            <div className="mt-4 w-12 h-0.5 gradient-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
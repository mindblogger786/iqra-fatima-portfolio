"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Story", href: "#story" },
  { name: "Strengths", href: "#strengths" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Values", href: "#values" },
  { name: "Vision", href: "#vision" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ show }: { show: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250,250,248,0)", "rgba(250,250,248,0.9)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(232,232,230,0)", "rgba(232,232,230,0.5)"]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100]"
        initial={{ y: -100, opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        style={{
          backgroundColor: navBackground,
          borderBottom: `1px solid`,
          borderColor: navBorder,
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-playfair text-base font-bold">
                  I
                </span>
              </div>
              <span className="font-playfair text-lg text-neutral-dark hidden sm:block">
                Iqra S Fatima
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm text-neutral-text hover:text-neutral-dark transition-colors duration-300 rounded-lg hover:bg-brand-blush/50 cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    show ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                  }
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="ml-4 px-5 py-2 text-sm text-white gradient-accent rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Connect
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-neutral-dark rounded-full block"
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 8 }
                    : { rotate: 0, y: 0 }
                }
              />
              <motion.span
                className="w-6 h-0.5 bg-neutral-dark rounded-full block"
                animate={
                  mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                }
              />
              <motion.span
                className="w-6 h-0.5 bg-neutral-dark rounded-full block"
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatedMobileMenu
        isOpen={mobileMenuOpen}
        items={navItems}
        onItemClick={scrollToSection}
      />
    </>
  );
}

function AnimatedMobileMenu({
  isOpen,
  items,
  onItemClick,
}: {
  isOpen: boolean;
  items: typeof navItems;
  onItemClick: (href: string) => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[99] lg:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { pointerEvents: "auto" as const },
        closed: { pointerEvents: "none" as const },
      }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Menu Panel */}
      <motion.div
        className="absolute top-0 right-0 w-80 max-w-[85vw] h-full glass-card-strong shadow-2xl"
        variants={{
          open: { x: 0 },
          closed: { x: "100%" },
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        <div className="pt-24 px-8 flex flex-col gap-2">
          {items.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => onItemClick(item.href)}
              className="text-left px-4 py-3 text-lg text-neutral-dark hover:text-brand-rose transition-colors rounded-xl hover:bg-brand-blush/50 cursor-pointer"
              variants={{
                open: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.1 + index * 0.05 },
                },
                closed: { opacity: 0, x: 20 },
              }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => onItemClick("#contact")}
            className="mt-4 px-6 py-3 text-white gradient-accent rounded-full text-center cursor-pointer"
            variants={{
              open: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.1 + items.length * 0.05 },
              },
              closed: { opacity: 0, x: 20 },
            }}
          >
            Let&apos;s Connect
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
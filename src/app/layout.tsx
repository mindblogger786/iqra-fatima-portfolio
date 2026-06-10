import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iqra S Fatima — Aspiring Technologist & Future Leader",
  description:
    "A lifelong learner transforming knowledge into solutions, growth into excellence, and ambition into achievement. Discover the journey of Iqra S Fatima — Full-Stack Developer, Problem Solver, and Future Tech Leader.",
  keywords: [
    "Iqra S Fatima",
    "Iqra Fatima Portfolio",
    "Software Developer Lucknow",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Python Django Developer",
    "Personal Brand",
    "MCA Student",
    "Women in Tech",
    "Web Developer India",
  ],
  authors: [{ name: "Iqra S Fatima" }],
  creator: "Iqra S Fatima",
  openGraph: {
    title: "Iqra S Fatima — Aspiring Technologist & Future Leader",
    description:
      "A lifelong learner transforming knowledge into solutions, growth into excellence, and ambition into achievement.",
    type: "website",
    locale: "en_US",
    siteName: "Iqra S Fatima",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqra S Fatima — Aspiring Technologist",
    description:
      "A lifelong learner transforming knowledge into solutions, growth into excellence, and ambition into achievement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
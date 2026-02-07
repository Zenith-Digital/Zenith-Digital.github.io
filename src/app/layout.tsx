import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zenith Digital - Unreal Engine Development & Visual Storytelling",
  description: "Professional Unreal Engine development services by Daniel Orchard. Specializing in XR development, virtual production, motion capture, and custom solutions for film, TV, and interactive media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-[color:var(--canvas)] text-[color:var(--ink)] antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

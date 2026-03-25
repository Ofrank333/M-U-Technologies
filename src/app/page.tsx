import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "M&U Technologies Co Inc | Intelligent Networks. Unshakeable Security.",
  description:
    "Enterprise network automation, AI integration, and zero-trust security solutions. Transform your infrastructure with M&U Technologies.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

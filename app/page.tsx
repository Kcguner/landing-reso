import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { VibeModes } from "@/components/landing/vibe-modes";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { Showcase } from "@/components/landing/showcase";
import { Personas } from "@/components/landing/personas";
import { FAQ } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { navItems, vibeCards, features, faqs } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <header>
        <Navbar items={navItems} />
      </header>
      <main>
        <Hero />
        <ProblemSolution />
        <VibeModes items={vibeCards} />
        <HowItWorks />
        <FeaturesGrid items={features} />
        <Showcase />
        <Personas />
        <FAQ items={faqs} />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

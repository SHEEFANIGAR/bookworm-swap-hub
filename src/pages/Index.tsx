
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PopularBooks } from "@/components/PopularBooks";
import { StatsSection } from "@/components/StatsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PopularBooks />
        <FeaturesSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

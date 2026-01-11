import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { TechnologySection } from '@/components/TechnologySection';
import { DemoSection } from '@/components/DemoSection';
import { MarketSection } from '@/components/MarketSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div id="problem">
          <ProblemSection />
        </div>
        <SolutionSection />
        <TechnologySection />
        <DemoSection />
        <MarketSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

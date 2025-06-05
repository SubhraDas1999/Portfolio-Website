
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import HeroSection from '@/components/home/HeroSection';
import StoryMode from '@/components/home/StoryMode';
import ProductJourney from '@/components/home/ProductJourney';
import CaseStudies from '@/components/home/CaseStudies';
import SkillBoard from '@/components/home/SkillBoard';
import MetricsWall from '@/components/home/MetricsWall';
import ExploringNow from '@/components/home/ExploringNow';
// import PortfolioOptimizerSection from '@/components/home/PortfolioOptimizerSection'; // Removed

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StoryMode />
        <ProductJourney />
        <CaseStudies />
        <SkillBoard />
        <MetricsWall />
        <ExploringNow />
        {/* <PortfolioOptimizerSection /> */} {/* Removed */}
      </main>
      <Footer />
    </div>
  );
}


import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import IntelligenceSection from '@/components/IntelligenceSection';
import FeaturesSection from '@/components/FeaturesSection';
import InsightsSection from '@/components/InsightsSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <IntelligenceSection />
        <FeaturesSection />
        <InsightsSection />
        <StatsSection />
        <TestimonialsSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

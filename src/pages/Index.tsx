
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

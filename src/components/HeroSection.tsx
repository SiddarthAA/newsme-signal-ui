
import { ArrowDown, Users, Globe, Zap } from 'lucide-react';
import MultiStepSignupForm from './MultiStepSignupForm';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
      
      {/* Member Count Header */}
      <div className={`slide-in-up ${isVisible ? 'visible' : ''} max-w-4xl mx-auto text-center mb-8`}>
        <div className="glass-card inline-flex items-center space-x-3 px-6 py-3 mx-auto">
          <Users className="w-5 h-5 text-electric-cyan-400" />
          <span className="text-gray-300 font-inter text-sm tracking-wide">
            Trusted by <span className="text-white font-semibold">347,892</span> professionals worldwide
          </span>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center space-y-16">
        {/* Main Headline */}
        <div className="space-y-8">
          <h1 className={`slide-in-left ${isVisible ? 'visible' : ''} text-5xl md:text-6xl lg:text-7xl font-instrument-serif font-bold leading-tight tracking-tight`} style={{ animationDelay: '0.2s' }}>
            <span className="text-white">Intelligence.</span>
            <br />
            <span className="text-white">Simplified. With </span>
            <span className="text-electric-cyan-400 relative">
              NewsMe
              <div className="absolute inset-0 text-electric-cyan-400 opacity-20 blur-lg">NewsMe</div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`slide-in-right ${isVisible ? 'visible' : ''} text-xl md:text-2xl text-gray-300 font-instrument-serif font-light max-w-4xl mx-auto leading-relaxed`} style={{ animationDelay: '0.4s' }}>
            Transform information overload into strategic intelligence. 
            <br />
            <span className="text-electric-cyan-400">5 minutes daily.</span> 
            <span className="text-white"> Infinite clarity.</span>
          </p>

          {/* Feature Highlights */}
          <div className={`slide-in-up ${isVisible ? 'visible' : ''} flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-inter tracking-wide`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-electric-cyan-400" />
              <span>200+ Global Sources</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-electric-cyan-400" />
              <span>AI-Powered Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-electric-cyan-400" />
              <span>Executive-Grade Intelligence</span>
            </div>
          </div>
        </div>

        {/* Multi-Step Signup Form */}
        <div className={`slide-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <MultiStepSignupForm />
        </div>
      </div>

      {/* Scroll Indicator with more space */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;

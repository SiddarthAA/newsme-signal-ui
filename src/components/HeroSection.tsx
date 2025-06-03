
import { ArrowDown } from 'lucide-react';
import MultiStepSignupForm from './MultiStepSignupForm';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-16 animate-fade-in">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-instrument-serif font-semibold leading-tight tracking-tight">
            <span className="text-white">Stay informed.</span>
            <br />
            <span className="text-white">Stay ahead with </span>
            <span className="text-electric-cyan-400 relative">
              NewsMe
              <div className="absolute inset-0 text-electric-cyan-400 opacity-30 blur-sm">NewsMe</div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 font-instrument-serif font-light max-w-3xl mx-auto">
            Get a quick 5-minute email summary of top global news. Delivered daily.
          </p>
        </div>

        {/* Multi-Step Signup Form */}
        <MultiStepSignupForm />

        {/* Read Latest Summary Link */}
        <button
          type="button"
          className="text-gray-400 hover:text-electric-cyan-400 text-lg font-instrument-serif underline-animation transition-colors duration-300"
          onClick={() => console.log('Read latest summary clicked')}
        >
          Read the latest summary →
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

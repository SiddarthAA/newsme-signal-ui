
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Handle subscription logic here
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-space-grotesk font-light leading-tight tracking-tight">
          <span className="text-white">Stay informed.</span>
          <br />
          <span className="text-white">Stay ahead with </span>
          <span className="text-electric-cyan-400 relative">
            NewsMe
            <div className="absolute inset-0 text-electric-cyan-400 opacity-30 blur-sm">NewsMe</div>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 font-inter font-light max-w-3xl mx-auto underline-animation">
          Get a quick 5-minute email summary of top global news. Delivered daily.
        </p>

        {/* Email Subscription Form */}
        <form onSubmit={handleSubscribe} className="max-w-lg mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-electric-cyan-400 focus:ring-electric-cyan-400 h-12 text-lg"
              required
            />
            <Button
              type="submit"
              className="h-12 px-8 bg-gradient-to-r from-electric-cyan-500 to-electric-cyan-600 hover:from-electric-cyan-400 hover:to-electric-cyan-500 text-black font-space-grotesk font-medium tracking-wide glow-effect transition-all duration-300 uppercase"
            >
              Subscribe Now
            </Button>
          </div>
          
          <button
            type="button"
            className="text-gray-400 hover:text-electric-cyan-400 text-sm font-inter underline-animation transition-colors duration-300"
            onClick={() => console.log('Read latest summary clicked')}
          >
            Read the latest summary →
          </button>
        </form>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

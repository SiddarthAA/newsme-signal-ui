
import { Signal } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Signal className="w-8 h-8 text-electric-cyan-400 animate-float" />
            <div className="absolute inset-0 w-8 h-8 text-electric-cyan-400 opacity-30 animate-glow"></div>
          </div>
          <h1 className="text-2xl font-space-grotesk font-light tracking-wider text-white">
            News<span className="font-medium text-electric-cyan-400">Me</span>
          </h1>
        </div>

        {/* Advertise Button */}
        <button className="px-6 py-2 border border-white/20 text-white text-sm font-inter font-light tracking-wide hover:border-electric-cyan-400 hover:text-electric-cyan-400 hover:shadow-lg hover:shadow-electric-cyan-400/20 transition-all duration-300 rounded-md">
          Advertise
        </button>
      </div>
    </header>
  );
};

export default Header;

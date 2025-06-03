
import { Radio } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-cyan-400 to-electric-cyan-600 rounded-xl flex items-center justify-center">
              <Radio className="w-5 h-5 text-black animate-float" />
            </div>
            <div className="absolute inset-0 w-10 h-10 bg-electric-cyan-400 opacity-20 rounded-xl blur-md animate-glow"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-instrument-serif font-bold tracking-wider text-white">
              News<span className="font-light text-electric-cyan-400">Me</span>
            </h1>
            <p className="text-xs text-gray-400 font-inter tracking-wide">Intelligence Network</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2.5 bg-gradient-to-r from-electric-cyan-500/10 to-electric-cyan-600/10 border border-electric-cyan-400/30 text-electric-cyan-400 text-sm font-inter font-medium tracking-wide hover:from-electric-cyan-500/20 hover:to-electric-cyan-600/20 hover:border-electric-cyan-400/50 hover:shadow-lg hover:shadow-electric-cyan-400/10 transition-all duration-300 rounded-lg">
            Partner With Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

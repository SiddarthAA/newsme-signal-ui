
import { Radio, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isUnsubscribing, setIsUnsubscribing] = useState(false);

  const handleUnsubscribe = async () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setIsUnsubscribing(true);
    try {
      const response = await fetch(`/unsubscribe/${encodeURIComponent(email)}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Successfully unsubscribed from newsletter');
        setEmail('');
      } else {
        alert('Failed to unsubscribe. Please try again.');
      }
    } catch (error) {
      console.error('Unsubscribe error:', error);
      alert('Failed to unsubscribe. Please try again.');
    }
    setIsUnsubscribing(false);
  };

  return (
    <footer className="py-16 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-blue-950/20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-cyan-400 to-electric-cyan-600 rounded-xl flex items-center justify-center">
              <Radio className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-instrument-serif font-bold text-white tracking-wider">
                News<span className="font-light text-electric-cyan-400">Me</span>
              </h3>
              <p className="text-xs text-gray-400 font-inter tracking-wide">Intelligence Network</p>
            </div>
          </div>
          
          <p className="text-gray-400 font-inter leading-relaxed max-w-2xl mx-auto">
            Transforming global information into strategic intelligence for decision-makers 
            who shape the future.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a href="#about" className="text-gray-400 hover:text-white font-inter tracking-wide transition-colors duration-300">
            About Us
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white font-inter tracking-wide transition-colors duration-300">
            Contact Us
          </a>
          <a href="#privacy" className="text-gray-400 hover:text-white font-inter tracking-wide transition-colors duration-300">
            Privacy Policy
          </a>
        </div>

        {/* Unsubscribe Section */}
        <div className="space-y-4 max-w-md mx-auto">
          <p className="text-gray-400 text-sm font-inter tracking-wide">
            Unsubscribe from our newsletter
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:border-electric-cyan-400 focus:ring-2 focus:ring-electric-cyan-400/30 transition-all duration-300"
            />
            <button
              onClick={handleUnsubscribe}
              disabled={isUnsubscribing}
              className="px-6 py-2 bg-white/5 border border-white/20 text-gray-400 text-sm font-inter tracking-wide hover:border-white/30 hover:text-gray-300 hover:bg-white/10 transition-all duration-300 rounded-lg disabled:opacity-50"
            >
              {isUnsubscribing ? 'Unsubscribing...' : 'Unsubscribe'}
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-4 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3" />
            <span>contact@newsme.ai</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3" />
            <span>Enterprise: +1 (555) 123-4567</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-gray-400 text-sm font-inter tracking-wide">
            © 2024 NewsMe Intelligence Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

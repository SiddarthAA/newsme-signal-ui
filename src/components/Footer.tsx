
import { Radio, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Intelligence Hub', href: '#intelligence' },
      { name: 'API Access', href: '#api' },
      { name: 'Enterprise', href: '#enterprise' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Leadership', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Data Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'System Status', href: '#status' },
      { name: 'Community', href: '#community' },
    ]
  };

  const handleUnsubscribe = () => {
    console.log('Unsubscribe clicked');
    // Handle unsubscribe logic here
  };

  return (
    <footer className="py-20 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-blue-950/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
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
            
            <p className="text-gray-400 font-inter leading-relaxed max-w-md">
              Transforming global information into strategic intelligence for decision-makers 
              who shape the future. Join the world's most informed professional network.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-electric-cyan-400/50 hover:bg-electric-cyan-400/10 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-electric-cyan-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-electric-cyan-400/50 hover:bg-electric-cyan-400/10 transition-all duration-300">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-electric-cyan-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-electric-cyan-400/50 hover:bg-electric-cyan-400/10 transition-all duration-300">
                <Mail className="w-5 h-5 text-gray-400 hover:text-electric-cyan-400" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-6">
            <h4 className="text-white font-instrument-serif font-semibold tracking-wide">Product</h4>
            <nav className="space-y-3">
              {footerLinks.product.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white text-sm font-inter tracking-wide transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-instrument-serif font-semibold tracking-wide">Company</h4>
            <nav className="space-y-3">
              {footerLinks.company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white text-sm font-inter tracking-wide transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-instrument-serif font-semibold tracking-wide">Support</h4>
            <nav className="space-y-3">
              {footerLinks.support.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white text-sm font-inter tracking-wide transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-gray-400 text-sm font-inter tracking-wide">
                © 2024 NewsMe Intelligence Network. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 text-xs font-inter tracking-wide transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Phone className="w-3 h-3" />
              <span>Enterprise: +1 (555) 123-4567</span>
            </div>
          </div>

          {/* Unsubscribe Section */}
          <div className="border-t border-white/5 pt-6 text-center space-y-4">
            <p className="text-gray-500 text-sm font-inter tracking-wide">
              Current subscriber? Manage your intelligence preferences
            </p>
            <button
              onClick={handleUnsubscribe}
              className="px-6 py-2 bg-white/5 border border-white/10 text-gray-400 text-sm font-inter tracking-wide hover:border-white/20 hover:text-gray-300 hover:bg-white/10 transition-all duration-300 rounded-lg"
            >
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

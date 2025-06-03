
const Footer = () => {
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
  ];

  const handleUnsubscribe = () => {
    console.log('Unsubscribe clicked');
    // Handle unsubscribe logic here
  };

  return (
    <footer className="py-16 px-6 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-blue-950/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col space-y-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm font-instrument-serif">
              © 2024 NewsMe. All rights reserved.
            </p>

            {/* Links */}
            <nav className="flex space-x-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-electric-cyan-400 text-sm font-instrument-serif transition-colors duration-300 underline-animation"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Unsubscribe Section */}
          <div className="border-t border-white/5 pt-8 text-center space-y-4">
            <p className="text-gray-500 text-sm font-instrument-serif">
              Already a subscriber? Manage your preferences below.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="px-6 py-2 border border-gray-600 text-gray-400 text-sm font-instrument-serif hover:border-gray-400 hover:text-gray-300 transition-all duration-300 rounded-md"
            >
              Unsubscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

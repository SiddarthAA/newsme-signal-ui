
const Footer = () => {
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
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
      </div>
    </footer>
  );
};

export default Footer;

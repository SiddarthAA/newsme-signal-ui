
const Footer = () => {
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Terms', href: '#terms' },
    { name: 'Privacy', href: '#privacy' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-gray-400 text-sm font-inter">
            © 2024 NewsMe. All rights reserved.
          </p>

          {/* Links */}
          <nav className="flex space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-electric-cyan-400 text-sm font-inter transition-colors duration-300 underline-animation"
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

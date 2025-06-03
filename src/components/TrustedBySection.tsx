
const TrustedBySection = () => {
  const trustedLogos = [
    { name: 'Reuters', logo: 'R' },
    { name: 'Bloomberg', logo: 'B' },
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'BBC', logo: 'BBC' },
    { name: 'CNN', logo: 'CNN' },
    { name: 'WSJ', logo: 'WSJ' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Trusted By Text */}
        <div className="space-y-4">
          <h3 className="text-sm font-instrument-serif font-light text-gray-400 uppercase tracking-wider">
            Trusted by
          </h3>
          <p className="text-xl font-instrument-serif text-gray-300">
            Trusted by 300,000+ informed readers
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {trustedLogos.map((brand, index) => (
            <div
              key={brand.name}
              className="trusted-logo group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center h-16 w-full">
                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center group-hover:border-electric-cyan-400/50 transition-all duration-300">
                  <span className="text-white/60 font-instrument-serif font-medium text-sm group-hover:text-electric-cyan-400">
                    {brand.logo}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 font-instrument-serif">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

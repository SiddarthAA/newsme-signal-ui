
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
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        {/* Trusted By Text */}
        <div className="space-y-6">
          <h3 className="text-lg font-instrument-serif font-light text-gray-400 uppercase tracking-wider">
            Trusted by
          </h3>
          <p className="text-2xl font-instrument-serif text-gray-300">
            Trusted by 300,000+ informed readers
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {trustedLogos.map((brand, index) => (
            <div
              key={brand.name}
              className="trusted-logo group cursor-pointer p-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center h-20 w-full">
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center group-hover:border-electric-cyan-400/50 transition-all duration-300">
                  <span className="text-white/60 font-instrument-serif font-medium text-lg group-hover:text-electric-cyan-400">
                    {brand.logo}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 font-instrument-serif">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

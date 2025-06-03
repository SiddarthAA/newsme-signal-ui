
const StatsSection = () => {
  const stats = [
    { number: "300K+", label: "Daily Readers", description: "Professionals trust NewsMe" },
    { number: "200+", label: "Global Sources", description: "Comprehensive coverage" },
    { number: "95%", label: "Time Saved", description: "Compared to traditional news" },
    { number: "5 min", label: "Daily Read", description: "Perfect for busy schedules" }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan-500/5 via-transparent to-space-blue-500/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-instrument-serif font-semibold text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 font-instrument-serif">
            Join the professionals who rely on NewsMe for strategic insights
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-instrument-serif font-bold text-electric-cyan-400">
                {stat.number}
              </div>
              <div className="text-lg font-instrument-serif font-semibold text-white">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400 font-instrument-serif">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

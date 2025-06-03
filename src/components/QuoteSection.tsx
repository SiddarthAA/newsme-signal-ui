
const QuoteSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-blue-950/20 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-cyan-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-space-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Main Quote */}
        <blockquote className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif font-semibold leading-tight tracking-tight text-white">
          Filter the noise.
          <br />
          <span className="text-electric-cyan-400">Focus on what matters.</span>
        </blockquote>

        {/* Caption */}
        <p className="text-lg md:text-xl text-gray-400 font-instrument-serif font-light max-w-2xl mx-auto">
          NewsMe scans headlines, filters bias, and delivers what truly matters.
        </p>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-electric-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-electric-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-electric-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

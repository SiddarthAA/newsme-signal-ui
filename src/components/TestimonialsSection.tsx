
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "NewsMe gives me everything I need to stay informed without the noise. It's become essential to my morning routine.",
      author: "Sarah Chen",
      role: "VP of Strategy, TechCorp"
    },
    {
      quote: "The bias-free analysis is what sold me. Finally, news that focuses on facts rather than drama.",
      author: "Marcus Rodriguez",
      role: "Investment Director"
    },
    {
      quote: "I save 2 hours every morning and stay better informed than when I was reading 5 different sources.",
      author: "Dr. Emily Watson",
      role: "Research Director"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-electric-cyan-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-space-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-instrument-serif font-semibold text-white">
            What Leaders Are Saying
          </h2>
          <p className="text-xl text-gray-300 font-instrument-serif font-light">
            Hear from professionals who've transformed their information workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="form-card p-8 space-y-6 hover:border-electric-cyan-400/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <blockquote className="text-lg font-instrument-serif text-gray-300 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-instrument-serif font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-electric-cyan-400 font-instrument-serif">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { Clock, Shield, Zap, Globe, Filter, Lightbulb } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "5-Minute Read",
      description: "Curated summaries that respect your time. No fluff, just essential insights."
    },
    {
      icon: Shield,
      title: "Bias-Free Analysis",
      description: "AI-powered content filtering removes political bias and emotional manipulation."
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Breaking news alerts delivered instantly when stories truly matter."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Coverage from 200+ sources worldwide, giving you the complete picture."
    },
    {
      icon: Filter,
      title: "Smart Filtering",
      description: "Advanced algorithms separate signal from noise in the information flood."
    },
    {
      icon: Lightbulb,
      title: "Actionable Insights",
      description: "Every story comes with context about why it matters to you."
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-instrument-serif font-semibold text-white">
            Intelligence, <span className="text-electric-cyan-400">Simplified</span>
          </h2>
          <p className="text-xl text-gray-300 font-instrument-serif font-light max-w-3xl mx-auto">
            NewsMe transforms information overload into strategic advantage with cutting-edge AI and human curation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="form-card p-6 space-y-4 hover:border-electric-cyan-400/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-electric-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-electric-cyan-400/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-electric-cyan-400" />
              </div>
              
              <h3 className="text-xl font-instrument-serif font-semibold text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 font-instrument-serif leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

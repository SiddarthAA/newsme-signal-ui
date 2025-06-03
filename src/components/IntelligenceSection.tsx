
import { Brain, Shield, Clock, Target } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const IntelligenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Cognitive Intelligence",
      description: "Advanced AI algorithms analyze global news patterns, extracting insights that matter to your decision-making process.",
      delay: "0s"
    },
    {
      icon: Shield,
      title: "Bias-Free Analysis",
      description: "Our proprietary filtering technology removes editorial bias, delivering objective intelligence for strategic thinking.",
      delay: "0.1s"
    },
    {
      icon: Clock,
      title: "Real-Time Processing",
      description: "Breaking developments reach you within minutes, not hours. Stay ahead of market movements and global shifts.",
      delay: "0.2s"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Personalized intelligence streams focus on sectors and regions that impact your specific professional landscape.",
      delay: "0.3s"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-cyan-950/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className={`slide-in-up ${isVisible ? 'visible' : ''} text-center space-y-6 mb-20`}>
          <h2 className="text-4xl md:text-5xl font-instrument-serif font-bold text-white tracking-wide">
            Intelligence <span className="text-electric-cyan-400">Redefined</span>
          </h2>
          <p className="text-xl text-gray-300 font-instrument-serif max-w-3xl mx-auto leading-relaxed">
            Moving beyond traditional news consumption to strategic intelligence gathering. 
            Every piece of information is processed, analyzed, and contextualized for maximum impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`slide-in-up ${isVisible ? 'visible' : ''} glass-card p-8 space-y-6 hover:border-electric-cyan-400/20 transition-all duration-500`}
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan-400/20 to-electric-cyan-600/20 rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-electric-cyan-400" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-instrument-serif font-semibold text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;

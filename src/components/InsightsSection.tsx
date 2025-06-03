
import { TrendingUp, BarChart3, Globe2, Lightbulb } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const InsightsSection = () => {
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

  const insights = [
    {
      category: "Market Intelligence",
      title: "Global Supply Chain Disruptions Reshape Q4 Forecasts",
      summary: "Emerging patterns in Asian manufacturing suggest strategic pivots for technology sector leaders.",
      impact: "High",
      timeframe: "2 hours ago"
    },
    {
      category: "Geopolitical Analysis",
      title: "Energy Sector Realignments Drive Policy Innovations",
      summary: "New regulatory frameworks emerging across three continents present both challenges and opportunities.",
      impact: "Medium",
      timeframe: "4 hours ago"
    },
    {
      category: "Technology Trends",
      title: "AI Infrastructure Investments Signal Market Maturation",
      summary: "Enterprise adoption patterns reveal strategic positioning opportunities for forward-thinking organizations.",
      impact: "High",
      timeframe: "6 hours ago"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-space-blue-950/10 via-transparent to-electric-cyan-950/10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className={`slide-in-left ${isVisible ? 'visible' : ''} text-center space-y-6 mb-20`}>
          <h2 className="text-4xl md:text-5xl font-instrument-serif font-bold text-white tracking-wide">
            Today's <span className="text-electric-cyan-400">Strategic Insights</span>
          </h2>
          <p className="text-xl text-gray-300 font-instrument-serif max-w-3xl mx-auto leading-relaxed">
            Preview the caliber of intelligence delivered to your inbox. 
            Each insight is crafted for leaders who need to understand implications, not just events.
          </p>
        </div>

        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div
              key={insight.title}
              className={`slide-in-right ${isVisible ? 'visible' : ''} glass-card p-8 hover:border-electric-cyan-400/20 transition-all duration-500`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-electric-cyan-400/10 text-electric-cyan-400 text-xs font-inter font-medium tracking-wide rounded-full">
                      {insight.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-inter font-medium tracking-wide rounded ${
                      insight.impact === 'High' 
                        ? 'bg-red-500/10 text-red-400' 
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-instrument-serif font-semibold text-white tracking-wide">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-400 font-inter leading-relaxed">
                    {insight.summary}
                  </p>
                </div>
                
                <div className="lg:ml-8 flex items-center space-x-4 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-inter tracking-wide">{insight.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`slide-in-up ${isVisible ? 'visible' : ''} text-center mt-12`} style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 font-inter text-sm tracking-wide">
            This represents just 3 of the 15-20 strategic insights you receive daily with NewsMe
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

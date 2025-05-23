
import React from 'react';
import { HandHeart, Magnet, Clock } from 'lucide-react';

const ContentSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Tu Asistente Secreto",
      description: "SOKO no es solo un chat, es una inteligencia que aprende de ti.",
      icon: HandHeart
    },
    {
      id: 2,
      title: "Ahorro al Alcance de tu Chat",
      description: "SOKO busca las mejores ofertas.",
      icon: Magnet
    },
    {
      id: 3,
      title: "Conveniencia Redefinida",
      description: "Imagina no volver a pensar en el mercado. SOKO lo hace por ti.",
      icon: Clock
    }
  ];

  return (
    <section id="content" className="relative py-20 lg:py-32 geometric-pattern overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-interactive rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Una experiencia que cambia todo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SOKO no solo compra; predice, optimiza y evoluciona contigo. 
            Una experiencia tan intuitiva que olvidarás cómo era antes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift border border-gray-100"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-interactive/10 rounded-xl flex items-center justify-center group-hover:bg-accent-interactive/20 transition-colors duration-300">
                    <IconComponent 
                      size={24} 
                      className="text-accent-interactive group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-brand-primary mb-3 group-hover:text-accent-interactive transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

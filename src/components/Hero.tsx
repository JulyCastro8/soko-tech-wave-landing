
import React from 'react';
import ParticleBackground from './ParticleBackground';
import ChatSimulation from './ChatSimulation';

const Hero: React.FC = () => {
  const scrollToCTA = () => {
    const element = document.getElementById('cta-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-white overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight">
                Simplifica tu vida con{' '}
                <span className="text-accent-interactive">SOKO</span>
              </h1>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Tu asistente inteligente que revoluciona la forma de hacer compras. 
                  Con solo un mensaje, SOKO se encarga de todo.
                </p>
                <p>
                  Olvídate de las listas interminables, las ofertas perdidas y las 
                  compras de último minuto. SOKO aprende de ti y se anticipa a tus necesidades.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={scrollToCTA}
                className="group bg-accent-interactive text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glow"
              >
                Únete a la lista de espera
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Chat Simulation */}
          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <ChatSimulation />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

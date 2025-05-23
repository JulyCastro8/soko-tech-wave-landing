
import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      traditional: "Navegación manual",
      soko: "Automatización total"
    },
    {
      traditional: "Búsqueda activa de ofertas",
      soko: "Ofertas proactivas"
    },
    {
      traditional: "Múltiples apps",
      soko: "Un solo chat"
    },
    {
      traditional: "Sin personalización real",
      soko: "Personalización inteligente"
    }
  ];

  return (
    <section id="comparison" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-animated opacity-90"></div>
      
      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow">
            SOKO vs. Apps Tradicionales
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Descubre por qué miles de usuarios están eligiendo una forma completamente nueva 
            de hacer sus compras.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Apps Tradicionales Column */}
            <div className="p-8 bg-gray-50/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-600 mb-2">Apps Tradicionales</h3>
                <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto">
                  <X size={24} className="text-white" />
                </div>
              </div>
              
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <X size={20} className="text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{item.traditional}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SOKO Column */}
            <div className="p-8 bg-gradient-to-br from-accent-interactive/5 to-brand-primary/5">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-accent-interactive mb-2">SOKO</h3>
                <div className="w-12 h-12 bg-accent-interactive rounded-full flex items-center justify-center mx-auto">
                  <Check size={24} className="text-white" />
                </div>
              </div>
              
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent-interactive">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-brand-primary font-medium">{item.soko}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 bg-gradient-to-r from-accent-interactive to-brand-primary text-center">
            <p className="text-white text-lg mb-4">
              ¿Listo para experimentar la diferencia?
            </p>
            <button className="bg-white text-accent-interactive px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Prueba SOKO gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

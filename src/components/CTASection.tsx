
import React from 'react';
import { Rocket } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="cta-section" className="py-20 lg:py-32 bg-gradient-to-r from-accent-interactive to-brand-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Rocket size={40} className="text-white" />
          </div>
        </div>

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow">
          Únete a la Revolución
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Sé uno de los primeros en transformar tus compras. La lista de espera te da acceso prioritario 
          a una experiencia que cambiará tu forma de vivir.
        </p>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Acceso Prioritario</h3>
            <p className="text-white/80 text-sm">Sé de los primeros en probar SOKO</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Sin Compromiso</h3>
            <p className="text-white/80 text-sm">Únete gratis, cancela cuando quieras</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-2">Ofertas Exclusivas</h3>
            <p className="text-white/80 text-sm">Descuentos especiales para miembros</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <button className="group bg-white text-accent-interactive px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-gray-50">
            Quiero mi Acceso Anticipado
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">
              🚀
            </span>
          </button>
          
          <p className="text-white/70 text-sm">
            No spam. Solo actualizaciones importantes sobre tu acceso.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
            <span>✓ 100% Gratuito</span>
            <span>✓ Sin tarjeta de crédito</span>
            <span>✓ Acceso inmediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

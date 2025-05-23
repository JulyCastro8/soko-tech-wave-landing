
import React, { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const counterRef = useRef<HTMLSpanElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "Desde que descubrí SOKO, mis idas al supermercado se han transformado por completo. Antes, era una tarea tediosa que consumía horas; ahora, con solo un par de mensajes, tengo todo lo que necesito en mi puerta. La precisión con la que entienden mis preferencias y la calidad de los productos que seleccionan es asombrosa. ¡Realmente me han devuelto tiempo para lo que importa!",
      author: "Ana María Rodríguez",
      profession: "Ingeniera civil",
      rating: 5
    },
    {
      id: 2,
      text: "Como emprendedor, cada minuto cuenta. SOKO se ha convertido en mi asistente personal para las compras del hogar. No solo me ahorran un tiempo invaluable, sino que su sistema de ofertas proactivas me ha permitido optimizar mi presupuesto de una manera que jamás pensé posible. La interfaz de chat es intuitiva y la personalización es su mayor fortaleza. Sencillamente indispensable.",
      author: "Carlos Bernal",
      profession: "Profesor Universitario",
      rating: 5
    },
    {
      id: 3,
      text: "Al principio, era escéptica sobre la idea de que una IA gestionara mis compras, pero SOKO superó todas mis expectativas. La conveniencia de simplemente chatear lo que necesito y que me lleguen los productos frescos y de calidad es un cambio de juego. Además, la forma en que se anticipan a mis necesidades y sugieren productos es sorprendente. Es como tener un amigo experto en compras.",
      author: "Sofía Vargas",
      profession: "Nutricionista",
      rating: 5
    }
  ];

  useEffect(() => {
    const animateCounter = () => {
      const counter = counterRef.current;
      if (!counter) return;

      const targetNumber = 1234;
      const duration = 2000;
      const startTime = Date.now();

      const updateCounter = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentNumber = Math.floor(progress * targetNumber);
        counter.textContent = currentNumber.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Testimonios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre lo que dicen quienes ya han transformado su forma de hacer compras
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="mb-6">
                <Quote size={40} className="text-accent-interactive/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold text-brand-primary mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.profession}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-4">
            Miles de hogares ya se preparan para el futuro
          </h3>
          
          <div className="mb-6">
            <span 
              ref={counterRef}
              className="text-5xl lg:text-6xl font-bold text-accent-interactive glow"
            >
              0
            </span>
            <p className="text-lg text-gray-600 mt-2">
              personas en la lista de espera
            </p>
          </div>
          
          <p className="text-gray-600 mb-8">
            La lista de espera crece cada día. No te quedes atrás.
          </p>
          
          <button className="bg-accent-interactive text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Únete ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

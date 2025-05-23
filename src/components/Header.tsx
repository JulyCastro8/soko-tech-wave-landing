
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-brand-primary font-headings">
                SOKO
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-brand-primary hover:text-accent-interactive transition-colors duration-300"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('content')}
                className="text-brand-primary hover:text-accent-interactive transition-colors duration-300"
              >
                Características
              </button>
              <button 
                onClick={() => scrollToSection('comparison')}
                className="text-brand-primary hover:text-accent-interactive transition-colors duration-300"
              >
                Ventajas
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-brand-primary hover:text-accent-interactive transition-colors duration-300"
              >
                Testimonios
              </button>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-brand-primary hover:text-accent-interactive transition-all duration-300 px-4 py-2">
                Iniciar Sesión
              </button>
              <button className="bg-accent-interactive text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 hover-lift">
                Suscribirse
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-primary hover:text-accent-interactive transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-100 px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-brand-primary hover:text-accent-interactive transition-colors duration-300 py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('content')}
              className="block w-full text-left text-brand-primary hover:text-accent-interactive transition-colors duration-300 py-2"
            >
              Características
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="block w-full text-left text-brand-primary hover:text-accent-interactive transition-colors duration-300 py-2"
            >
              Ventajas
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-brand-primary hover:text-accent-interactive transition-colors duration-300 py-2"
            >
              Testimonios
            </button>
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="block w-full text-left text-brand-primary hover:text-accent-interactive transition-colors duration-300 py-2">
                Iniciar Sesión
              </button>
              <button className="bg-accent-interactive text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white py-16 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007BFF' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">SOKO</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              La plataforma que está revolucionando la forma de hacer compras. 
              Simplifica tu vida con inteligencia artificial.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-accent-interactive hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-brand-primary mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "#hero" },
                { name: "Características", href: "#content" },
                { name: "Ventajas", href: "#comparison" },
                { name: "Testimonios", href: "#testimonials" }
              ].map(({ name, href }) => (
                <li key={name}>
                  <a 
                    href={href} 
                    className="text-gray-600 hover:text-accent-interactive transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-brand-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: "Política de Privacidad", href: "#" },
                { name: "Términos de Servicio", href: "#" },
                { name: "Condiciones de Uso", href: "#" },
                { name: "Soporte", href: "#" }
              ].map(({ name, href }) => (
                <li key={name}>
                  <a 
                    href={href} 
                    className="text-gray-600 hover:text-accent-interactive transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-1">Un producto de Helix Software.</p>
              <p className="text-sm text-gray-500">
                © 2025 Helix Software. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Hecho con ❤️ en Colombia</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">Versión 1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

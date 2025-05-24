import React from 'react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
  animatedElements: string[];
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, animatedElements }) => {
  return (
    <footer className="bg-[#36454F] text-[#FFFDD0] py-12 border-t border-[#FFFDD0]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="scroll-animate" data-id="footer-about">
            <h3
              className={`font-serif text-2xl font-bold mb-4 transition-all duration-1000 ${
                animatedElements.includes('footer-about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              SAVEUR
            </h3>
            <p
              className={`font-sans text-sm mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('footer-about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Elevating dining to an art form since 2010. Experience the perfect harmony of flavor, service, and ambiance.
            </p>
            <div
              className={`flex space-x-4 transition-all duration-1000 delay-500 ${
                animatedElements.includes('footer-about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href="#"
                className="text-[#FFFDD0] hover:text-[#FFD700] transition-colors cursor-pointer transform hover:scale-125 transition-transform duration-300"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="#"
                className="text-[#FFFDD0] hover:text-[#FFD700] transition-colors cursor-pointer transform hover:scale-125 transition-transform duration-300"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="text-[#FFFDD0] hover:text-[#FFD700] transition-colors cursor-pointer transform hover:scale-125 transition-transform duration-300"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="text-[#FFFDD0] hover:text-[#FFD700] transition-colors cursor-pointer transform hover:scale-125 transition-transform duration-300"
              >
                <i className="fab fa-pinterest text-lg"></i>
              </a>
            </div>
          </div>
          <div className="scroll-animate" data-id="footer-links">
            <h4
              className={`font-serif text-lg font-bold mb-4 transition-all duration-1000 ${
                animatedElements.includes('footer-links') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Quick Links
            </h4>
            <ul
              className={`space-y-2 transition-all duration-1000 delay-300 ${
                animatedElements.includes('footer-links') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {['home', 'menu', 'gallery', 'about', 'contact'].map((item, index) => (
                <li key={item} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="font-sans text-sm text-[#FFFDD0] hover:text-[#FFD700] transition-all duration-300 cursor-pointer rounded-button whitespace-nowrap hover:translate-x-2"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="scroll-animate" data-id="footer-policies">
            <h4
              className={`font-serif text-lg font-bold mb-4 transition-all duration-1000 ${
                animatedElements.includes('footer-policies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Policies
            </h4>
            <ul
              className={`space-y-2 transition-all duration-1000 delay-300 ${
                animatedElements.includes('footer-policies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {['Privacy Policy', 'Terms of Service', 'Reservation Policy', 'Cancellation Policy', 'Careers'].map(
                (item, index) => (
                  <li key={item} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                    <a
                      href="#"
                      className="font-sans text-sm text-[#FFFDD0] hover:text-[#FFD700] transition-all duration-300 cursor-pointer hover:translate-x-2 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="scroll-animate" data-id="footer-newsletter">
            <h4
              className={`font-serif text-lg font-bold mb-4 transition-all duration-1000 ${
                animatedElements.includes('footer-newsletter') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Newsletter
            </h4>
            <p
              className={`font-sans text-sm mb-4 transition-all duration-1000 delay-300 ${
                animatedElements.includes('footer-newsletter') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Subscribe to receive updates on special events, seasonal menus, and exclusive offers.
            </p>
            <div
              className={`flex transition-all duration-1000 delay-500 ${
                animatedElements.includes('footer-newsletter') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#FFFDD0]/10 border border-[#FFFDD0]/20 text-[#FFFDD0] placeholder-[#FFFDD0]/50 rounded-l-md focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] px-4 py-2 font-sans transition-all duration-300"
              />
              <button
                className="bg-[#FFD700] text-[#36454F] hover:bg-[#E6C200] rounded-r-md font-sans text-sm uppercase tracking-wider px-4 py-2 rounded-button whitespace-nowrap transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </div>
            <div
              className={`mt-6 transition-all duration-1000 delay-700 ${
                animatedElements.includes('footer-newsletter') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="font-serif text-lg font-bold mb-4">Payment Methods</h4>
              <div className="flex space-x-3">
                <i className="fab fa-cc-visa text-2xl hover:text-[#FFD700] transition-colors duration-300"></i>
                <i className="fab fa-cc-mastercard text-2xl hover:text-[#FFD700] transition-colors duration-300"></i>
                <i className="fab fa-cc-amex text-2xl hover:text-[#FFD700] transition-colors duration-300"></i>
                <i className="fab fa-cc-discover text-2xl hover:text-[#FFD700] transition-colors duration-300"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#FFFDD0]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans text-sm text-[#FFFDD0]/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Saveur Restaurant. All rights reserved.
          </p>
          <button
            onClick={() => scrollToSection('home')}
            className="bg-[#FFD700] text-[#36454F] hover:bg-[#E6C200] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer rounded-button whitespace-nowrap transition-all duration-300 hover:scale-110"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
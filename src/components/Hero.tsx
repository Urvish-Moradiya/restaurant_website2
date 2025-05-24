import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20restaurant%20interior%20with%20soft%20ambient%20lighting%2C%20luxurious%20decor%2C%20beautiful%20table%20settings%20with%20white%20tablecloths%2C%20crystal%20glassware%2C%20and%20warm%20inviting%20atmosphere%2C%20perfect%20for%20fine%20dining%20experience%2C%20with%20dark%20gradient%20on%20left%20side%20for%20text%20overlay&width=1440&height=800&seq=25&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#36454F] to-transparent opacity-90"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFDD0] mb-6 leading-tight animate-fade-in">
            Culinary Excellence in Every Detail
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#FFFDD0] mb-8 leading-relaxed animate-fade-in-delay">
            Experience the art of fine dining where passion meets precision. Our award-winning chefs craft unforgettable culinary journeys using the finest seasonal ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button
              className="bg-[#800020] text-[#FFFDD0] hover:bg-[#600018] font-sans text-sm uppercase tracking-wider px-8 py-6 !rounded-button whitespace-nowrap transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('menu')}
            >
              Explore Menu
            </button>
            <button
              className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#36454F] font-sans text-sm uppercase tracking-wider px-8 py-6 !rounded-button whitespace-nowrap transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Make Reservation
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('menu')}
          className="text-[#FFFDD0] cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
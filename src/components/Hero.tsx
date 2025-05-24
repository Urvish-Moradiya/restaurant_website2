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
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2930] to-transparent opacity-90"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2F2F2] mb-6 leading-tight animate-fade-in">
            Culinary <span className="text-[#C8A97E]">Excellence</span> in Every Detail
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#F2F2F2] mb-8 leading-relaxed animate-fade-in-delay">
            Experience the art of fine dining where passion meets precision. Our award-winning chefs craft unforgettable culinary journeys using the finest seasonal ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button
              className="bg-[#C8A97E] text-[#1A2930] hover:bg-[#B69268] font-sans text-sm uppercase tracking-wider px-8 py-4 rounded-md whitespace-nowrap transition-all duration-300 hover:shadow-lg"
              onClick={() => scrollToSection('menu')}
            >
              Explore Menu
            </button>
            <button
              className="bg-transparent border-2 border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#1A2930] font-sans text-sm uppercase tracking-wider px-8 py-4 rounded-md whitespace-nowrap transition-all duration-300 hover:shadow-lg"
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
          className="text-[#C8A97E] cursor-pointer p-2 rounded-full bg-[#1A2930]/30 hover:bg-[#1A2930]/60 transition-all duration-300"
          aria-label="Scroll to menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
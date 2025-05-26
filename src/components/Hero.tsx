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
        backgroundImage: `url('https://images.unsplash.com/photo-1729394405518-eaf2a0203aa7')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 " style={{ zIndex: 1 }}></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2F2F2] mb-6 leading-tight animate-fade-in">
            Culinary <span className="text-[#C8A97E]">Excellence</span> in Every Detail
          </h1>
          <p className="font-sans text-lg md:text-xl text-white mb-8 leading-relaxed animate-fade-in-delay shadow-lg">
            Experience the art of fine dining where passion meets precision. Our award-winning chefs craft unforgettable culinary journeys using the finest seasonal ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button
              style={{
                backgroundColor: '#1A2930',
                color: '#C8A97E',
              }}
              className="font-sans text-sm uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg"
              onClick={() => scrollToSection('menu')}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#C8A97E';
                (e.target as HTMLButtonElement).style.color = '#1A2930';
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#1A2930';
                (e.target as HTMLButtonElement).style.color = '#C8A97E';
              }}
            >
              Explore Menu
            </button>
            <button
              style={{
                backgroundColor: '#1A2930',
                color: '#C8A97E',
              }}
              className="font-sans text-sm uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg"
              onClick={() => scrollToSection('contact')}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#C8A97E';
                (e.target as HTMLButtonElement).style.color = '#1A2930';
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#1A2930';
                (e.target as HTMLButtonElement).style.color = '#C8A97E';
              }}
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
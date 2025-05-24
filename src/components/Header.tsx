import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#1A2930] shadow-lg py-2' : 'bg-transparent backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1
            className={`font-serif text-2xl font-bold ${
              isScrolled ? 'text-[#F2F2F2]' : 'text-white'
            } transition-all duration-300`}
          >
            <span className="text-[#C8A97E]">S</span>AVEUR
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'menu', 'gallery', 'about', 'awards', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`font-sans text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                activeSection === item
                  ? isScrolled
                    ? 'text-[#C8A97E] border-b-2 border-[#C8A97E]'
                    : 'text-[#C8A97E] border-b-2 border-[#C8A97E]'
                  : isScrolled
                  ? 'text-[#F2F2F2] hover:text-[#C8A97E]'
                  : 'text-white hover:text-[#C8A97E]'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            className="bg-[#C8A97E] text-[#1A2930] hover:bg-[#B69268] font-sans text-sm uppercase tracking-wider px-6 py-2 rounded-md whitespace-nowrap transition-all duration-300 hover:shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Reservations
          </button>
        </nav>
        <button
          className="md:hidden text-[#F2F2F2] cursor-pointer p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden bg-[#1A2930] shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center py-4">
          {['home', 'menu', 'gallery', 'about', 'awards', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
              className={`font-sans text-sm uppercase tracking-wider py-3 w-full text-center ${
                activeSection === item
                  ? 'text-[#C8A97E] border-l-4 border-[#C8A97E] bg-[#23353E]'
                  : 'text-[#F2F2F2] hover:text-[#C8A97E] hover:bg-[#23353E]'
              } transition-all duration-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            className="bg-white text-[#1A2930] hover:bg-[#B69268] font-sans text-sm uppercase tracking-wider px-6 py-3 mt-4 rounded-md w-4/5 transition-all duration-300 hover:shadow-lg"
            onClick={() => {
              scrollToSection('contact');
              setIsMenuOpen(false);
            }}
          >
            Reservations
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
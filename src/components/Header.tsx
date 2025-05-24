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
        isScrolled ? 'bg-[#7C9082] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1
            className={`font-serif text-2xl font-bold ${
              isScrolled ? 'text-[#F5F1E6]' : 'text-[#F5F1E6]'
            } transition-all duration-300`}
          >
            SAVEUR
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'menu', 'gallery', 'about', 'awards', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`font-sans text-sm uppercase tracking-wider cursor-pointer rounded-button whitespace-nowrap transition-all duration-300 ${
                activeSection === item
                  ? isScrolled
                    ? 'text-[#8B6F47] border-b-2 border-[#8B6F47]'
                    : 'text-[#8B6F47] border-b-2 border-[#8B6F47]'
                  : isScrolled
                  ? 'text-[#F5F1E6] hover:text-[#8B6F47]'
                  : 'text-[#F5F1E6] hover:text-[#8B6F47]'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            className="bg-[#8B6F47] text-[#F5F1E6] hover:bg-[#7A614D] font-sans text-sm uppercase tracking-wider px-6 py-2 rounded-button whitespace-nowrap transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Reservations
          </button>
        </nav>
        <button
          className="md:hidden text-[#F5F1E6] cursor-pointer rounded-button whitespace-nowrap"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i
            className={`fas ${
              isMenuOpen ? 'fa-times' : 'fa-bars'
            } text-2xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
          ></i>
        </button>
      </div>
      <div
        className={`md:hidden bg-[#7C9082] shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center py-4">
          {['home', 'menu', 'gallery', 'about', 'awards', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`font-sans text-sm uppercase tracking-wider py-2 w-full text-center ${
                activeSection === item
                  ? 'text-[#8B6F47] border-b-2 border-[#8B6F47]'
                  : 'text-[#F5F1E6] hover:text-[#8B6F47]'
              } transition-all duration-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            className="bg-[#8B6F47] text-[#F5F1E6] hover:bg-[#7A614D] font-sans text-sm uppercase tracking-wider px-6 py-2 mt-4 rounded-button whitespace-nowrap transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Reservations
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
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
  // Define colors as variables for consistency
  const darkTeal = "rgb(26, 41, 48)"; // #1A2930
  const goldLight = "rgb(200, 169, 126)"; // #C8A97E
  const goldDark = "rgb(182, 146, 104)"; // #B69268
  const white = "rgb(242, 242, 242)"; // #F2F2F2
  const darkTealHighlight = "rgb(35, 53, 62)"; // #23353E

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
      style={{ backgroundColor: isScrolled ? darkTeal : 'transparent' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1
            className="font-serif text-2xl font-bold transition-all duration-300"
            style={{ color: white }}
          >
            <span style={{ color: goldLight }}>S</span>AVEUR
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'menu', 'gallery', 'about', 'awards', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`font-sans text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                activeSection === item ? 'border-b-2' : ''
              }`}
              style={{
                color: activeSection === item ? goldLight : isScrolled ? white : white,
                borderColor: activeSection === item ? goldLight : 'transparent'
              }}
              onMouseOver={(e) => {
                if (activeSection !== item) {
                  e.currentTarget.style.color = goldLight;
                }
              }}
              onMouseOut={(e) => {
                if (activeSection !== item) {
                  e.currentTarget.style.color = isScrolled ? white : white;
                }
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            className="font-sans text-sm uppercase tracking-wider px-6 py-2 rounded-md whitespace-nowrap transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: goldLight, color: darkTeal }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = goldDark;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = goldLight;
            }}
            onClick={() => scrollToSection('contact')}
          >
            Reservations
          </button>
        </nav>
        <button
          className="md:hidden cursor-pointer p-2"
          style={{ color: white }}
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
        className={`md:hidden shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: darkTeal }}
      >
        <nav className="flex flex-col items-center py-4">
          {['home', 'menu', 'gallery', 'about', 'awards', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
              className={`font-sans text-sm uppercase tracking-wider py-3 w-full text-center transition-all duration-300 ${
                activeSection === item ? 'border-l-4' : ''
              }`}
              style={{
                color: activeSection === item ? goldLight : white,
                borderColor: activeSection === item ? goldLight : 'transparent',
                backgroundColor: activeSection === item ? darkTealHighlight : 'transparent'
              }}
              onMouseOver={(e) => {
                if (activeSection !== item) {
                  e.currentTarget.style.color = goldLight;
                  e.currentTarget.style.backgroundColor = darkTealHighlight;
                }
              }}
              onMouseOut={(e) => {
                if (activeSection !== item) {
                  e.currentTarget.style.color = white;
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            className="font-sans text-sm uppercase tracking-wider px-6 py-3 mt-4 rounded-md w-4/5 transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: 'white', color: darkTeal }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = goldDark;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
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
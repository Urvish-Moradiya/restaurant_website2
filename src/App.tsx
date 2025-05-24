import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      const sections = ['home', 'menu', 'gallery', 'about', 'awards', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || entry.target.getAttribute('data-id');
            if (id && !animatedElements.includes(id)) {
              setAnimatedElements((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    const elementsToObserve = document.querySelectorAll('.scroll-animate');
    elementsToObserve.forEach((el) => observerRef.current?.observe(el));
    return () => {
      if (observerRef.current) {
        elementsToObserve.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, [animatedElements]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E6] text-[#7C9082] overflow-x-hidden">
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Menu animatedElements={animatedElements} />
      <Gallery animatedElements={animatedElements} />
      <About animatedElements={animatedElements} />
      <Awards animatedElements={animatedElements} />
      <Contact animatedElements={animatedElements} />
      <Footer scrollToSection={scrollToSection} animatedElements={animatedElements} />
    </div>
  );
};

export default App;
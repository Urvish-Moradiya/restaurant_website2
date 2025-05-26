import React, { useState } from 'react';
import { galleryImages } from '../data/galleryImages';

interface GalleryProps {
  animatedElements: string[];
}

const Gallery: React.FC<GalleryProps> = ({ animatedElements }) => {
  const [activeTab, setActiveTab] = useState('food'); // Default to 'food' instead of 'all'

  return (
    <section id="gallery" className="py-20 bg-[#1A2930]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate" data-id="gallery-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-4 transition-all duration-1000 ${
              animatedElements.includes('gallery-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-[#C8A97E]">Gallery</span>
          </h2>
          <div
            className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('gallery-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`font-sans text-lg text-[#F2F2F2] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              animatedElements.includes('gallery-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A visual journey through our culinary creations and elegant atmosphere.
          </p>
        </div>
        <div className="w-full scroll-animate" data-id="gallery-tabs">
          <div
            className={`flex flex-wrap justify-center mb-12 bg-transparent transition-all duration-1000 ${
              animatedElements.includes('gallery-tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {['food', 'interior', 'events', 'kitchen'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`font-serif text-lg px-8 py-3 transition-all duration-300 whitespace-nowrap ${
                  activeTab === category
                    ? 'text-[#C8A97E] border-b-2 border-[#C8A97E]'
                    : 'text-[#F2F2F2] hover:text-[#C8A97E]'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div>
            {['food', 'interior', 'events', 'kitchen'].map((category) => (
              <div
                key={category}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                  activeTab === category ? 'block' : 'hidden'
                }`}
              >
                {galleryImages
                  .filter((image) => image.category === category)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-md group cursor-pointer scroll-animate transition-all duration-500"
                      style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                      data-id={`gallery-${category}-${index}`}
                      onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow =
                          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow =
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={image.image}
                          alt={image.title}
                          className={`w-full h-full object-cover object-center transition-all duration-1000 ${
                            animatedElements.includes(`gallery-${category}-${index}`)
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-110'
                          }`}
                          onError={(e) => {
                            e.currentTarget.src = `https://readdy.ai/api/search-image?query=fine%20dining%20restaurant%20${index}&width=600&height=400&seq=${
                              50 + index
                            }`;
                          }}
                          style={{
                            transform: 'scale(1.01)',
                            transition: 'transform 0.5s ease-out, opacity 1s ease-out',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1.01)';
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
                          style={{ pointerEvents: 'none' }}
                        ></div>
                        <div
                          className="absolute inset-0 flex items-end p-6"
                          style={{
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0,0,0,0.2) 50%, rgba(0,0,0,0))',
                            opacity: 0,
                            transition: 'opacity 0.5s ease-out',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.opacity = '0';
                          }}
                        >
                          
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                          <h3
                            className="font-serif text-xl font-bold"
                            style={{
                              color: 'white',
                              textShadow: '0 2px 4px rgba(17, 17, 17, 0.24)',
                              opacity: '0.9',
                            }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
import React, { useState } from 'react';
import { galleryImages } from '../data/galleryImages';

interface GalleryProps {
  animatedElements: string[];
}

const Gallery: React.FC<GalleryProps> = ({ animatedElements }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="gallery" className="py-20 bg-[#36454F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate" data-id="gallery-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-[#FFFDD0] mb-4 transition-all duration-1000 ${
              animatedElements.includes('gallery-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Gallery
          </h2>
          <div
            className={`w-24 h-1 bg-[#FFD700] mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('gallery-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`font-sans text-lg text-[#FFFDD0] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              animatedElements.includes('gallery-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A visual journey through our culinary creations and elegant atmosphere.
          </p>
        </div>
        <div className="w-full scroll-animate" data-id="gallery-tabs">
          <div
            className={`flex justify-center mb-12 bg-transparent transition-all duration-1000 ${
              animatedElements.includes('gallery-tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {['all', 'food', 'interior', 'events'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`font-serif text-lg px-8 py-3 transition-all duration-300 rounded-button whitespace-nowrap ${
                  activeTab === category
                    ? 'text-[#FFD700] border-b-2 border-[#FFD700]'
                    : 'text-[#FFFDD0] hover:text-[#FFD700]'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div>
            {activeTab === 'all' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg group cursor-pointer scroll-animate"
                    data-id={`gallery-all-${index}`}
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      className={`w-full h-80 object-cover object-top transition-all duration-1000 ${
                        animatedElements.includes(`gallery-all-${index}`)
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-110'
                      } group-hover:scale-110`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#36454F] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-6">
                      <h3 className="font-serif text-xl font-bold text-[#FFFDD0] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {['food', 'interior', 'events'].map((category) => (
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
                      className="relative overflow-hidden rounded-lg group cursor-pointer scroll-animate"
                      data-id={`gallery-${category}-${index}`}
                    >
                      <img
                        src={image.image}
                        alt={image.title}
                        className={`w-full h-80 object-cover object-top transition-all duration-1000 ${
                          animatedElements.includes(`gallery-${category}-${index}`)
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-110'
                        } group-hover:scale-110`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#36454F] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-6">
                        <h3 className="font-serif text-xl font-bold text-[#FFFDD0] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                          {image.title}
                        </h3>
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
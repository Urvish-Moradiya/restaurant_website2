import React, { useState } from 'react';
import { menuItems } from '../data/menuItems';

interface MenuProps {
  animatedElements: string[];
}

const Menu: React.FC<MenuProps> = ({ animatedElements }) => {
  const [activeTab, setActiveTab] = useState('starters');

  return (
    <section id="menu" className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        {/* Special Events & Private Dining */}
        <div className="mb-20">
          <div className="text-center mb-16 scroll-animate" data-id="special-events-title">
            <h2
              className={`font-serif text-4xl md:text-5xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
                animatedElements.includes('special-events-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Special Events & <span className="text-[#C8A97E]">Private Dining</span>
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('special-events-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                animatedElements.includes('special-events-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Create unforgettable moments in our elegant private dining spaces, perfect for celebrations and corporate events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'private-dining',
                image:
                  'https://readdy.ai/api/search-image?query=Elegant%20private%20dining%20room%20with%20crystal%20chandelier%2C%20luxurious%20table%20setting%2C%20floral%20centerpieces%2C%20and%20mood%20lighting%2C%20perfect%20for%20special%20occasions%20in%20upscale%20restaurant&width=400&height=300&seq=42&orientation=landscape',
                title: 'Private Dining Room',
                description: 'Perfect for intimate gatherings of up to 20 guests. Features a private bar and dedicated service staff.',
              },
              {
                id: 'wine-cellar',
                image:
                  'https://readdy.ai/api/search-image?query=Luxurious%20wine%20cellar%20with%20wooden%20racks%2C%20vintage%20wines%2C%20intimate%20seating%20area%2C%20and%20atmospheric%20lighting%20in%20high%20end%20restaurant&width=400&height=300&seq=43&orientation=landscape',
                title: 'Wine Cellar Experience',
                description: 'An intimate space for wine tastings and private dinners for up to 12 guests, surrounded by our curated wine collection.',
              },
              {
                id: 'terrace-events',
                image:
                  'https://readdy.ai/api/search-image?query=Elegant%20outdoor%20terrace%20with%20string%20lights%2C%20comfortable%20seating%2C%20lush%20greenery%2C%20and%20city%20views%20at%20night%2C%20perfect%20for%20events%20at%20upscale%20restaurant&width=400&height=300&seq=44&orientation=landscape',
                title: 'Terrace Events',
                description: 'A stunning outdoor space for up to 40 guests, perfect for cocktail receptions and summer celebrations.',
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group scroll-animate transition-all duration-500 hover:shadow-xl"
                data-id={item.id}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      animatedElements.includes(item.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    } group-hover:scale-110`}
                  />
                </div>
                <div
                  className={`p-6 transition-all duration-1000 delay-300 ${
                    animatedElements.includes(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="font-serif text-2xl font-bold text-[#1A2930] mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-[#333333] mb-4">{item.description}</p>
                  <button
                    className="bg-[#C8A97E] text-[#1A2930] hover:bg-[#B69268] font-sans text-sm uppercase tracking-wider px-6 py-2 rounded-md whitespace-nowrap transition-all duration-300 hover:shadow-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Chef's Table Experience */}
        <div className="mb-20">
          <div className="text-center mb-16 scroll-animate" data-id="chefs-table-title">
            <h2
              className={`font-serif text-4xl md:text-5xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
                animatedElements.includes('chefs-table-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Chef's <span className="text-[#C8A97E]">Table</span> Experience
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('chefs-table-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                animatedElements.includes('chefs-table-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              An exclusive culinary journey featuring a personalized tasting menu prepared and presented by Chef Antonio Rossi.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative scroll-animate" data-id="chefs-table-image">
              <img
                src="https://readdy.ai/api/search-image?query=Elegant%20chefs%20table%20in%20upscale%20restaurant%20kitchen%20with%20chef%20preparing%20food%2C%20premium%20ingredients%2C%20and%20intimate%20lighting%2C%20showing%20exclusive%20dining%20experience&width=600&height=400&seq=45&orientation=landscape"
                alt="Chef's Table"
                className={`w-full rounded-lg shadow-xl transition-all duration-1000 ${
                  animatedElements.includes('chefs-table-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
              />
              <div
                className={`absolute -bottom-6 -right-6 bg-[#C8A97E] text-[#1A2930] p-6 rounded-lg shadow-lg transition-all duration-1000 delay-500 ${
                  animatedElements.includes('chefs-table-image') ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-20 translate-y-20'
                }`}
              >
                <p className="font-serif text-3xl font-bold">$295</p>
                <p className="font-sans text-sm">per person</p>
              </div>
            </div>
            <div className="scroll-animate" data-id="chefs-table-content">
              <h3
                className={`font-serif text-3xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
                  animatedElements.includes('chefs-table-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                A Unique Dining Experience
              </h3>
              <div
                className={`space-y-4 mb-6 transition-all duration-1000 delay-300 ${
                  animatedElements.includes('chefs-table-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {[
                  '8-course tasting menu with wine pairings',
                  'Interactive cooking demonstration',
                  'Behind-the-scenes kitchen tour',
                  'Signed menu and recipe collection',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-[#C8A97E] mt-1 mr-3" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <p className="font-sans text-[#333333]">{item}</p>
                  </div>
                ))}
              </div>
              <p
                className={`font-sans text-sm text-[#333333] mb-6 transition-all duration-1000 delay-500 ${
                  animatedElements.includes('chefs-table-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Available Thursday through Saturday evenings. Maximum 8 guests per seating. Advance reservation required.
              </p>
              <button
                className={`bg-[#C8A97E] text-[#1A2930] hover:bg-[#B69268] font-sans text-sm uppercase tracking-wider px-6 py-2 rounded-md whitespace-nowrap transition-all duration-1000 delay-700 hover:shadow-lg ${
                  animatedElements.includes('chefs-table-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Reserve Chef's Table
              </button>
            </div>
          </div>
        </div>
        {/* Gift Cards & Experiences */}
        <div className="mb-20">
          <div className="text-center mb-16 scroll-animate" data-id="gift-cards-title">
            <h2
              className={`font-serif text-4xl md:text-5xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
                animatedElements.includes('gift-cards-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Gift Cards & <span className="text-[#C8A97E]">Experiences</span>
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('gift-cards-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                animatedElements.includes('gift-cards-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Share the gift of exceptional dining with your loved ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'gift-card',
                icon: 'gift',
                title: 'Digital Gift Card',
                description: 'Send instantly via email. Perfect for last-minute gifts.',
                buttonText: 'Purchase Now',
              },
              {
                id: 'tasting-experience',
                icon: 'glass-cheers',
                title: 'Tasting Experience',
                description: '5-course tasting menu with wine pairings for two.',
                buttonText: 'Learn More',
              },
              {
                id: 'cooking-class',
                icon: 'utensils',
                title: 'Cooking Class',
                description: 'Interactive cooking class with Chef Antonio Rossi.',
                buttonText: 'Book Class',
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-8 text-center scroll-animate transition-all duration-500 hover:shadow-xl"
                data-id={item.id}
              >
                <div
                  className={`w-20 h-20 bg-[#1A2930] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-1000 ${
                    animatedElements.includes(item.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                >
                  {item.icon === 'gift' && (
                    <svg className="w-10 h-10 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17a3 3 0 015-2.236zM10 7a1 1 0 100-2 1 1 0 000 2zm-5 1v9h10V8h-1.84A2.996 2.996 0 0110 9a2.996 2.996 0 01-3.16-1H5z" clipRule="evenodd" />
                    </svg>
                  )}
                  {item.icon === 'glass-cheers' && (
                    <svg className="w-10 h-10 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                  )}
                  {item.icon === 'utensils' && (
                    <svg className="w-10 h-10 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h3
                  className={`font-serif text-2xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 delay-300 ${
                    animatedElements.includes(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-sans text-sm text-[#333333] mb-6 transition-all duration-1000 delay-500 ${
                    animatedElements.includes(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {item.description}
                </p>
                <button
                                   className={`bg-[#C8A97E] text-[#1A2930] hover:bg-[#B69268] font-sans text-sm uppercase tracking-wider px-6 py-2 rounded-md whitespace-nowrap transition-all duration-1000 delay-700 hover:shadow-lg ${
                    animatedElements.includes(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Culinary Masterpieces */}
        <div className="text-center mb-16 scroll-animate" data-id="menu-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
              animatedElements.includes('menu-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Culinary <span className="text-[#C8A97E]">Masterpieces</span>
          </h2>
          <div
            className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('menu-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              animatedElements.includes('menu-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our menu celebrates the finest seasonal ingredients, transformed into extraordinary dishes that delight all the senses.
          </p>
        </div>
        {/* Menu Tabs */}
        <div className="w-full scroll-animate" data-id="menu-tabs">
          <div
            className={`flex flex-wrap justify-center mb-12 bg-transparent border-b border-[#1A2930]/20 transition-all duration-1000 ${
              animatedElements.includes('menu-tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {menuItems.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveTab(category.category)}
                className={`font-serif text-lg px-8 py-3 transition-all duration-300 whitespace-nowrap ${
                  activeTab === category.category
                    ? 'text-[#C8A97E] border-b-2 border-[#C8A97E]'
                    : 'text-[#1A2930] hover:text-[#C8A97E]'
                }`}
              >
                {category.category.charAt(0).toUpperCase() + category.category.slice(1)}
              </button>
            ))}
          </div>
          <div>
            {menuItems.map((category) => (
              <div
                key={category.category}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                  activeTab === category.category ? 'block' : 'hidden'
                }`}
              >
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 bg-white scroll-animate"
                    data-id={`${category.category}-item-${index}`}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-full object-cover object-top transition-all duration-1000 hover:scale-110 ${
                          animatedElements.includes(`${category.category}-item-${index}`)
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-110'
                        }`}
                      />
                    </div>
                    <div
                      className={`p-6 transition-all duration-1000 delay-300 ${
                        animatedElements.includes(`${category.category}-item-${index}`)
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-serif text-xl font-bold text-[#1A2930]">{item.name}</h3>
                        <span className="font-serif text-xl text-[#C8A97E]">{item.price}</span>
                      </div>
                      <p className="font-sans text-sm text-[#333333] mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.dietary.includes('vegetarian') && (
                          <span className="bg-[#E8F5E9] text-[#2E7D32] text-xs px-2 py-1 rounded-full">Vegetarian</span>
                        )}
                        {item.dietary.includes('vegan') && (
                          <span className="bg-[#E8F5E9] text-[#2E7D32] text-xs px-2 py-1 rounded-full">Vegan</span>
                        )}
                        {item.dietary.includes('gluten-free') && (
                          <span className="bg-[#FFF8E1] text-[#F9A825] text-xs px-2 py-1 rounded-full">Gluten-Free</span>
                        )}
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

export default Menu;
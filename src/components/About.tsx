import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { testimonials } from '../data/testimonials';
import { teamMembers } from '../data/teamMembers';

interface AboutProps {
  animatedElements: string[];
}

const colors = {
  darkTeal: 'rgb(26, 41, 48)', // #1A2930
  goldLight: 'rgb(200, 169, 126)', // #C8A97E
  goldDark: 'rgb(182, 146, 104)', // #B69268
  darkText: 'rgb(51, 51, 51)', // #333333
  lightBg: 'rgb(247, 247, 247)', // #F7F7F7
  white: 'rgb(255, 255, 255)', // #FFFFFF
  vegBg: 'rgb(232, 245, 233)', // #E8F5E9
  vegText: 'rgb(46, 125, 50)', // #2E7D32
  gfBg: 'rgb(255, 248, 225)', // #FFF8E1
  gfText: 'rgb(249, 168, 37)', // #F9A825
};

const About: React.FC<AboutProps> = ({ animatedElements }) => {
  return (
    <section id="about" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate" data-id="about-content">
            <h2
              className={`font-serif text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ color: colors.darkTeal }}
            >
              Our <span style={{ color: colors.goldLight }}>Story</span>
            </h2>
            <div
              className={`w-24 h-1 mb-6 transition-all duration-1000 delay-300 ${animatedElements.includes('about-content') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              style={{ backgroundColor: colors.goldLight }}
            ></div>
            <p
              className={`font-sans text-lg mb-6 leading-relaxed transition-all duration-1000 delay-500 ${animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ color: colors.darkText }}
            >
              Founded in 2010, Saveur began as a passion project between longtime friends and culinary visionaries, Chef Antonio Rossi and restaurateur Elizabeth Morgan. Their shared dream was to create a dining destination that would elevate traditional techniques with modern innovation while maintaining an unwavering commitment to exceptional ingredients.
            </p>
            <p
              className={`font-sans text-lg mb-6 leading-relaxed transition-all duration-1000 delay-700 ${animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ color: colors.darkText }}
            >
              Over the years, Saveur has evolved into one of the city's most celebrated culinary landmarks, earning accolades for both its inspired cuisine and warm, sophisticated atmosphere. Our philosophy remains unchanged: to create memorable dining experiences through thoughtful hospitality and dishes that tell a story.
            </p>
            <p
              className={`font-sans text-lg mb-8 leading-relaxed transition-all duration-1000 delay-900 ${animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ color: colors.darkText }}
            >
              Today, we continue to honor the traditions that built our reputation while constantly seeking new ways to surprise and delight our guests. Every dish that leaves our kitchen reflects our dedication to culinary excellence and our respect for the ingredients that make it possible.
            </p>
          </div>
          <div className="relative scroll-animate" data-id="about-image">
            <div
              className="w-full h-0 pb-[110%] relative overflow-hidden rounded-md shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1712314947774-9d4d9c4e9a80"
                alt="Restaurant interior"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${animatedElements.includes('about-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}
                onError={(e) => {
                  e.currentTarget.src = "https://readdy.ai/api/search-image?query=elegant%20restaurant%20interior%20with%20ambient%20lighting%20and%20sophisticated%20decor&width=800&height=600&seq=1&orientation=landscape";
                }}
              />
            </div>
            <div
              className={`absolute -bottom-6 -left-6 p-6 rounded-md shadow-lg transition-all duration-1000 delay-500 ${animatedElements.includes('about-image') ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-20 translate-y-20'
                }`}
              style={{ backgroundColor: colors.darkTeal, color: "#F2F2F2" }}
            >
              <p className="font-serif text-xl italic">"Cuisine is the art of transforming ingredients into emotions."</p>
              <p className="font-sans text-sm mt-2" style={{ color: colors.goldLight }}>— Chef Antonio Rossi</p>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-10 scroll-animate" data-id="team-title">
            <h2
              className={`font-serif text-4xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${animatedElements.includes('team-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              Meet Our <span className="text-[#C8A97E]">Team</span>
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${animatedElements.includes('team-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${animatedElements.includes('team-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              The passionate professionals behind every exceptional dining experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-lg overflow-hidden group scroll-animate hover:shadow-xl transition-all duration-500"
                style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                data-id={`team-member-${index}`}
              >
                <div className="relative overflow-hidden" style={{ height: "500px" }}> {/* Fixed taller height */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-1000 ${animatedElements.includes(`team-member-${index}`)
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-110'
                      } group-hover:scale-110`}
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-center pt-48 p-6 opacity-100"
                    style={{
                      background: 'linear-gradient(to top, rgba(26, 41, 48, 0.95), transparent 70%)'
                    }}>
                    <h3
                      className="font-serif text-2xl font-bold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                      style={{ color: "#F2F2F2" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="font-sans text-sm mb-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100"
                      style={{ color: colors.goldLight }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="font-sans text-sm transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200"
                      style={{ color: "#F2F2F2" }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-18">
          <div className="text-center mb-14 scroll-animate" data-id="testimonials-title">
            <h2
              className={`font-serif text-4xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${animatedElements.includes('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              Guest <span className="text-[#C8A97E]">Experiences</span>
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${animatedElements.includes('testimonials-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${animatedElements.includes('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              What our valued guests have to say about their dining experiences.
            </p>
          </div>
          <div
            className={`transition-all duration-1000 delay-700 ${animatedElements.includes('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-md shadow-lg p-8 h-full flex flex-col transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#1A2930]">{testimonial.name}</h3>
                        <p className="font-sans text-xs text-[#333333]">{testimonial.date}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#C8A97E]' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-sans text-[#333333] italic flex-grow">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
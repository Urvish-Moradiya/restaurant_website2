import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { testimonials } from '../data/testimonials';
import { teamMembers } from '../data/teamMembers';

interface AboutProps {
  animatedElements: string[];
}

const About: React.FC<AboutProps> = ({ animatedElements }) => {
  return (
    <section id="about" className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate" data-id="about-content">
            <h2
              className={`font-serif text-4xl md:text-5xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
                animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our <span className="text-[#C8A97E]">Story</span>
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('about-content') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] mb-6 leading-relaxed transition-all duration-1000 delay-500 ${
                animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Founded in 2010, Saveur began as a passion project between longtime friends and culinary visionaries, Chef Antonio Rossi and restaurateur Elizabeth Morgan. Their shared dream was to create a dining destination that would elevate traditional techniques with modern innovation while maintaining an unwavering commitment to exceptional ingredients.
            </p>
            <p
              className={`font-sans text-lg text-[#333333] mb-6 leading-relaxed transition-all duration-1000 delay-700 ${
                animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Over the years, Saveur has evolved into one of the city's most celebrated culinary landmarks, earning accolades for both its inspired cuisine and warm, sophisticated atmosphere. Our philosophy remains unchanged: to create memorable dining experiences through thoughtful hospitality and dishes that tell a story.
            </p>
            <p
              className={`font-sans text-lg text-[#333333] mb-8 leading-relaxed transition-all duration-1000 delay-900 ${
                animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Today, we continue to honor the traditions that built our reputation while constantly seeking new ways to surprise and delight our guests. Every dish that leaves our kitchen reflects our dedication to culinary excellence and our respect for the ingredients that make it possible.
            </p>
          </div>
          <div className="relative scroll-animate" data-id="about-image">
            <img
              src="https://readdy.ai/api/search-image?query=Elegant%20restaurant%20interior%20with%20chef%20and%20staff%20preparing%20food%20in%20open%20kitchen%2C%20warm%20ambient%20lighting%2C%20sophisticated%20decor%2C%20professional%20kitchen%20equipment%2C%20chefs%20in%20white%20uniforms%20working%20with%20focus%20and%20precision&width=600&height=800&seq=26&orientation=portrait"
              alt="Restaurant interior"
              className={`w-full h-auto rounded-md shadow-xl transition-all duration-1000 ${
                animatedElements.includes('about-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            />
            <div
              className={`absolute -bottom-6 -left-6 bg-[#1A2930] text-[#F2F2F2] p-6 rounded-md shadow-lg transition-all duration-1000 delay-500 ${
                animatedElements.includes('about-image') ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-20 translate-y-20'
              }`}
            >
              <p className="font-serif text-xl italic">"Cuisine is the art of transforming ingredients into emotions."</p>
              <p className="font-sans text-sm mt-2 text-[#C8A97E]">— Chef Antonio Rossi</p>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-16 scroll-animate" data-id="team-title">
            <h2
              className={`font-serif text-4xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
                animatedElements.includes('team-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Meet Our <span className="text-[#C8A97E]">Team</span>
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('team-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                animatedElements.includes('team-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                data-id={`team-member-${index}`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover object-top transition-all duration-1000 ${
                      animatedElements.includes(`team-member-${index}`)
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-110'
                    } group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2930] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#F2F2F2] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm text-[#C8A97E] mb-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {member.role}
                    </p>
                    <p className="font-sans text-sm text-[#F2F2F2] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div
                  className={`p-6 transition-all duration-1000 delay-300 ${
                    animatedElements.includes(`team-member-${index}`)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="font-serif text-2xl font-bold text-[#1A2930]">{member.name}</h3>
                  <p className="font-sans text-sm text-[#C8A97E] mb-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-16 scroll-animate" data-id="testimonials-title">
            <h2
              className={`font-serif text-4xl font-bold text-[#1A2930] mb-4 transition-all duration-1000 ${
                animatedElements.includes('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Guest <span className="text-[#C8A97E]">Experiences</span>
            </h2>
            <div
              className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('testimonials-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#333333] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                animatedElements.includes('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              What our valued guests have to say about their dining experiences.
            </p>
          </div>
          <div
            className={`transition-all duration-1000 delay-700 ${
              animatedElements.includes('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
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
        {/* Reservation Stats */}
        <div className="mt-24 scroll-animate" data-id="reservation-stats">
          <div
            className={`bg-white rounded-md shadow-lg p-8 transition-all duration-1000 hover:shadow-xl ${
              animatedElements.includes('reservation-stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="font-serif text-3xl font-bold text-[#1A2930] mb-6 text-center">
              Weekly <span className="text-[#C8A97E]">Reservation</span> Trends
            </h2>
            <div id="reservations-chart" className="w-full h-80"></div>
            <p className="font-sans text-sm text-[#333333] text-center mt-4">
              Our busiest days are Friday and Saturday. We recommend booking at least one week in advance for weekend reservations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
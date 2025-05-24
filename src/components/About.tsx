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
    <section id="about" className="py-20 bg-[#FFFDD0]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate" data-id="about-content">
            <h2
              className={`font-serif text-4xl md:text-5xl font-bold text-[#800020] mb-4 transition-all duration-1000 ${
                animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our Story
            </h2>
            <div
              className={`w-24 h-1 bg-[#FFD700] mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('about-content') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#36454F] mb-6 leading-relaxed transition-all duration-1000 delay-500 ${
                animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Founded in 2010, Saveur began as a passion project between longtime friends and culinary visionaries, Chef Antonio Rossi and restaurateur Elizabeth Morgan. Their shared dream was to create a dining destination that would elevate traditional techniques with modern innovation while maintaining an unwavering commitment to exceptional ingredients.
            </p>
            <p
              className={`font-sans text-lg text-[#36454F] mb-6 leading-relaxed transition-all duration-1000 delay-700 ${
                animatedElements.includes('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Over the years, Saveur has evolved into one of the city's most celebrated culinary landmarks, earning accolades for both its inspired cuisine and warm, sophisticated atmosphere. Our philosophy remains unchanged: to create memorable dining experiences through thoughtful hospitality and dishes that tell a story.
            </p>
            <p
              className={`font-sans text-lg text-[#36454F] mb-8 leading-relaxed transition-all duration-1000 delay-900 ${
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
              className={`w-full h-auto rounded-lg shadow-xl transition-all duration-1000 ${
                animatedElements.includes('about-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            />
            <div
              className={`absolute -bottom-6 -left-6 bg-[#800020] text-[#FFFDD0] p-6 rounded-lg shadow-lg transition-all duration-1000 delay-500 ${
                animatedElements.includes('about-image') ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-20 translate-y-20'
              }`}
            >
              <p className="font-serif text-xl italic">"Cuisine is the art of transforming ingredients into emotions."</p>
              <p className="font-sans text-sm mt-2">— Chef Antonio Rossi</p>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-16 scroll-animate" data-id="team-title">
            <h2
              className={`font-serif text-4xl font-bold text-[#800020] mb-4 transition-all duration-1000 ${
                animatedElements.includes('team-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Meet Our Team
            </h2>
            <div
              className={`w-24 h-1 bg-[#FFD700] mx-auto mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('team-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#36454F] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
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
                className="bg-white rounded-lg shadow-lg overflow-hidden group scroll-animate"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#36454F] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#FFFDD0] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm text-[#FFD700] mb-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {member.role}
                    </p>
                    <p className="font-sans text-sm text-[#FFFDD0] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200">
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
                  <h3 className="font-serif text-2xl font-bold text-[#800020]">{member.name}</h3>
                  <p className="font-sans text-sm text-[#FFD700] mb-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-16 scroll-animate" data-id="testimonials-title">
            <h2
              className={`font-serif text-4xl font-bold text-[#800020] mb-4 transition-all duration-1000 ${
                animatedElements.includes('testimonials-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Guest Experiences
            </h2>
            <div
              className={`w-24 h-1 bg-[#FFD700] mx-auto mb-6 transition-all duration-1000 delay-300 ${
                animatedElements.includes('testimonials-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
            <p
              className={`font-sans text-lg text-[#36454F] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
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
                  <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col transform transition-transform duration-500 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#800020]">{testimonial.name}</h3>
                        <p className="font-sans text-xs text-[#36454F]">{testimonial.date}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${i < testimonial.rating ? 'text-[#FFD700]' : 'text-gray-300'}`}
                        ></i>
                      ))}
                    </div>
                    <p className="font-sans text-[#36454F] italic flex-grow">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Reservation Stats */}
        <div className="mt-24 scroll-animate" data-id="reservation-stats">
          <div
            className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 ${
              animatedElements.includes('reservation-stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="font-serif text-3xl font-bold text-[#800020] mb-6 text-center">Weekly Reservation Trends</h2>
            <div id="reservations-chart" className="w-full h-80"></div>
            <p className="font-sans text-sm text-[#36454F] text-center mt-4">
              Our busiest days are Friday and Saturday. We recommend booking at least one week in advance for weekend reservations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
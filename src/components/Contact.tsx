import React from 'react';

interface ContactProps {
  animatedElements: string[];
}

const Contact: React.FC<ContactProps> = ({ animatedElements }) => {
  return (
    <section id="contact" className="py-20 bg-[#1A2930]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate" data-id="contact-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-4 transition-all duration-1000 ${
              animatedElements.includes('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Make a <span className="text-[#C8A97E]">Reservation</span>
          </h2>
          <div
            className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('contact-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`font-sans text-lg text-[#F2F2F2] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              animatedElements.includes('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Reserve your table for an unforgettable dining experience. For parties of 8 or more, please call us directly.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`bg-white rounded-md shadow-lg p-8 scroll-animate transition-all duration-1000 hover:shadow-xl ${
              animatedElements.includes('contact-form') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            data-id="contact-form"
          >
            <h3 className="font-serif text-2xl font-bold text-[#1A2930] mb-6">Reservation <span className="text-[#C8A97E]">Details</span></h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium text-[#333333] mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-[#1A2930]/20 focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/50 rounded-md px-4 py-2 font-sans text-[#333333] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-[#333333] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-[#1A2930]/20 focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/50 rounded-md px-4 py-2 font-sans text-[#333333] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-sans text-sm font-medium text-[#333333] mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full border border-[#1A2930]/20 focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/50 rounded-md px-4 py-2 font-sans text-[#333333] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block font-sans text-sm font-medium text-[#333333] mb-2">
                    Number of Guests
                  </label>
                  <input
                    id="guests"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="2"
                    className="w-full border border-[#1A2930]/20 focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/50 rounded-md px-4 py-2 font-sans text-[#333333] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-sans text-sm font-medium text-[#333333] mb-2">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full border border-[#1A2930]/20 focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/50 rounded-md px-4 py-2 font-sans text-[#333333] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block font-sans text-sm font-medium text-[#333333] mb-2">
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    className="w-full border border-[#1A2930]/20 focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/50 rounded-md px-4 py-2 font-sans text-[#333333] transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="special-requests" className="block font-sans text-sm font-medium text-[#333333] mb-2">
                  Special Requests
                </label>
                <textarea
                  id="special-requests"
                  placeholder="Please let us know about any dietary restrictions or special occasions."
                  className="w-full border border-[#1A2930]/20 focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/50 rounded-md px-4 py-2 font-sans text-[#333333] transition-all duration-300"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C8A97E] text-[#1A2930] hover:bg-[#B69268] font-sans text-sm uppercase tracking-wider py-3 rounded-md whitespace-nowrap transition-all duration-300 hover:shadow-lg"
              >
                Reserve Table
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div
              className={`bg-white rounded-md shadow-lg p-8 mb-8 scroll-animate transition-all duration-1000 hover:shadow-xl ${
                animatedElements.includes('contact-info') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              data-id="contact-info"
            >
              <h3 className="font-serif text-2xl font-bold text-[#1A2930] mb-6">Contact <span className="text-[#C8A97E]">Information</span></h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#C8A97E] mt-1 mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-[#1A2930]">Address</h4>
                    <p className="font-sans text-[#333333]">
                      123 Gourmet Avenue, Culinary District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#C8A97E] mt-1 mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-[#1A2930]">Phone</h4>
                    <p className="font-sans text-[#333333]">(212) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#C8A97E] mt-1 mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-[#1A2930]">Email</h4>
                    <p className="font-sans text-[#333333]">reservations@saveur.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-white rounded-md shadow-lg p-8 scroll-animate transition-all duration-1000 delay-300 hover:shadow-xl ${
                animatedElements.includes('contact-hours') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              data-id="contact-hours"
            >
              <h3 className="font-serif text-2xl font-bold text-[#1A2930] mb-6">Hours of <span className="text-[#C8A97E]">Operation</span></h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#1A2930]">Monday - Thursday</p>
                  <p className="font-sans text-[#333333]">5:00 PM - 10:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#1A2930]">Friday - Saturday</p>
                  <p className="font-sans text-[#333333]">5:00 PM - 11:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#1A2930]">Sunday</p>
                  <p className="font-sans text-[#333333]">5:00 PM - 9:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#1A2930]">Lunch (Friday - Sunday)</p>
                  <p className="font-sans text-[#333333]">11:30 AM - 2:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
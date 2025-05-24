import React from 'react';

interface ContactProps {
  animatedElements: string[];
}

const Contact: React.FC<ContactProps> = ({ animatedElements }) => {
  return (
    <section id="contact" className="py-20 bg-[#36454F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate" data-id="contact-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-[#FFFDD0] mb-4 transition-all duration-1000 ${
              animatedElements.includes('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Make a Reservation
          </h2>
          <div
            className={`w-24 h-1 bg-[#FFD700] mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('contact-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`font-sans text-lg text-[#FFFDD0] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              animatedElements.includes('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Reserve your table for an unforgettable dining experience. For parties of 8 or more, please call us directly.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`bg-[#FFFDD0] rounded-lg shadow-lg p-8 scroll-animate transition-all duration-1000 ${
              animatedElements.includes('contact-form') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            data-id="contact-form"
          >
            <h3 className="font-serif text-2xl font-bold text-[#800020] mb-6">Reservation Details</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium text-[#36454F] mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-[#36454F]/20 focus:border-[#800020] focus:ring-2 focus:ring-[#800020] rounded-md px-4 py-2 font-sans text-[#36454F] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-[#36454F] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-[#36454F]/20 focus:border-[#800020] focus:ring-2 focus:ring-[#800020] rounded-md px-4 py-2 font-sans text-[#36454F] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-sans text-sm font-medium text-[#36454F] mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full border border-[#36454F]/20 focus:border-[#800020] focus:ring-2 focus:ring-[#800020] rounded-md px-4 py-2 font-sans text-[#36454F] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block font-sans text-sm font-medium text-[#36454F] mb-2">
                    Number of Guests
                  </label>
                  <input
                    id="guests"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="2"
                    className="w-full border border-[#36454F]/20 focus:border-[#800020] focus:ring-2 focus:ring-[#800020] rounded-md px-4 py-2 font-sans text-[#36454F] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-sans text-sm font-medium text-[#36454F] mb-2">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full border border-[#36454F]/20 focus:border-[#800020] focus:ring-2 focus:ring-[#800020] rounded-md px-4 py-2 font-sans text-[#36454F] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block font-sans text-sm font-medium text-[#36454F] mb-2">
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    className="w-full border border-[#36454F]/20 focus:border-[#800020] focus:ring-2 focus:ring-[#800020] rounded-md px-4 py-2 font-sans text-[#36454F] transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="special-requests" className="block font-sans text-sm font-medium text-[#36454F] mb-2">
                  Special Requests
                </label>
                <textarea
                  id="special-requests"
                  placeholder="Please let us know about any dietary restrictions or special occasions."
                  className="w-full border border-[#36454F]/20 focus:border-[#800020] focus:ring-2 focus:ring-[#800020] rounded-md px-4 py-2 font-sans text-[#36454F] transition-all duration-300"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#800020] text-[#FFFDD0] hover:bg-[#600018] font-sans text-sm uppercase tracking-wider py-3 rounded-button whitespace-nowrap transition-all duration-300 hover:scale-105"
              >
                Reserve Table
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div
              className={`bg-[#FFFDD0] rounded-lg shadow-lg p-8 mb-8 scroll-animate transition-all duration-1000 ${
                animatedElements.includes('contact-info') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              data-id="contact-info"
            >
              <h3 className="font-serif text-2xl font-bold text-[#800020] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-[#800020] mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-sans font-medium text-[#36454F]">Address</h4>
                    <p className="font-sans text-[#36454F]">
                      123 Gourmet Avenue, Culinary District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone-alt text-[#800020] mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-sans font-medium text-[#36454F]">Phone</h4>
                    <p className="font-sans text-[#36454F]">(212) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope text-[#800020] mt-1 mr-4"></i>
                  <div>
                    <h4 className="font-sans font-medium text-[#36454F]">Email</h4>
                    <p className="font-sans text-[#36454F]">reservations@saveur.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-[#FFFDD0] rounded-lg shadow-lg p-8 scroll-animate transition-all duration-1000 delay-300 ${
                animatedElements.includes('contact-hours') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              data-id="contact-hours"
            >
              <h3 className="font-serif text-2xl font-bold text-[#800020] mb-6">Hours of Operation</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#36454F]">Monday - Thursday</p>
                  <p className="font-sans text-[#36454F]">5:00 PM - 10:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#36454F]">Friday - Saturday</p>
                  <p className="font-sans text-[#36454F]">5:00 PM - 11:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#36454F]">Sunday</p>
                  <p className="font-sans text-[#36454F]">5:00 PM - 9:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium text-[#36454F]">Lunch (Friday - Sunday)</p>
                  <p className="font-sans text-[#36454F]">11:30 AM - 2:30 PM</p>
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
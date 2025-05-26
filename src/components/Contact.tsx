import React from 'react';

interface ContactProps {
  animatedElements: string[];
}

const Contact: React.FC<ContactProps> = ({ animatedElements }) => {
  // Define colors as constants for consistency
  const colors = {
    darkTeal: "rgb(26, 41, 48)",    // #1A2930
    goldLight: "rgb(200, 169, 126)", // #C8A97E
    goldDark: "rgb(182, 146, 104)",  // #B69268
    darkText: "rgb(51, 51, 51)",     // #333333
    lightGray: "rgb(242, 242, 242)", // #F2F2F2
    white: "rgb(255, 255, 255)"      // #FFFFFF
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: colors.darkTeal }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate" data-id="contact-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              animatedElements.includes('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: colors.lightGray }}
          >
            Make a <span style={{ color: colors.goldLight }}>Reservation</span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('contact-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ backgroundColor: colors.goldLight }}
          ></div>
          <p
            className={`font-sans text-lg max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              animatedElements.includes('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: colors.lightGray }}
          >
            Reserve your table for an unforgettable dining experience. For parties of 8 or more, please call us directly.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`rounded-md p-8 scroll-animate transition-all duration-1000 hover:shadow-xl ${
              animatedElements.includes('contact-form') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ 
              backgroundColor: colors.white,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
            }}
            data-id="contact-form"
          >
            <h3 className="font-serif text-2xl font-bold mb-6">
              <span style={{ color: colors.darkTeal }}>Reservation </span>
              <span style={{ color: colors.goldLight }}>Details</span>
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium mb-2" style={{ color: colors.darkText }}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-md px-4 py-2 font-sans transition-all duration-300"
                    style={{ 
                      color: colors.darkText,
                      border: `1px solid rgba(26, 41, 48, 0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.goldLight;
                      e.target.style.boxShadow = `0 0 0 3px rgba(200, 169, 126, 0.25)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(26, 41, 48, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium mb-2" style={{ color: colors.darkText }}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-md px-4 py-2 font-sans transition-all duration-300"
                    style={{ 
                      color: colors.darkText,
                      border: `1px solid rgba(26, 41, 48, 0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.goldLight;
                      e.target.style.boxShadow = `0 0 0 3px rgba(200, 169, 126, 0.25)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(26, 41, 48, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-sans text-sm font-medium mb-2" style={{ color: colors.darkText }}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full rounded-md px-4 py-2 font-sans transition-all duration-300"
                    style={{ 
                      color: colors.darkText,
                      border: `1px solid rgba(26, 41, 48, 0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.goldLight;
                      e.target.style.boxShadow = `0 0 0 3px rgba(200, 169, 126, 0.25)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(26, 41, 48, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block font-sans text-sm font-medium mb-2" style={{ color: colors.darkText }}>
                    Number of Guests
                  </label>
                  <input
                    id="guests"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="2"
                    className="w-full rounded-md px-4 py-2 font-sans transition-all duration-300"
                    style={{ 
                      color: colors.darkText,
                      border: `1px solid rgba(26, 41, 48, 0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.goldLight;
                      e.target.style.boxShadow = `0 0 0 3px rgba(200, 169, 126, 0.25)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(26, 41, 48, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-sans text-sm font-medium mb-2" style={{ color: colors.darkText }}>
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full rounded-md px-4 py-2 font-sans transition-all duration-300"
                    style={{ 
                      color: colors.darkText,
                      border: `1px solid rgba(26, 41, 48, 0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.goldLight;
                      e.target.style.boxShadow = `0 0 0 3px rgba(200, 169, 126, 0.25)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(26, 41, 48, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block font-sans text-sm font-medium mb-2" style={{ color: colors.darkText }}>
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    className="w-full rounded-md px-4 py-2 font-sans transition-all duration-300"
                    style={{ 
                      color: colors.darkText,
                      border: `1px solid rgba(26, 41, 48, 0.2)`,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.goldLight;
                      e.target.style.boxShadow = `0 0 0 3px rgba(200, 169, 126, 0.25)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(26, 41, 48, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="special-requests" className="block font-sans text-sm font-medium mb-2" style={{ color: colors.darkText }}>
                  Special Requests
                </label>
                <textarea
                  id="special-requests"
                  placeholder="Please let us know about any dietary restrictions or special occasions."
                  className="w-full rounded-md px-4 py-2 font-sans transition-all duration-300"
                  style={{ 
                    color: colors.darkText,
                    border: `1px solid rgba(26, 41, 48, 0.2)`,
                  }}
                  rows={4}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.goldLight;
                    e.target.style.boxShadow = `0 0 0 3px rgba(200, 169, 126, 0.25)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(26, 41, 48, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full font-sans text-sm uppercase tracking-wider py-3 rounded-md whitespace-nowrap transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.goldLight, color: colors.darkTeal }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.goldDark;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.goldLight;
                }}
              >
                Reserve Table
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div
              className={`rounded-md p-8 mb-8 scroll-animate transition-all duration-1000 hover:shadow-xl ${
                animatedElements.includes('contact-info') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ 
                backgroundColor: colors.white,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
              }}
              data-id="contact-info"
            >
              <h3 className="font-serif text-2xl font-bold mb-6">
                <span style={{ color: colors.darkTeal }}>Contact </span>
                <span style={{ color: colors.goldLight }}>Information</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4" style={{ color: colors.goldLight }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium" style={{ color: colors.darkTeal }}>Address</h4>
                    <p className="font-sans" style={{ color: colors.darkText }}>
                      123 Gourmet Avenue, Culinary District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4" style={{ color: colors.goldLight }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium" style={{ color: colors.darkTeal }}>Phone</h4>
                    <p className="font-sans" style={{ color: colors.darkText }}>(212) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4" style={{ color: colors.goldLight }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium" style={{ color: colors.darkTeal }}>Email</h4>
                    <p className="font-sans" style={{ color: colors.darkText }}>reservations@saveur.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`rounded-md p-8 scroll-animate transition-all duration-1000 delay-300 hover:shadow-xl ${
                animatedElements.includes('contact-hours') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ 
                backgroundColor: colors.white,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
              }}
              data-id="contact-hours"
            >
              <h3 className="font-serif text-2xl font-bold mb-6">
                <span style={{ color: colors.darkTeal }}>Hours of </span>
                <span style={{ color: colors.goldLight }}>Operation</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="font-sans font-medium" style={{ color: colors.darkTeal }}>Monday - Thursday</p>
                  <p className="font-sans" style={{ color: colors.darkText }}>5:00 PM - 10:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium" style={{ color: colors.darkTeal }}>Friday - Saturday</p>
                  <p className="font-sans" style={{ color: colors.darkText }}>5:00 PM - 11:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium" style={{ color: colors.darkTeal }}>Sunday</p>
                  <p className="font-sans" style={{ color: colors.darkText }}>5:00 PM - 9:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans font-medium" style={{ color: colors.darkTeal }}>Lunch (Friday - Sunday)</p>
                  <p className="font-sans" style={{ color: colors.darkText }}>11:30 AM - 2:30 PM</p>
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
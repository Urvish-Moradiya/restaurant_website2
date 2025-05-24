import React from 'react';

interface AwardsProps {
  animatedElements: string[];
}

const Awards: React.FC<AwardsProps> = ({ animatedElements }) => {
  return (
    <section id="awards" className="py-20 bg-[#1A2930]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate" data-id="awards-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-4 transition-all duration-1000 ${
              animatedElements.includes('awards-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Awards & <span className="text-[#C8A97E]">Recognition</span>
          </h2>
          <div
            className={`w-24 h-1 bg-[#C8A97E] mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('awards-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`font-sans text-lg text-[#F2F2F2] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              animatedElements.includes('awards-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our commitment to excellence has been recognized by leading culinary institutions and critics worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 'award-1',
              icon: 'star',
              title: 'Michelin Star',
              description: '2023-2024',
            },
            {
              id: 'award-2',
              icon: 'award',
              title: 'James Beard Award',
              description: 'Best Chef Northeast',
            },
            {
              id: 'award-3',
              icon: 'wine-glass',
              title: 'Wine Spectator',
              description: 'Best of Award of Excellence',
            },
            {
              id: 'award-4',
              icon: 'certificate',
              title: 'Forbes Travel Guide',
              description: 'Five-Star Rating',
            },
          ].map((award, index) => (
            <div
              key={award.id}
              className="bg-white rounded-md shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-500 hover:shadow-xl scroll-animate"
              data-id={award.id}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 transition-all duration-1000 ${
                  animatedElements.includes(award.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              >
                {award.icon === 'star' && (
                  <svg className="w-16 h-16 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
                {award.icon === 'award' && (
                  <svg className="w-16 h-16 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                )}
                {award.icon === 'wine-glass' && (
                  <svg className="w-16 h-16 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                )}
                {award.icon === 'certificate' && (
                  <svg className="w-16 h-16 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <h3
                className={`font-serif text-xl font-bold text-[#1A2930] mb-2 transition-all duration-1000 delay-300 ${
                  animatedElements.includes(award.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {award.title}
              </h3>
              <p
                className={`font-sans text-sm text-[#333333] transition-all duration-1000 delay-500 ${
                  animatedElements.includes(award.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
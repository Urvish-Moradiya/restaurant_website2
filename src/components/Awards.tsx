import React from 'react';

interface AwardsProps {
  animatedElements: string[];
}

const Awards: React.FC<AwardsProps> = ({ animatedElements }) => {
  return (
    <section id="awards" className="py-20 bg-[#36454F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate" data-id="awards-title">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-[#FFFDD0] mb-4 transition-all duration-1000 ${
              animatedElements.includes('awards-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Awards & Recognition
          </h2>
          <div
            className={`w-24 h-1 bg-[#FFD700] mx-auto mb-6 transition-all duration-1000 delay-300 ${
              animatedElements.includes('awards-title') ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`font-sans text-lg text-[#FFFDD0] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
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
              icon: 'fa-star',
              title: 'Michelin Star',
              description: '2023-2024',
            },
            {
              id: 'award-2',
              icon: 'fa-award',
              title: 'James Beard Award',
              description: 'Best Chef Northeast',
            },
            {
              id: 'award-3',
              icon: 'fa-wine-glass-alt',
              title: 'Wine Spectator',
              description: 'Best of Award of Excellence',
            },
            {
              id: 'award-4',
              icon: 'fa-certificate',
              title: 'Forbes Travel Guide',
              description: 'Five-Star Rating',
            },
          ].map((award, index) => (
            <div
              key={award.id}
              className="bg-[#FFFDD0] rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-500 scroll-animate"
              data-id={award.id}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 transition-all duration-1000 ${
                  animatedElements.includes(award.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              >
                <i className={`fas ${award.icon} text-[#FFD700] text-4xl`}></i>
              </div>
              <h3
                className={`font-serif text-xl font-bold text-[#800020] mb-2 transition-all duration-1000 delay-300 ${
                  animatedElements.includes(award.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {award.title}
              </h3>
              <p
                className={`font-sans text-sm text-[#36454F] transition-all duration-1000 delay-500 ${
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
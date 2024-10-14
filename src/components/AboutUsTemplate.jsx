import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUsTemplate = ({ image, title, sectionsContent, principalPhoto, principalName, principalProfilePath }) => {
  const principalRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  
  const [activeTab, setActiveTab] = useState('principal');
  const navigate = useNavigate();

  const scrollToSection = (ref, tab) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tab);
  };

  useEffect(() => {
    const options = { root: null, threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    const sections = [principalRef, visionRef, missionRef];

    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex flex-col items-center justify-center h-screen bg-gray-800 relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="relative text-center text-white mt-24">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wide mb-4 uppercase text-shadow-lg">{title}</h1>
        </div>
      </div>

      <div className="flex-grow bg-gray-100">
        <section ref={principalRef} id="principal" className="min-h-screen flex items-center justify-center p-10 bg-white">
          <div className="max-w-4xl text-center space-y-6">
            <img
              src={principalPhoto}
              alt={`${principalName} Photo`}
              className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
            />
            <h2 className="text-4xl font-bold text-gray-800">{principalName}</h2>
            <p className="text-lg text-gray-600">{sectionsContent.principalMessage}</p>
            <button
              onClick={() => navigate(principalProfilePath)}
              className="mt-4 px-6 py-2 text-lg font-medium bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              View Profile
            </button>
          </div>
        </section>

        <section ref={visionRef} id="vision" className="min-h-screen flex items-center justify-center p-10 bg-gray-50">
          <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Vision</h2>
            <p className="text-lg text-gray-600">{sectionsContent.vision}</p>
          </div>
        </section>

        <section ref={missionRef} id="mission" className="min-h-screen flex items-center justify-center p-10 bg-white">
          <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Mission</h2>
            <p className="text-lg text-gray-600">{sectionsContent.mission}</p>
          </div>
        </section>
      </div>

      <nav className="fixed bottom-0 w-full bg-white shadow-lg p-4">
        <div className="flex justify-center space-x-10">
          {[
            { label: 'Principal', ref: principalRef, tab: 'principal' },
            { label: 'Vision', ref: visionRef, tab: 'vision' },
            { label: 'Mission', ref: missionRef, tab: 'mission' },
          ].map(({ label, tab }) => (
            <button
              key={tab}
              className={`text-lg font-semibold px-3 py-1 border-b-2 transition duration-300 ${
                activeTab === tab
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-500'
              }`}
              onClick={() => scrollToSection(eval(`${tab}Ref`), tab)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AboutUsTemplate;

import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AcademicsTemplate = ({ image, branchName, subtitle, sectionContent, hodPhoto, hodName, hodProfilePath }) => {
  const teamRef = useRef(null);
  const visionRef = useRef(null);
  const achievementsRef = useRef(null);
  const associationRef = useRef(null);
  const hodRef = useRef(null);

  const [activeTab, setActiveTab] = useState('team');
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle smooth scrolling
  const scrollToSection = (ref, tab) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tab);
  };

  // Function to observe sections and highlight the corresponding tab
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5, // 50% visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    const sections = [teamRef, visionRef, achievementsRef, associationRef, hodRef];

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
      {/* Background Image Section */}
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
          <h1 className="text-6xl md:text-8xl font-bold tracking-wide mb-4 uppercase text-shadow-lg">
            {branchName}
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Sections Below */}
      <div className="flex-grow bg-gray-100">
        <section
          ref={teamRef}
          id="team"
          className="min-h-screen flex items-center justify-center p-10 bg-white"
        >
          <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Team</h2>
            <p className="text-lg text-gray-600">{sectionContent.team}</p>
          </div>
        </section>
        <section
          ref={visionRef}
          id="vision"
          className="min-h-screen flex items-center justify-center p-10 bg-gray-50"
        >
          <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Vision</h2>
            <p className="text-lg text-gray-600">{sectionContent.vision}</p>
          </div>
        </section>
        <section
          ref={achievementsRef}
          id="achievements"
          className="min-h-screen flex items-center justify-center p-10 bg-white"
        >
          <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Achievements</h2>
            <p className="text-lg text-gray-600">{sectionContent.achievements}</p>
          </div>
        </section>
        <section
          ref={associationRef}
          id="association"
          className="min-h-screen flex items-center justify-center p-10 bg-gray-50"
        >
          <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Association</h2>
            <p className="text-lg text-gray-600">{sectionContent.association}</p>
          </div>
        </section>
        
        {/* HOD Section */}
        <section
          ref={hodRef}
          id="hod"
          className="min-h-screen flex flex-col items-center justify-center p-10 bg-white"
        >
          <div className="max-w-4xl text-center space-y-6">
            <img
              src={hodPhoto}
              alt={`${hodName} Photo`}
              className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
            />
            <h2 className="text-4xl font-bold text-gray-800">{hodName}</h2>
            <p className="text-lg text-gray-600">{sectionContent.hod}</p>
            <button
              onClick={() => navigate(hodProfilePath)} // Navigate to HOD's profile page
              className="mt-4 px-6 py-2 text-lg font-medium bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              View Profile
            </button>
          </div>
        </section>
      </div>

      {/* Stylish Navigation Bar at the Bottom */}
      <nav className="fixed bottom-0 w-full bg-white shadow-lg p-4">
        <div className="flex justify-center space-x-10">
          {[
            { label: 'Team', ref: teamRef, tab: 'team' },
            { label: 'Vision', ref: visionRef, tab: 'vision' },
            { label: 'Achievements', ref: achievementsRef, tab: 'achievements' },
            { label: 'Association', ref: associationRef, tab: 'association' },
            { label: 'HOD', ref: hodRef, tab: 'hod' },
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

export default AcademicsTemplate;

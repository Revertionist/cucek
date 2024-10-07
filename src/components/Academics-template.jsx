import React, { useRef, useState } from 'react';

const AcademicsTemplate = ({ image, branchName, subtitle, sectionContent }) => {
  // Create refs for each section
  const sectionARef = useRef(null);
  const sectionBRef = useRef(null);
  const sectionCRef = useRef(null);
  const sectionDRef = useRef(null);

  // State for active tab
  const [activeTab, setActiveTab] = useState('A');

  // Function to handle smooth scrolling
  const scrollToSection = (ref, tab) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Image Section */}
      <div
        className="flex flex-col items-center justify-center h-screen bg-gray-100 relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Branch Name and Subtitle */}
        <div className="relative z-5 text-center text-white mt-[92px]"> {/* Adjusted for header height */}
          <h1
            className="text-5xl md:text-7xl font-serif mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#f1f1f1",
            }}
          >
            {branchName}
          </h1>
          <p
            className="text-lg md:text-2xl max-w-3xl"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              marginTop: "20px",
              color: "#e0e0e0",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Stylish Navigation Bar Below Background Image */}
      <nav className="w-full flex justify-center bg-white shadow-lg p-4 rounded-lg z-5 mt-2"> 
        <div className="flex space-x-10">
          {['A', 'B', 'C', 'D'].map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer text-lg font-semibold transition-colors duration-300 relative`}
              onClick={() => scrollToSection(eval(`section${tab}Ref`), tab)}
            >
              <span
                className={`${
                  activeTab === tab ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                Section {tab}
              </span>
              {activeTab === tab && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Sections Below the Background Image */}
      <div className="flex-grow">
        <section ref={sectionARef} className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">{sectionContent.A}</h2>
        </section>
        <section ref={sectionBRef} className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">{sectionContent.B}</h2>
        </section>
        <section ref={sectionCRef} className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">{sectionContent.C}</h2>
        </section>
        <section ref={sectionDRef} className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">{sectionContent.D}</h2>
        </section>
      </div>
    </div>
  );
};

export default AcademicsTemplate;

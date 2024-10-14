import React from 'react';
import { Link } from 'react-router-dom';

const researchers = [
  {
    name: 'DR. ASALETHA R',
    img: 'https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/GENERAL%20SCIENCE/FACULTY%20PICS/01.jpg',
    description: 'Blue Meth',
    id: 'dr-asaletha-r', // Unique ID for routing
  },
  {
    name: 'Dr. SUNILKUMAR N',
    img: 'https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/CE/FACULTY%20PICS/01.jpg',
    description: 'Soil and Manoj',
    id: 'dr-sunilkumar-n',
  },
  {
    name: 'I dunno who dis guy is',
    img: 'https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/ME/FACULTY%20PICS/03.jpg',
    description: 'Research on Sustainable Energy',
    id: 'unknown-guy',
  },
  {
    name: 'Big J',
    img: 'https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/EEE/FACULTY%20PICS/01.jpg',
    description: 'Maniamma ass licker',
    id: 'big-j',
  },
];


const ResearchPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8 pt-[120px]">
      {/* Intro Text */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Research at CUCEK
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Academic enrichment of an institution is measured by its research output. CUCEK is a potential institution to initiate and nurture research in many areas of engineering and science.
        </p>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          CUCEK is located in a village with challenging soil strata for construction, impure water, and unplanned transportation systems. The community relies heavily on agriculture, which presents an opportunity for research into local challenges.
        </p>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Abundance of waste materials like rice husk, coconut shells, and water weeds present in the locality are often seen as a menace. Faculty research projects aim to address issues such as construction practices, large-scale water purification, soil stabilization using coir geo-textiles, reuse of waste materials, and mechanization in agriculture.
        </p>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Research at CUCEK also focuses on renewable and non-renewable energy sources, flood control, and improving productivity in agriculture. Faculty members from various engineering and science fields guide research projects that lead to PhDs.
        </p>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          PhD programs at CUCEK are conducted through the School of Engineering, under the Faculty of Engineering, Faculty of Technology, and Faculty of Management Studies in CUSAT. The research areas of faculty members, their students, and ongoing projects are detailed on this page.
        </p>
      </div>

 {/* Researcher Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {researchers.map((researcher, index) => (
          <Link to={`/researcher/${researcher.id}`} key={index}>
            <div
              className="flex flex-col items-center bg-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl transform hover:-translate-y-1"
              onClick={() => alert(`${researcher.name}'s profile clicked`)}
            >
              <div className="relative">
                <img
                  src={researcher.img}
                  alt={researcher.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow-md transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
              </div>
              <div className="p-6 text-center flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition duration-300">{researcher.name}</h3>
                <p className="text-gray-600">{researcher.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
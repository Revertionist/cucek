import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const researcherData = {
  'dr-asaletha-r': {
    img: 'https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/GENERAL%20SCIENCE/FACULTY%20PICS/01.jpg',
    name: 'DR. ASALETHA R',
    researchInterests: 'NANO POLYMERS',
    researchScholars: '2 students registered',
    projects: ',NATIONAL YOUNG SCIENTIST CONTRIBUTIONS',
    publications: '1 Regional Journal, 3 national journals, 10 international journals',
  },
  'dr-sunilkumar-n': {
    img: 'https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/CE/FACULTY%20PICS/01.jpg',
    name: 'Dr. SUNILKUMAR N',
    researchInterests: 'COMPUTATIONAL MECHANICS',
    researchScholars: 'Kiran Christopher, Shiny Paul',
    projects: '	Submitted Research Proposals of four projects to be funded by the Kerala Government scheme of CUSAT',
    publications: '2 Regional Journals, 1 national journal, 4 international journals',
  },
  // Add more researchers here as needed
};

const ResearcherDetails = () => {
  const { id } = useParams();
  const researcher = researcherData[id];

  if (!researcher) {
    return <div>Researcher not found.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-20">
      <img src={researcher.img} alt={researcher.name} className="w-40 h-40 object-cover rounded-full mb-8 border-4 border-gray-200 shadow-md" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{researcher.name}</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Research Interests</h2>
      <p className="text-lg text-gray-600 mb-6">{researcher.researchInterests}</p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Research Scholars</h2>
      <p className="text-lg text-gray-600 mb-6">{researcher.researchScholars}</p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Projects</h2>
      <p className="text-lg text-gray-600 mb-6">{researcher.projects}</p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Publications</h2>
      <p className="text-lg text-gray-600">{researcher.publications}</p>
    </div>
  );
};

export default ResearcherDetails;

import React from 'react';

const PrincipalDesk = () => {
  return (
    <section
      id="principal"
      className="min-h-screen flex items-center justify-center p-10 bg-gray-100 mt-[92px]"
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 rounded-lg shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
        <div className="p-8 flex flex-col items-center">
          {/* Principal's Image */}
          <img
            src="principal.jpg" // Replace with the actual image source
            alt="Principal"
            className="h-64 w-auto rounded-full border-4 border-gray-300 mb-6"
          />

          {/* Principal's Message */}
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            From the Principal's Desk
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            "Welcome to the only rural campus of CUSAT, the Cochin University College of Engineering Kuttanad (CUCEK). You are opening the window to a great professional College with a strong tradition of excellence in academics, arts, sports, and societal commitments. Being a rural campus of the University, the institution has a wide spectrum of opportunities in all fields of engineering, management, and other disciplines. At CUCEK, you will receive the individual attention you need to build and develop your academic pursuit for a successful future. CUCEK has a committed, highly motivated, and academically strong team of faculty to provide you the help you need to reach your goals. The involvement of faculty members in active research in almost all fields of engineering adds flavor to even undergraduate-level teaching and learning. For the past many years, we have been educating young men and women to become engineers, managers, and leaders together with our traditions of hospitality, humility, service, stewardship, and giving of self to others."
          </p>

          {/* Principal's Name and Position */}
          <p className="font-semibold text-gray-800 mb-1 text-center">Prof. Dr. Asaletha R</p>
          <p className="text-gray-600 text-center">Principal, CUCEK</p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalDesk;

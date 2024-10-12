import React from 'react';

const VisionAndMission = () => {


    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 mt-[92px]"
            style={{
                backgroundImage: "url(cucek_bg.jpg)",
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 max-w-3xl w-full bg-white bg-opacity-90 rounded-lg shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
                <div className="p-8">
                    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Our Vision & Mission</h1>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3m6 0c0 1.657-1.343 3-3 3m-3 3h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                            </svg>
                            Vision
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            "To be an institution of universal excellence by striving continuously in pursuit of exemplary value-based education, skill development, research, entrepreneurship and technology-related services to the society, rural in particular."
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Mission
                        </h2>
                        <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3">
                            <li>
                                To offer high quality education in major engineering, computer application and aqua-culture disciplines from the undergraduate to doctoral level through a well-balanced academic, professional, and extracurricular activities.
                            </li>
                            <li>
                                To create a solution-based approach to the problems of rural society through technological interventions and innovations and hence uplift rural areas.
                            </li>
                            <li>
                                To foster and maintain mutually beneficial partnerships with alumni, industry, state and central governments through public services assistance and collaborative research.
                            </li>
                            <li>
                                To inculcate universal-value-based technical education to students, faculty and other stakeholders in the society through public partnership.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMission;

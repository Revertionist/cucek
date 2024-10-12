import React from 'react'

const VisionAndMission = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 mt-[92px]"
            style={{
                backgroundImage: "url(cucek_bg.jpg)",
                backgroundPosition: "top",
                backgroundSize: "cover", // Stretches the background to cover the entire screen
                backgroundRepeat: "no-repeat", // Prevents the background from repeating
            }}
        >
            <div className=" rounded-lg shadow-lg bg-white overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Vision</h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        "To be an institution of universal excellence by striving continuously in pursuit of exemplary value-based education, skill development, research, entrepreneurship and technology-related services to the society, rural in particular."
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Mission</h2>

                    <ol className="list-decimal list-inside text-gray-600 leading-relaxed mb-4">
                        <li>To offer high quality education in major engineering, computer application and aqua-culture disciplines from the undergraduate to doctoral level through a well-balanced academic, professional, and extracurricular activities.</li>
                        <li>To create a solution-based approach to the problems of rural society through technological interventions and innovations and hence uplift rural areas.</li>
                        <li>To foster and maintain mutually beneficial partnerships with alumni, industry, state and central governments through public services assistance and collaborative research.</li>
                        <li>To inculcate universal-value-based technical education to students, faculty and other stake holders in the society through public partnership.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default VisionAndMission

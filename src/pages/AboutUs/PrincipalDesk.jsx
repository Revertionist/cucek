import React from 'react'

const PrincipalDesk = () => {
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
            <div className="rounded-lg shadow-lg bg-white overflow-hidden">
                <div className="flex justify-center items-center">
                    
                    <img
                        className="h-64 justify-center w-auto pt-2"
                        src="principal.jpg" // Replace with the actual image source
                        alt="Principal"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">From the Principal's Desk</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        "Welcome to the only rural campus of CUSAT, the Cochin University College of Engineering Kuttanad (CUCEK). You are opening the window to a great professional College with a strong tradition of excellence in academics, arts, sports and societal commitments. Being a rural campus of the University, the institution has a wide spectrum of opportunities in all fields of engineering, management and other disciplines. At CUCEK, you will receive the individual attention you need to build and develop your academic pursuit for a successful future. CUCEK has a committed, highly motivated and academically strong team of faculty to provide you the help you need to reach your goals. The involvement of faculty members in active research in almost all fields of engineering adds flavor to even undergraduate level teaching and learning. For the past many years, we have been educating young men and women to become engineers, managers and leaders together with our traditions of hospitality, humility, service, stewardship and giving of self to others"
                    </p>
                    <p className="font-semibold text-gray-800 mb-1">Prof.Dr. Asaletha R</p>
                    <p className="text-gray-600">Principal, CUCEK</p>
                </div>
            </div>
        </div>
    )
}

export default PrincipalDesk;

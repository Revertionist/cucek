import React from "react";
import AboutUsTemplate from "../../components/AboutUsTemplate";



export default function AboutUsContents() {

    const sectionsContent = {
        principalMessage: `Welcome to the only rural campus of CUSAT, the Cochin University College of Engineering Kuttanad (CUCEK). You are opening the window to a great professional College with a strong tradition of excellence in academics, arts, sports, and societal commitments. Being a rural campus of the University, the institution has a wide spectrum of opportunities in all fields of engineering, management, and other disciplines. At CUCEK, you will receive the individual attention you need to build and develop your academic pursuit for a successful future. CUCEK has a committed, highly motivated, and academically strong team of faculty to provide you the help you need to reach your goals. The involvement of faculty members in active research in almost all fields of engineering adds flavor to even undergraduate-level teaching and learning. For the past many years, we have been educating young men and women to become engineers, managers, and leaders together with our traditions of hospitality, humility, service, stewardship, and giving of self to others.`,

        vision: "To be an institution of universal excellence by striving continuously in pursuit of exemplary value-based education, skill development, research, entrepreneurship, and technology-related services to society, especially rural areas.",

        mission: `1. To offer high-quality education in major engineering disciplines from the undergraduate to doctoral levels. 
    2. To create a solution-based approach to the problems of rural society through technological innovations. 
    3. To maintain partnerships with alumni, industry, and government through public service. 
    4. To inculcate value-based education to students and other stakeholders.`
    };

    return (
        <AboutUsTemplate
            image="cucek_bg.jpg"
            title="About Us"
            sectionsContent={sectionsContent}
            principalPhoto="principal.jpg"
            principalName="Prof. Dr. Asaletha R"
            principalProfilePath="/principal-profile"
        />
    );
}

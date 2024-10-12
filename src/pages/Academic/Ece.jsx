import React from "react";
import AcademicsTemplate from "../../components/Academics-template";

export default function Ece() {
  const sectionContent = {
    team: "The Division of Electronics & Communications Engineering started in the year 1999.The division offers B.tech degree course in Electronics & Communications with an annual intake of 60 students, with the approval of All India Council For technical Education (AICTE). The division plays a vital role in providing dynamic & quality electronics engineers to the society. The division has dedicated and experienced faculty with good commitment to engineering education. The department has well equipped laboratories to provide the students with the sufficient backing of practical knowledge. These laboratories provide facilities in the area of electronic circuits, linear integrated circuits, digital electronics, microprocessors and micro controllers, communication systems, Digital signal processing, microwave engineering, embedded systems etc. The department also offers elective subjects viz optical fiber communication, digital image processing, hardware modeling, mechatronics, radar and navigation, ASIC design etc.",
    vision: "To be a preeminent center of excellence in the field of electronics and communication engineering by cultivating moral and ethical values while generating globally competent multi-faceted electronics and communication engineers.",
    achievements: "The Division has a good history of campus placements. Our students secured campus placements in multi-national companies viz BOCH, MuSigma, Accenture, TCS, and Infosys etc. Sri UNICE ROSHIN ISMAEL has secured 146th rank in the Indian Civil Service Examination, 2013. Our student Ms Shameena K K of 2010 batch secured ONGC scholarship by securing 1st rank in the IIIrd year B.tech (Electronics and communication)of cochin university of science and technology. Our students have also secured admission in IIT`s ,IIM`s, XLRI & NIT`s for M.Tech / MBA / PGDM etc.",
    association:"Students Association of division “WAVES” is actively organizing seminars, Workshops and other technical events regularly. The association is helpful to the students to acquire knowledge and technical skills through various events and programs. A Robotics club is also functioning under the association. Our students have participated and won prizes in the robotics competitions conducted by IIT, Madras. The Association has also organized a workshop on robotics and many students of our institution actively attended the workshop. The `WAVES` is also offering a helping hand to our students for organizing other co- curricular activities.",
    hod: "Our Head of Department, Dr. John Doe, is a renowned figure in the field of AI.",
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/ece/2.jpg"
      branchName="Electronics and Communication"
      subtitle="We are Electronics and we do Communication"
      sectionContent={sectionContent}
      hodPhoto={"https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/ECE/FACULTY%20PICS/02.jpg"}
      hodName={"Dr.ANILKUMAR K. K."}
      hodProfilePath={"/"}
    />
  );
}

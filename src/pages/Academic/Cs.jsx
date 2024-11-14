import React from "react";
import AcademicsTemplate from "../../components/Academics-template";

export default function Cs() {
  const sectionContent = {
    team: "The Division of Computer Science in CUCEK is a proud department with a distinct focus on innovation and promoting excellence in the Computing field. The division started in 1999 mainly conducts an undergraduate program in Computer Science & Engineering with an intake of 60 students. The Undergraduate program offers a dynamic curriculum with a strong emphasis on the design of software. The program offers an extensive background in computer programming languages, computer architecture, and the design and application of computer algorithms. The division is driven by 9 outstanding faculty members with strong excellence in several areas of Computer Science, such as Artificial Intelligence, Computer Networks, Software Engineering, Computer Graphics, and Human-Computer Interaction. Our department is proud of providing outstanding educational programs that combine cutting-edge knowledge in Computer Science with the latest development in Computer Science pedagogy. Our students experience the enthusiasm and innovation that the faculty brings to their classes. The Department has fully fledged and well-equipped laboratories with high-performance computers. To enhance the learning process, students are given one minor project and a multidisciplinary major project during the eight semesters of the B.Tech program. The various labs are Project Lab, Graphics Lab, Hardware Lab, Programming Lab, and System Software Lab, etc.",
    vision: "To transform into a top-notch technological and research institution, molding globally competent versatile professionals with creative minds and sound practical expertise, and to construct a future where technology serves humanity by promoting innovation-centric education and cutting-edge research in Computer Science & Engineering.",
    achievements: "The Division has a good history of campus placements. Our students secured campus placements in multi-national companies like BOCH, MuSigma, Accenture, TCS, and Infosys, etc.",
    association: "Students Association of the division \"ACES- Association of Computer Science & Engineering Students\" actively organizes seminars, workshops, and other technical events regularly. The association helps students acquire knowledge and technical skills through various events and programs.",
    hod: "Our Head of Department, Dr Preetha Mathew is a visionary leader and a pioneer in the field of cryptography",
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/cse/5.jpg"
      branchName="Computer Science"
      subtitle="Your future in our hands"
      sectionContent={sectionContent}
      hodPhoto={"https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/CSE/FACULTY%20PICS/01.jpg"}
      hodName={"Dr.Preetha Mathew"}
      hodProfilePath={"/"}
    />
  );
}

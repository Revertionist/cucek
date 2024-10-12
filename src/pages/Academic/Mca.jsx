import React from "react";
import AcademicsTemplate from "../../components/Academics-template";

export default function Mca() {
  const sectionContent = {
    team: "The Division of Computer Applications was established in the year 2000 in Cochin University College of Engineering Kuttanad under the patronage of CUSAT which gives an opportunity for the youngsters to impart quality education in the sub-fields of IT, a field growing in leaps and bounds. Since its inception, the department has proved itself to be outstanding in imparting quality education in the field of computer applications. The curriculum is so made that the course provides a good theoretical foundation through high quality teaching complemented by extensive practical training. The training objectives and curriculum here are benchmarked to the best of institutions. It is dedicated to the mission of inculcating value-based, socially committed professionalism to the cause of overall development of students and society. We focus on providing strong theoretical and practical lessons to our students with emphasis to the basic concepts. Our department is extremely proud of our well-organized faculties who would take up any challenges and responsibilities and provide guidance to the students for their campus interviews and group discussions. The department remains committed towards its mission, which is twofold. One is to provide students with the fundamental knowledge and problem solving skills in IT required for a fulfilling career. The other goal is to create and disseminate knowledge to improve IT research, education and practice. The students are provided with ample opportunities to improve their organisational skills and group dynamics. They are motivated to handle seminars and to participate in group discussions. Apart from emphasizing on consistent and good academic performance, the department encourages participation in the co-curricular and extra-curricular activities to bring out the latent talents in students. The department is equipped with a group of well-qualified and experienced teachers for handling the various subjects taught throughout the course. The faculty and staff strive together to maintain the quality and discipline of the department by all means, their combined effort and adamant dedication have made the department a centre of excellence for students to pursue the MCA degree.",
    vision: "To impart innovation-oriented education, to build globally competent and socially committed professionals.",
    achievements: "Staff Achievements: MCA HOD , Dr.Preetha Mathew K , has secured PhD in Cryptography from IIT Madras.Students Achievements: Ms. Siji George secured First Rank in the University in Academic year (2006-2009).The top four Rank Holders of the University in the Academic year of 2011-2014 are: 1.Neethu John (First Rank) 2.Preesha Paul (Second Rank) 3.Anjali M (Third Rank) 4.Sheeba S (Fourth Rank) Ms. Aarathi Chandran secured First Rank in the University In Academic year (2012-2015) In every academic year we are achieving 90+ % of results and 75% of placements in the top most IT establishments.",
    association:"SAMCA(Student Association of Master of Computer Applications) takes initiative of all student activities in the department. SAMCA gives emphasis on the curricular and extra-curricular developments of the students. It undertakes activities like organizing seminars, cultural events, IT Fests etc. and conduct special aptitude and soft-skill development training programmes.",
    hod: "Our Head of Department, Dr. John Doe, is a renowned figure in the field of AI.",
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/mca/1.jpg"
      branchName="Masters of Computer Applications"
      subtitle="Weit"
      sectionContent={sectionContent}
      hodPhoto={"https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/IT/FACULTY%20PICS/02.jpg"}
      hodName={"Dr.JABIR K V T"}
      hodProfilePath={"/"}
    />
  );
}

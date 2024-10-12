import React from "react";
import AcademicsTemplate from "../../components/Academics-template";

export default function It() {
  const sectionContent = {
    team: "The impact of Technological advancements on human life is not complete without the role of Information Technology, along all axes. Hence all-pervading nature of Information Technology is culminated with huge demand for education in the said field. The steady rise in the number of students opting to specialize in Information Technology is a testimony for that. Education in Information Technology imparts the knowledge through which the needs of users within an organizational and societal context can be met. Our B.Tech (IT) program provides graduates with the skills and knowledge to take on appropriate professional positions upon graduation. The Division of Information Technology started in the year 1999.The division offers B.tech degree course in I.T with an annual intake of 60 students, with the approval of All India Council For technical Education (AICTE). It also assists the graduates to attain leadership positions and successfully pursue post graduate studies and research in the field. Different core areas of Information Technology that are covered by our curriculum include programming, networking, web systems, information management and human computer interaction. The program is designed in such a way that the graduate develops a practical understanding of the technologies and acquires expertise for a successful career. The vibrant faculty members of the department possess demonstrated expertise in many areas of information technology and flair for teaching different courses. The department consists of a medley of faculty members with industrial and academic experience. In addition to the above, the faculty members’ possess essential attributes of being a good mentor to students.",
    vision: "To transform into a knowledge hub in information technology by creating and exchanging information through leading-edge research and innovation, thereby creating IT professionals, researchers, and entrepreneurs with instilled altruistic values.",
    achievements: "The first rank in B.Tech Information Technology under the University was secured by Ms BINZEER C.K Of 2003 Batch The first rank in B.Tech Information Technology under the University was secured by Sri ANURAG Of 2006 Batch Information Technology is the first department in CUCEK to publish The First Technical Journal which includes many upcoming trends in different technologies. Students of Information Technology department are the consecutive volleyball champions from the year 2014 The second rank in B.Tech Information Technology under the University was secured by Ms RIYA Of 2018 Batch Students of Information Technology department are the overall champions of SATTVA 2020",
    association:"Ours was the first Association of its kind in CUCEK.The Association has conducted the first All Kerala Technical Fest at changanacherry town hall.The department conducts a variety of informative and educative events under the banner IGNITZ. Seminars, value added programs, workshops, quiz and related events are held among students. The association has always been the pioneer in quelling challenges of the chosen fields through research, lectures, self-study, peers and faculty. It actively involves not only in organizing the programs for themselves but also organizes programs such as paper presentations, debugging contests, debates, design contests and exhibitions for the students.",
    hod: "Our Head of Department, Dr. John Doe, is a renowned figure in the field of AI.",
  };

  return (
    <AcademicsTemplate
      image="https://cucek.cusat.ac.in/img/it/1.jpg"
      branchName="Information Technology"
      subtitle="Weit"
      sectionContent={sectionContent}
      hodPhoto={"https://cucek.cusat.ac.in/images/PIC%20&%20SIGN/IT/FACULTY%20PICS/02.jpg"}
      hodName={"Dr.JABIR K V T"}
      hodProfilePath={"/"}
    />
  );
}

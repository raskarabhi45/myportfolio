import React from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import "./education.css";

const education = [
  {
    id: 1,
    date: '2020 - 2024',
    title: "BE in Electronics and Telecommunication Engineering",
    college: "Dr. DY Patil College Of Engineering Akurdi , Pune  ",
    std: "TE in ENTC Engineering",
    score: "8.95/10",
  },
  {
    id: 2,
    date: '2020',
    title: "HSC",
    college: "Vidya Pratishthans Art ,Science And Commerce College, Baramati. ",
    std: "12th Science",
    score: "87.38/100",
  },
  {
    id: 3,
    date: '2018',
    title: "SSC",
    college: "Jyotirling Highschool Gulunche ",
    std: "10th",
    score: "92.30/100",
  },
];

const clubs = [
  {
    id: 1,
    year: '2021 - 2023',
    clubname: "ROBOTICS CLUB (DRAIC)",
    position: "Team Member",
    work1: "• Managed Events of Technical Fest Inertia.",
    work2: "• Participated in The Technoxian World Robotics Championship.",
  },
  {
    id: 2,
    year: '2021-2023',
    clubname: "ENTICERS CLUB",
    position: "President",
    work1:
      " • Managed all Technical as well as Non-Technical Events of Department.",
    work2:
      "• Also we provide the platform for the  overall growth of the students.",
  },
  {
    id: 3,
    year: '2022',
    clubname: "CODING CLUB",
    position: "Team Member",
    work1: "• Arranged some coding related competitions.",
    work2: "• Help Students to get ready with industry releted skills",
  },
];

const Education = () => {
  return (
    <>
      <section id="education">
        <h2>Education & Activities</h2>

        <div class="row">

          <div data-aos="fade-up" className="education">
          <div class="col">
            <h3 class="title">Education</h3>
            
              <div class="row">
                <div class="timeline-box">
                  <div class="timeline shadow-dark">
                    {education.map(
                      ({ id, date, title, college, std, score }) => {
                        return (
                          <>
                            {/* <!-- Timeline item--> */}
                            <div key={id} class="timeline-item">
                              <div class="circle-dot"></div>
                              <h3 class="timeline-date">
                                <i class="fa fa-calendar"></i>{date}
                              </h3>
                              <h3 class="timeline-title">{title}</h3>
                              <p class="timeline-text">{college} </p>
                              <p class="timeline-text">{std} </p>
                              <p class="timeline-text">Score :- {score} </p>
                            </div>
                          </>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
            </div>


            <div data-aos="fade-up" class="experience ">
              <div className="col">
                <h3 class="title">Activities</h3>
                <div class="timeline-box ">
                  <div class="timeline shadow-dark">
                    {clubs.map(
                      ({ id, year,clubname, position,work1,work2}) => {
                        return (
                          <>
                            {/* <!-- Timeline item--> */}
                            <div key={id} class="timeline-item">
                              <div class="circle-dot"></div>
                              <h3 class="timeline-date">
                                <i class="fa fa-calendar"></i>
                                {year}
                              </h3>
                              <p class="timeline-title"> {clubname} </p>
                              <p class="timeline-text"> {position} </p>
                              <p> {work1}</p>
                              <p> {work2}</p>
                            </div>
                          </>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
    
     

      </section>
    </>
  );
};

export default Education;

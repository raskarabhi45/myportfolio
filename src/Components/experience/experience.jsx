import React from "react";
import "./experience.css";

import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div data-aos="flip-down" className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>CSS</h4>
              <small className="text-align">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>Javascript</h4>
              <small className="text-align">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>React</h4>
              <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-align">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>Tailwind</h4>
              <small className="text-align">Beginner</small>
              </div>
            </article>
          </div>

        </div>


        <div data-aos="flip-down" className="experience__backend">

        <h3>Backend Development</h3>

          <div className="experience__content">

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>Java</h4>
              <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>Servlet</h4>
              <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>JSP</h4>
              <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>Mysql</h4>
              <small className="text-align">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>Spring</h4>
              <small className="text-align">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className=".experience__details-icon" />
              <div>
              <h4>SpringBoot</h4>
              <small className="text-align">Beginner</small>
              </div>
            </article>
          </div>

         

        </div>

        <div data-aos="flip-down" className="experience__backend">

<h3>Coding Skills</h3>

  <div className="experience__content">

    <article className="experience__details">
      <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>C</h4>
      <small className="text-align">Experienced</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>C++</h4>
      <small className="text-align">Experienced</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>Java</h4>
      <small className="text-align">Experienced</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>Python</h4>
      <small className="text-align">Experienced</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>Automation</h4>
      <small className="text-align">Intermediate</small>
      </div>
    </article>

    <article className="experience__details">
      <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>Machine Learning</h4>
      <small className="text-align">Beginner</small>
      </div>
    </article>
  </div>

 

       </div> 

       <div data-aos="flip-down" className="experience__backend">

<h3>Coursework</h3>

  <div className="experience__content">

    <article className="experience__details">
      <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>DBMS</h4>
      <small className="text-align">Experienced</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>OOP</h4>
      <small className="text-align">Experienced</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>DSA</h4>
      <small className="text-align">Experienced</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>Operating System</h4>
      <small className="text-align">Intermediate</small>
      </div>
    </article>

    <article className="experience__details">
    <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>Computer Network</h4>
      <small className="text-align">Intermediate</small>
      </div>
    </article>

    <article className="experience__details">
      <AiFillCheckCircle className=".experience__details-icon" />
      <div>
      <h4>System Design</h4>
      <small className="text-align">Beginner</small>
      </div>
    </article>
  </div>


       </div> 


      </div>

      
    </section>
  );
};

export default Experience;

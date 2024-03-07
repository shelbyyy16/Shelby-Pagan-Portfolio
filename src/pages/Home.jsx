import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [about, setAbout] = useState(null);
  const [projects, setProjects] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();

    setAbout(data);
  };

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();

    setProjects(data);
  };

  useEffect(() => {
    getAboutData();
    getProjectsData();
  }, []);

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const loaded = () => (
    <div className="container-fluid p-0">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        id="home"
      >
        <img src="/images/headshot.jpg" className="headshot" alt={about.name} />
        <br></br>
        <h1 className="p-1">Shelby Pagan</h1>
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "Frontend Developer",
            1000,
            "Registered Nurse",
            1000,
            "House Plant Enthusiast",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "1.5em" }}
          repeat={Infinity}
        />
        <div className="py-4">
          <a
            href="/resume/Shelby.Pagan.Resume.pdf"
            download="Shelby.Pagan.Resume.pdf"
          >
            <button>Resume</button>
          </a>
        </div>
        <div className="d-flex gap-3">
          <a
            href="https://www.linkedin.com/in/shelbypagan/"
            className="text-decoration-none"
          >
            <img
              src="/images/linkedin.png"
              className="img-fluid"
              alt="LinkedIn"
            />
          </a>
          <a
            href="mailto:shelby.e.pagan@gmail.com"
            className="text-decoration-none"
          >
            <img src="/images/email.png" className="img-fluid" alt="GitHub" />
          </a>
          <a
            href="https://github.com/shelbyyy16"
            className="text-decoration-none"
          >
            <img src="/images/github.png" className="img-fluid" alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start" id="about-me">
      
        <div className="left-aligned-text p-4">
          <h1>About Me</h1>
          <p className="left-aligned-text ">
            Full Stack Developer and former Critical Care Nurse with a strong
            track record of working in fast-paced environments. Along the way, I
            have developed a{" "}
            <span id="color">
              passion for problem-solving, attention to detail, and the ability
              to stay calm under pressure.
            </span>{" "}
            Proficient in frontend and backend development, with a keen eye for
            design and a commitment to delivering{" "}
            <span id="color">high-quality code.</span> My journey is a testament
            to the idea that career transitions are possible with determination
            and a commitment to learning. I am excited to be a part of the
            ever-evolving tech world, where I can leverage my diverse
            experiences to <span id="color">create solutions that matter.</span>
          </p>
        </div>
        <span id="spacer"></span>
        <span id="spacer"></span>
        <div className="container">
          <div className="field">
            <div className="scroll"></div>
          </div>
        </div>
        <br></br>
        <span id="spacer"></span>
        <span id="spacer"></span>
        <span id="spacer"></span>
        <div id="projects" className="d-flex flex-column align-items-start">
          <div className="left-aligned-text">
            <h1>Projects</h1>
          </div>
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="row">
                <div className="col-md-6 mt-5 p-0">
                  <div className="card-body mt-5 p-0">
                    <h4 className="card-title p-0 mx-3 my-4 left-aligned-text">
                      <span id="color">{project.name}</span>
                    </h4>
                    <p className="card-text p-0 mx-3 left-aligned-text">
                      {project.description}
                    </p>
                    <div className="py-4 left-aligned-text mx-3">
                      <a href={project.git}>
                        <button>GitHub</button>
                      </a>
                      <a href={project.live}>
                        <button className="button mx-5">Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    className="project-img"
                    src={project.image}
                    alt={project.description}
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column align-items-start" id="skills">
        <div className="left-aligned-text mx-5">
          <h1>Skills</h1>
        </div>
        <br></br>
        <br></br>
        <span id="color" className="mx-5">
          <h4>Languages</h4>
        </span>
        <div className="mx-5 py-3">
          <button className="button-skills mx-1">JavaScript</button>
          <button className="button-skills mx-1">Python</button>
          <button className="button-skills mx-1">HTML/CSS</button>
          <button className="button-skills mx-1">SQL</button>
          <button className="button-skills mx-1">TypeScript</button>
        </div>
        <br></br>
        <br></br>
        <span id="color" className="mx-5">
          <h4>Frameworks</h4>
        </span>
        <div className="mx-5 py-3">
          <button className="button-skills mx-1">React</button>
          <button className="button-skills mx-1">React Native</button>
          <button className="button-skills mx-1">Django</button>
          <button className="button-skills mx-1">Node.js</button>
          <button className="button-skills mx-1">Express.js</button>
          <button className="button-skills mx-1">jQuery</button>
        </div>
        <br></br>
        <br></br>
        <span id="color" className="mx-5 py-3">
          <h4>Databases</h4>
        </span>
        <div className="mx-5">
          <button className="button-skills mx-1">PostgreSQL</button>
          <button className="button-skills mx-1">MongoDB</button>
        </div>
      </div>
    </div>
  );

  return about && projects ? loaded() : <h1>Loading...</h1>;
}

export default Home;

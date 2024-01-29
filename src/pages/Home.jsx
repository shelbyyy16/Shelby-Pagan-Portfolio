import React, { useState, useEffect } from "react";

function Home() {
  const [about, setAbout] = useState(null);
  const [projects, setProjects] = useState(null);

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

  const loaded = () => (
    <div className="container-fluid">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        id="home"
      >
        <img src="/images/headshot.jpg" className="headshot" alt={about.name} />
        <br></br>
        <h1>&lt;Shelby Pagan&gt;</h1>
        <h3>Software Engineer</h3>
        <br></br>
        <button>Resume</button>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        id="about-me"
      >
        <h1>&lt;/About Me&gt;</h1>
        <p>
          Full Stack Developer and former Critical Care Nurse with a strong
          track record of working in fast-paced environments. Along the way, I
          have developed a passion for problem-solving, attention to detail, and
          the ability to stay calm under pressure. Proficient in frontend and
          backend development, with a keen eye for detail and a commitment to
          delivering <strong>high-quality code.</strong> My journey is a
          testament to the idea that career transitions are possible with
          determination and a commitment to learning. I am excited to be a part
          of the ever-evolving tech world, where I can leverage my diverse
          experiences to <strong>create solutions that matter.</strong>
        </p>
        <br></br>
        <div className="d-flex">
          <button>Skills</button>
          <button>Projects</button>
        </div>
        <span id="spacer"></span>
        <div id="projects" className="row row-cols-1 row-cols-md-2 g-4">
          <h1 className="text-center">&lt;/Projects&gt;</h1>
          <span id="spacer"></span>
          {projects.map((project) => (
            <div id="projects" key={project.id}>
              <div className="card" style={{ width: "32rem" }}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.description}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text" style={{ padding: "0rem" }}>
                    {project.description}
                  </p>
                  <div className="btn-group" role="group">
                  <a href={project.git}>
                    <button>Github</button>
                  </a>
                  <a href={project.live}>
                    <button>Visit</button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="skills">{/* ... Skills content */}</div>
    </div>
  );

  return about && projects ? loaded() : <h1>Loading...</h1>;
}

export default Home;

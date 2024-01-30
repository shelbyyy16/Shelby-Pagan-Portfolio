import React, { useState, useEffect } from "react";

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
        <h1>&lt;Shelby Pagan&gt;</h1>
        <h3>Software Engineer</h3>
        <br></br>
        <a href="/resume/Shelby.Pagan.Resume.pdf" download="Shelby.Pagan.Resume.pdf">
        <button>Resume</button>
        </a>
        <br></br>
        <div className="d-flex gap-3">
        <a href="https://www.linkedin.com/in/shelbypagan/" className="text-decoration-none">
          <img src="/images/linkedin.png" className="img-fluid" alt="LinkedIn" />
        </a>
        <a href="mailto:shelby.e.pagan@gmail.com" className="text-decoration-none">
          <img src="/images/email.png" className="img-fluid" alt="GitHub" />
        </a>
        <a href="https://github.com/shelbyyy16" className="text-decoration-none">
          <img src="/images/github.png" className="img-fluid" alt="GitHub" />
        </a>
    
      </div>
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

        <div className="d-flex">
         <a href="#skills"><button>Skills</button></a>
         <a href="#projects"><button>Projects</button></a>
        </div>
        <span id="spacer"></span>
        <span id="spacer"></span>
        <span id="spacer"></span>
        <span id="spacer"></span>
        <div className="text-center">
          <h1>&lt;/Projects&gt;</h1>
        </div>
        <span id="spacer"></span>
        <div id="projects" className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col p-4"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card h-100">
                <img
                  src={project.image}
                  className={`card-img-top ${hoveredProject === project.id ? "color" : "black-and-white"}`}
                  alt={project.description}
                  
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text p-0">{project.description}</p>
                  <div className="d-grid gap-2 d-md-block">
                    <a href={project.git}>
                      <button>GitHub</button>
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
      <div id="skills">
      <div className="text-center">
      <h1>&lt;/Skills&gt;</h1>
      </div>
      <br></br>
      <br></br>
      <table className="table table-striped-columns" id="table">
    <thead>
      <tr>
        <th><h4>Languages</h4></th>
        <th><h4>Frameworks</h4></th>
        <th><h4>Databases</h4></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>JavaScript</td>
        <td>React</td>
        <td>SQL</td>
      </tr>
      <tr>
        <td>Python</td>
        <td>Node.js</td>
        <td>MongoDB</td>
      </tr>
      <tr>
        <td>HTML/CSS</td>
        <td>Express.js</td>
        <td>PostgreSQL</td>
      </tr>
      <tr>
        <td>SQL</td>
        <td>Django</td>
        <td></td>
      </tr>
      <tr>
        <td>Typescript</td>
        <td>Jquery</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>

  );

  return about && projects ? loaded() : <h1>Loading...</h1>;
}

export default Home;


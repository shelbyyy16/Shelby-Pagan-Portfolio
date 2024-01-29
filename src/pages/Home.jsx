import { useState, useEffect } from "react";

function Home() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="container-fluid">
        <div className=" d-flex flex-column justify-content-center align-items-center" id="home">
          <img
            src="/images/headshot.jpg"
            className="headshot"
            alt={about.name}
          />
          <br></br>
          <h1>&lt;Shelby Pagan&gt;</h1>
          <h3>Software Engineer</h3>
          <br></br>
          <button>Resume</button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center" id="about-me">
          <h1>&lt;/About Me&gt;</h1>
          <p>Full Stack Developer and former Critical Care Nurse with a strong track record of working in fast-paced environments. Along the way, I have developed a passion for problem-solving, attention to detail, and the ability to stay calm under pressure. Proficient in frontend and backend development, with a keen eye for detail and a commitment to delivering <strong>high-quality code.</strong> My journey is a testament to the idea that career transitions are possible with determination and a commitment to learning. I am excited to be a part of the ever-evolving tech world, where I can leverage my diverse experiences to <strong>create solutions that matter.</strong></p>
          <br></br>
          <div className="d-flex">
            <button>Skills</button>
            <button>Projects</button>
          </div>
        </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default Home;
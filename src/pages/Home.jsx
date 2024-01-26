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
    <div className="row" style={{ height: "100vh" }}>
      <div className="col-6 d-flex flex-column justify-content-center align-items-center">
        <img src={about.headshot} className="headshot" alt={about.name} />
        <h1>Shelby Pagan</h1>
        <h3>Software Engineer.</h3>
        <br></br>
        <button>Resume</button>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center align-items-center" id="about-me">
        <h1>About Me</h1>
        {about.bio}
        <br></br>
        <button>Skills</button>
        <button>Projects</button>
      </div>
    </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default Home;
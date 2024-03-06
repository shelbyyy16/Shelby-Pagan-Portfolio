import React, { useState, useEffect } from "react";


function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#ddcfc1',
  };

  const [isNavBarVisible, setNavBarVisibility] = useState(false);
  const [isNavBarSticky, setNavBarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled > 100) {
        setNavBarVisibility(true);
        setNavBarSticky(true);
      } else {
        setNavBarVisibility(false);
        setNavBarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);


    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar bg-body-tertiary p-0 ${isNavBarSticky ? "sticky" : ""} ${isNavBarVisible ? "visible" : "hidden"}`}>
        <div className="container-fluid d-flex justify-content-end p-0" style={{ backgroundColor: '#1c1a1a', height: '3rem'  }}>
          <div className="col-md-8 h-100" style={{ backgroundColor: '#1c1a1a', height: '3rem' }}>
            <ul className="navbar-nav d-flex flex-row custom-nav justify-content-end">
              <li className="nav-item px-5">
                <a href="#about-me" id="nav-link" style={linkStyle}>
                  <div className="py-2">About</div>
                </a>
              </li>
              <li className="nav-item px-5">
                <a href="#projects" style={linkStyle}>
                  <div className="py-2" id="nav-link">Projects</div>
                </a>
              </li>
              <li className="nav-item px-5">
                <a href="#skills" style={linkStyle}>
                  <div className="py-2" id="nav-link">Skills</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

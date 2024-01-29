import { Link } from "react-router-dom";

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <header>
      <nav className="navbar bg-body-tertiary p-0">
        <div className="container-fluid d-flex justify-content-end p-0"  style={{ backgroundColor: '#ffff' }}>
          <div className="col-md-8 h-100" style={{ backgroundColor: '#f5f6f5' }}>
            <ul className="navbar-nav d-flex flex-row custom-nav justify-content-end">
              <li className="nav-item px-5">
                <Link to="#about-me" style={linkStyle}>
                  <div>1. About</div>
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link to="#projects" style={linkStyle}>
                  <div>2. Projects</div>
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link to="#skills" style={linkStyle}>
                  <div>3. Skills</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 w-100 h-100"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
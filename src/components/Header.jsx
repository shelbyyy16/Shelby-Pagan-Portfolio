import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav d-flex flex-row custom-nav">
            <li className="nav-item px-2">
              <Link to="/about">
                <div>1. About</div>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/projects">
                <div>2. Projects</div>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/skills">
                <div>3. Skills</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;




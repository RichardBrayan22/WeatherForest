import './styles.css';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <h4 className="nav-logo-text">Weather App</h4>
        <span>
          <span className="made">Made By: </span>
          <span className="name">Richard Brayan</span>
          <a
            href="https://www.linkedin.com/in/richard-brayan/"
            className="icon icon-linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RichardBrayan22"
            className="icon icon-git"
          >
            <FaGithubSquare />
          </a>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;

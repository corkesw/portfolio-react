import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <h1>
            <a>Stephen Corke</a>
          </h1>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/stephen-corke-12505a221">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/corkesw"><FontAwesomeIcon icon={faGithub}/></a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

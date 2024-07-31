import { useState } from "react";

interface Props {
  fullName: string;
}

function Header({ fullName }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav id="desktop-nav">
          <div className="logo">{fullName}</div>
          <div>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div className="logo">B. Zahra Hashimi</div>
          <div className="hamburger-menu">
            <div
              className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

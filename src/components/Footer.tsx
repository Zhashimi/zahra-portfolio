interface Props {
  fullName: string;
}

function Footer({ fullName }: Props) {
  return (
    <>
      <footer id="footer">
        <nav>
          <div className="nav-links-container">
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
        <p>
          Copyright &#169; {new Date().getFullYear()} {fullName}. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;

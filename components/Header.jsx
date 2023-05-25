import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="header_container">
        <div className="header_logo">
          <a href="#hero">
            {" "}
            <FontAwesomeIcon
              icon={faCakeCandles}
              style={{ marginRight: "15px", color: "lightpink" }}
            />
            Ciochowe Ciacho
          </a>
        </div>
        <input type="checkbox" name="menu" id="menu" className="hamburger" />
        <nav className="header_navigation">
          <ul>
            <li>
              <a href="#hero">Strona Główna</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

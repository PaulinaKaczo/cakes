import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

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
              <a href="#about-me">O mnie</a>
            </li>
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="#taste">Smaki</a>
            </li>
            <li>
              <a href="#prices">Cennik</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

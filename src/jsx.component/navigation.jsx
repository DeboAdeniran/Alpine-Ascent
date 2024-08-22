import React, { useRef } from "react";
import logo from "../svg.component/alpineascent.svg";
import visited from "../svg.component/visited.svg";
import close from "../svg.component/close.svg";
import menu from "../svg.component/menu.svg";

function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    if (
      navRef.current.classList.contains("responsive_nav") &&
      window.matchMedia("(max-width: 1024px)").matches
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="navbar">
      <div className="navSection">
        <ul>
          <li>
            <img src={logo} alt="Alpine Ascent Logo" height="32px" />
          </li>
          <li className="logo_words">Alpine Ascent</li>
        </ul>
      </div>

      <div>
        <div className="navSection nav " ref={navRef}>
          <ul className="links">
            <li>
              <a href="#" onClick={showNavbar}>
                Home
              </a>
            </li>
            <li>
              <a href="#organization" onClick={showNavbar}>
                Organization
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={showNavbar}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#guidelines" onClick={showNavbar}>
                Guidelines
              </a>
            </li>
          </ul>
          <ul>
            <li>0</li>
            <li>
              <img src={visited} alt="Visitor Icon" />
            </li>
          </ul>
          <img
            src={close}
            className="nav-btn nav-close-btn"
            onClick={showNavbar}
          />
        </div>
      </div>
      <img src={menu} className="nav-btn " onClick={showNavbar} />
    </div>
  );
}

export default Navigation;

import { useState } from "react";
import "./header.css";

window.addEventListener("scroll", function () {
  const scrollup = document.querySelector(".scrollup");
  if (this.scrollY >= 560) scrollup.classList.add("show_scroll");
  else scrollup.classList.remove("show_scroll");
});

const Header = () => {
  // Change Background of Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when scrollY of header is greater than 200 we add box shadow and change background
    if (this.scrollY >= 80) header.classList.add("header-scroll");
    else header.classList.remove("header-scroll");
  });
  // toggle menu
  const [toggle, showMenu] = useState(false);
  // set active links
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Smith
        </a>
        <div className={toggle ? "show_menu nav_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="list_item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate nav_icon"></i> HOME
              </a>
            </li>
            <li className="list_item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user nav_icon"></i> ABOUT
              </a>
            </li>
            <li className="list_item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt nav_icon"></i> SKILLS
              </a>
            </li>
            <li className="list_item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav_link active_link"
                    : "nav_link"
                }
                onClick={() => setActiveNav("#services")}
              >
                <i className="uil uil-briefcase-alt nav_icon"></i> SERVICES
              </a>
            </li>
            <li className="list_item">
              <a
                href="#portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav_link active_link"
                    : "nav_link"
                }
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav_icon"></i> PORFOLIO
              </a>
            </li>
            <li className="list_item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message nav_icon"></i> CONTACTS
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps "></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useState } from "react";
import "./header.css";
const Header = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Smith
        </a>
        <div className={toggle ? "show_menu nav_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="list_item">
              <a href="#home" className="nav_link active_link">
                <i className="uil uil-estate nav_icon"></i> HOME
              </a>
            </li>
            <li className="list_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> ABOUT
              </a>
            </li>
            <li className="list_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> SKILLS
              </a>
            </li>
            <li className="list_item">
              <a href="#services" className="nav_link">
                <i className="uil uil-briefcase-alt nav_icon"></i> SERVICES
              </a>
            </li>
            <li className="list_item">
              <a href="#portfolio" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i> PORFOLIO
              </a>
            </li>
            <li className="list_item">
              <a href="#contact" className="nav_link">
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

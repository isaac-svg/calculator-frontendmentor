import React from "react";
import "./header.css";

const Header = ({ setTheme }) => {
  function themeFunc(id) {
    // this function stores the theme in the localStroage and resets the theme
    setTheme(id);
    localStorage.setItem("theme", id);
  }
  return (
    <section className="header">
      <div className="logo">calc</div>
      <div className="themes">
        <span className="title">THEME</span>
        <div className="theme-swichers">
          <div className="numbers">
            <span className="number ">1</span>
            <span className="number">2</span>
            <span className="number">3</span>
          </div>
          <div className="indicator">
            <input
              className="roller visible "
              type="checkbox"
              id="theme1"
              onClick={(e) => themeFunc(e.target.id)}
            />
            <input
              className="roller"
              id="theme2"
              type="checkbox"
              onClick={(e) => themeFunc(e.target.id)}
            />
            <input
              className="roller"
              id="theme3"
              type="checkbox"
              onClick={(e) => themeFunc(e.target.id)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

import React, { useEffect, useRef } from "react";
import "./header.css";

const Header = ({ setTheme, theme }) => {
  const themeOneRef = useRef(null)
  const themeTwoRef = useRef(null)
  const themeThreeRef = useRef(null)

  function themeFunc(id) {
    // this function stores the theme in the localStroage and resets the theme
    setTheme(id);
    localStorage.setItem("theme", id);
  }

  useEffect(()=>{
    const currTheme = localStorage.getItem("theme")

    if (currTheme === "theme2"){
      themeTwoRef.current.focus()
    }
    else if (currTheme === "theme3")
    {
      themeThreeRef.current.focus()
    }
    else{
      themeOneRef.current.focus()
    }
  },[])
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
              className="roller roller1"
              type="checkbox"
              id="theme1"
              ref={themeOneRef}
              // autoFocus={!!(theme == "theme1")}
              onClick={(e) => themeFunc(e.target.id)}
            />
            
            <input
              className="roller roller2"
              id="theme2"
              type="checkbox"
              ref={themeTwoRef}
              // autoFocus={!!(theme == "theme2")}
              onClick={(e) => themeFunc(e.target.id)}
            />
            <input
              className="roller roller3"
              id="theme3"
              type="checkbox"
              ref={themeThreeRef}
              // autoFocus={!!(theme == "theme3")}
              onClick={(e) => themeFunc(e.target.id)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

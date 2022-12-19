import React, { useEffect, useRef, useState } from "react";
import CalcualtorFunc from "./CalcualtorFunc";
import "./Theme.css";
export default function App() {
  const [active, setActive] = useState(true);
  const refScreen = useRef(null);
  const mainContainer = useRef(null);
  useEffect(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    btns.forEach((btn) => {
      btn.addEventListener("click", () => CalcualtorFunc(btn, refScreen));
    });
    let theme = localStorage.getItem("theme");

    if (!theme) {
      theme = "main";
    }

    mainContainer.current.className = theme;
  }, []);

  // Clear the class "main"
  function clearClass(theme) {
    theme = theme.slice(0, 4);
    localStorage.removeItem("theme");
    mainContainer.current.className = theme;
  }

  //

  //
  function handleBackground(e) {
    //

    const mainClass = mainContainer.current.className;

    if (e.target.id === "one") {
      clearClass(mainClass);

      mainContainer.current.classList.add("theme1");

      localStorage.setItem("theme", mainContainer.current.classList);
    } else if (e.target.id === "two") {
      clearClass(mainClass);

      mainContainer.current.classList.add("theme2");
      localStorage.setItem("theme", mainContainer.current.classList);
    } else if (e.target.id === "three") {
      clearClass(mainClass);

      mainContainer.current.classList.add("theme3");

      localStorage.setItem("theme", mainContainer.current.classList);
    }
  }
  return (
    <main className="main" ref={mainContainer}>
      <div className="calc-container">
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
                <button
                  className="roller visible "
                  id="one"
                  onClick={handleBackground}
                ></button>
                <button
                  className="roller"
                  id="two"
                  onClick={handleBackground}
                ></button>
                <button
                  className="roller"
                  id="three"
                  onClick={handleBackground}
                ></button>
              </div>
            </div>
          </div>
        </section>
        {/* screen */}
        <span className="screen" ref={refScreen}></span>

        <section className="keyboard">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="special-key">DEL</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>x</button>
          <button className=" span-2 special-key">RESET </button>
          <button className=" span-2 equal">=</button>
        </section>
      </div>
    </main>
  );
}

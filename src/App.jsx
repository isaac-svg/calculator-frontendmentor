import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import CalcualtorFunc from "./CalcualtorFunc";
import Calcualtor from "./Calculator";
import Header from "./Header";
import "./Theme.css";

export default function App() {
  const [active, setActive] = useState(true);
  const [theme, setTheme] = useState("");
  const refScreen = useRef(null);
  // const elementToFocusRef = useRef(null);

  const mainContainer = useRef(null);

  // Clear the class "main"
  function clearClass(theme) {}

  //


 
  useEffect(() => {
    const storedTheme  = localStorage.getItem("theme");

    if (storedTheme){
      setTheme(storedTheme)
    }
    // get the preffered  color scheme of the user
   else {
    if(window.matchMedia("prefers-color-scheme: dark"))
    {
      setTheme("theme1")
    }
    else{
      setTheme("theme2")
    }
   }

  }, []);
  console.log(theme, "theme");
  return (
    <main className={`main ${theme}`} ref={mainContainer}>
      <div className="calc-container">
        <Header setTheme={setTheme}  theme={theme}/>
        <Calcualtor />
      </div>
    </main>
  );
}

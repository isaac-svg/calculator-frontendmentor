import React, { useEffect, useState } from "react";
import CalcualtorFunc from "./CalcualtorFunc";

const Button = ({ value, style }) => {
  const [screen, setScreen] = useState("");
  useEffect(() => {
    setScreen(document.getElementById("screen"));
  }, []);
  return (
    <button
      className={style}
      onClick={(e) => {
        CalcualtorFunc(e.target, screen);
      }}
    >
      {value}
    </button>
  );
};

export default Button;

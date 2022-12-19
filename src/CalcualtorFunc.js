export default function CalcualtorFunc(btn, refScreen) {
  if (btn.innerText === "RESET") {
    refScreen.current.innerText = "";
  } else if (btn.innerText === "=") {
    try {
      let checker = refScreen.current.innerText.split("");
      if (checker.includes("x")) {
        let placeholder = "";
        const modifiedArray = checker.map((key) => {
          if (key == "x") {
            key = "*";
          } else {
            key = key;
          }
          return (placeholder += key);
        });

        refScreen.current.innerText = eval(placeholder);
      } else if (refScreen.current.innerText.startsWith("0")) {
        let placeholder = "";
        const modifiedArray = Array.from(refScreen.current.innerText);
        modifiedArray.shift();
        modifiedArray.map((key) => {
          return (placeholder += key);
        });

        refScreen.current.innerText = eval(placeholder);
      }
      refScreen.current.innerText = eval(refScreen.current.innerText);
    } catch (error) {
      refScreen.current.innerText = "Syntax Error";
    }
  } else if (btn.innerText === "DEL") {
    const newEls = Array.from(refScreen.current.innerText);
    if (refScreen.current.innerText === "Syntax Error") {
      refScreen.current.innerText = " ";
    } else if (
      refScreen.current.innerText === "Infinity" ||
      refScreen.current.innerText === "-Infinity" ||
      refScreen.current.innerText === "undefined"
    ) {
      refScreen.current.innerText = " ";
    } else {
      refScreen.current.innerText = String(
        newEls.splice(0, newEls.length - 1).join("")
      );
    }
  } else {
    if (refScreen.current.innerText === "Syntax Error") {
      refScreen.current.innerText = btn.innerText;
    }
    refScreen.current.innerText += btn.innerText;
  }
}

export default function CalcualtorFunc(btn, refScreen) {
  if (btn.innerText === "RESET") {
    refScreen.innerText = "";
  } else if (btn.innerText === "=") {
    try {
      let checker = refScreen.innerText.split("");
      if (checker.includes("x")) {
        let placeholder = "";
        const modifiedArray = checker.map((key) => {
          if (key == "x") {
            key = "*";
          }
          return (placeholder += key);
        });
        // eval has huge impact on the optimisation of the compiler
        refScreen.innerText = eval(placeholder);
      } else if (refScreen.innerText.startsWith("0")) {
        let placeholder = "";
        const modifiedArray = Array.from(refScreen.innerText);
        modifiedArray.shift();
        modifiedArray.map((key) => {
          return (placeholder += key);
        });

        refScreen.innerText = eval(placeholder);
      }
      refScreen.innerText = eval(refScreen.innerText);
    } catch (error) {
      refScreen.innerText = "Syntax Error";
    }
  } else if (btn.innerText === "DEL") {
    const newEls = Array.from(refScreen.innerText);
    // if the string has a text it resets the screen else it removes the first element
    refScreen.innerText === "Syntax Error" ||
    refScreen.innerText === "Infinity" ||
    refScreen.innerText === "-Infinity" ||
    refScreen.innerText === "undefined"
      ? (refScreen.innerText = " ")
      : (refScreen.innerText = String(
          newEls.splice(0, newEls.length - 1).join("")
        ));
  } else {
    if (refScreen.innerText === "Syntax Error") {
      refScreen.innerText = btn.innerText;
    }
    refScreen.innerText += btn.innerText;
  }
}

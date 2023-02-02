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

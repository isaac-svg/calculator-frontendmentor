# Frontend Mentor - Calculator app solution
# DISCLAIMER - First Version Performance not regarded here no best practices considered just needed a working version. Changes will be made
This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

*

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.jpg)
![](src/assets/images/ThemeOne.png)
![](src/assets/images/ThemeTwo.png.png)
![](src/assets/images/ThemeThree.png)
![](src/assets/images/ThemeOne-mobile.png)
![](src/assets/images/ThemeTwo-mobile.png.png)
![](src/assets/images/ThemeThree-mobile.png)







### Links

- Solution URL: https://www.frontendmentor.io/solutions/calculator-app-30PTn3AfAx
- Live Site URL: https://installable-calculator.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

- [React](https://reactjs.org/) - JS library




### What I learned



I learnt how to implement three themes in an application which is was my first time of trying that 


```css
.proud-of-this-css {
  color: papayawhip;
}
```
I learnt to use the js arrray methods well not 
```js
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

}
```




### Continued development
1.ACCESIBILITY
2.COMPLETE RESPONSIVENESS
3.PERFORMANCE ENHANCEMENT
4.PWA





**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - (https://installable-calculator.netlify.app/)
- Frontend Mentor -(https://www.frontendmentor.io/profile/isaac-svg)


## Acknowledgments
MDN - (https://developer.mozilla.org/en-US/)

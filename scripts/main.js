const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable = "Bob";

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(0, 55);

// document.querySelector("html").onclick = function() {
//   alert("Ouch! Stop poking me!");
// };

let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/deku.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading2.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading2.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
};

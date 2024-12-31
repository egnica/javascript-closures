const element = document.createElement("span");
element.innerText = "Hello world - (appended element)";
document.body.appendChild(element);
// *******************************************************************//
// Id and Class selectors

// Element with ID
const divWithId = document.getElementById("div-id");
divWithId.style.color = "red";

// Element with Class
const divsWithClass = document.getElementsByClassName("div-class");

// turned into an actual array
const divsWithClassArray = Array.from(divsWithClass);
divsWithClassArray.forEach((div) => (div.style.color = "green"));

// single element in the class
divsWithClass[0].style.color = "blue";
divsWithClass[0].innerHTML = "Changed text";

// *******************************************************************//

// Query Selectors
const dataAttributeElement = document.querySelector("[data-test]");
console.log(dataAttributeElement);

// this does work like an array for forEach() right out the gate, unlike getElementByClass. But doesn't work for everything
const divsWithClassTwo = document.querySelectorAll(".div-class-2");
console.log(divsWithClassTwo);
divsWithClassTwo.forEach((div) => (div.style.color = "purple"));

const input = document.querySelector("[name-test]");
console.log(input);

// *******************************************************************//

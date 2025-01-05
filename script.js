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

// *******************************************************************//

// Add event listener 'click'

const btn = document.querySelector("[data-btn]");
const input = document.querySelector("[data-input-text]");
const printBrowser = document.querySelector("[write-input]");
const printBrowserList = document.querySelector("[write-input-list]");
let inputText = "";
const inputArr = [];
btn.addEventListener("click", (e) => {
  inputText = input.value;
  console.log(inputText);
  inputArr.push(inputText);
  printBrowser.innerHTML = inputText;
  printBrowserList.innerHTML = inputArr;

  console.log(inputArr);

  input.value = "";
});

// ** This doesn't run updated variable log because it runs right when the page is loaded, and only that one time **  console.log(inputText);
//btn.removeEventListener("click", printClick);

// *******************************************************************//

let countTotal = 0;
let btnOne = 0;
let btnTwo = 0;
let btnThree = 0;
const btnsForCount = document.querySelectorAll("[btn-count]");
const printCount = document.querySelector("[click-amount]");
const btnOnePrint = document.querySelector("[btn-one-print]");
const btnTwoPrint = document.querySelector("[btn-two-print]");
const btnThreePrint = document.querySelector("[btn-three-print]");

btnsForCount.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    countTotal++;
    printCount.innerHTML = countTotal;

    btn.dataset.btnVal == "1"
      ? btnOne++
      : btn.dataset.btnVal == "2"
      ? btnTwo++
      : btn.dataset.btnVal == "3"
      ? btnThree++
      : null;

    btnOnePrint.innerHTML = btnOne;
    btnTwoPrint.innerHTML = btnTwo;
    btnThreePrint.innerHTML = btnThree;
  })
);

/*
To access custom attributes using dataset, the attribute name in the HTML must start with 'data-'
*/



const form = document.getElementById("new-item-form");
const input = document.getElementById("item-input");
const listDiv = document.getElementById("list");
const listArray = [];

const printArray = (array) => {
  listDiv.innerHTML = ""; // Clear previous list items in the div before re-rendering
  const pTag = document.createElement("p");
  array.forEach((item, index) => {
    const pTag = document.createElement("p"); // Create a new <p> for each item
    pTag.className = "list-item";
    pTag.innerText = item;
    listDiv.appendChild(pTag);
  });
};

const formEvent = form.addEventListener("submit", (e) => {
  e.preventDefault();
  listArray.push(input.value);
  printArray(listArray);
  input.value = "";
});

listDiv.addEventListener("click", (e) => {
  const selectedItem = e.target.innerText;
  listArray.forEach((item, index) => {
    selectedItem == item && listArray.splice(index, 1);
  });
  printArray(listArray);
});

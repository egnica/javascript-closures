console.log("test");
// Create a variable that contains an array.
const thisArray = ["one", "two", "three", "four", "five"];
// Using an if statement with else if I want you to check the length of the array

// If it is empty print out "empty"
// If it has less than 5 elements print out "small"
// If it has less than 10 elements print out "medium"
// Otherwise print out "large"
const arrayLength = thisArray.length;

arrayLength == ""
  ? console.log("empty")
  : arrayLength < 5
  ? console.log("small")
  : arrayLength < 10
  ? console.log("medium")
  : console.log("large");

for (let x = 0; x < 11; x++) {
  if (x == 5) break;
  console.log(x);
}

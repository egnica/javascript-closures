//fibonacci sequence
// not recursive

//This version the number entered into the function returns the fibonacci sequence up to that number.
function fibSequence(num, fibArray = [0, 1]) {
  while (fibArray[fibArray.length - 1] < num) {
    const [num1, num2] = fibArray.slice(-2);
    let numberCheck = num1 + num2;
    fibArray.push(numberCheck);
  }
  if (fibArray[fibArray.length - 1] > num) {
    fibArray.pop();
  }
  return fibArray;
}

console.log(fibSequence(50));

// This version the number entered in the function returns the fibonacci sequence to that many places
function fibSeqPlaces(num, fibArray = [0, 1]) {
  while (fibArray.length < num) {
    const [num1, num2] = fibArray.slice(-2);
    let totalNum = num1 + num2;
    fibArray.push(totalNum);
  }
  return fibArray;
}
console.log(fibSeqPlaces(15));

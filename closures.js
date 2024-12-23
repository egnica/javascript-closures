/**     CLOSURES */

let a = 2;

function print() {
  console.log(a);
}

a = 3;

print();
/* -----------------------------------------------------------------------*/
function printSecond(variable) {
  return function func(variable2) {
    console.log(variable);
    console.log(variable2);
  };
}

let callThis = printSecond(1);
callThis(2);
/* -----------------------------------------------------------------------*/

// This function is confusing

function outerFunction(outerVariable) {
  console.log(outerVariable);
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}
outerFunction("test1");

const closureFunc = outerFunction("outside");
closureFunc("inside");

outerFunction("test2");

// Better example
function human(name) {
  function sayHi() {
    console.log(`Hi, my name is ${name}`);
  }
  function sayHowYouFeel() {
    console.log(`${name} is feeling Great!`);
  }
  sayHi();
  sayHowYouFeel();
}
human("Bob");

// another weird function
// var get hoisted up into the parent scope in the for loop, if let was used it would look as it was supposed to
for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}

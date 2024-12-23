function outerFunction(outerVariable) {
  console.log(outerVariable);
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const closureFunc = outerFunction("outside");
closureFunc("inside");

# Closures

functions inside of functions typically 

In JavaScript, when a function returns another function, you need to:
- Capture the returned function (assign it to a variable or chain it directly).
- Invoke the returned function to see the effect.

depends on a variable outside of it's scope

when you have a function defined inside another function, the inner function has access to variables and scope of the outer function, even if that function finishes executing 

Each call to outerFunction creates its own scope and closure. The innerFunction retains access to the specific outerVariable from the scope where it was created.


```js
function outerFunction(outerVariable) {
    console.log(outerVariable);
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const closureFunc = outerFunction("outside");
closureFunc("inside");
```

## total breakdown of whats happening:
```js 
function outerFunction(outerVariable) {
```
outerFunction() has one parameter called outerVariable. This parameter is a placeholder that will hold the value of the argument passed to outerFunction when it is called.
```js 
console.log(outerVariable);
```
This console.log is inside the scope of outerFunction(), so it can access the outerVariable parameter.

The outerVariable is available to innerFunction() because of closure, which allows the inner function to access variables in the scope of outerFunction(), even after outerFunction() has finished running.
```js 
return function innerFunction(innerVariable) {
```
This line is saying that outerFunction() will return another function called innerFunction(). When outerFunction() is called, it doesn’t return a value like a string or a number, it returns the entire innerFunction().

innerFunction() takes one parameter: innerVariable. Just like outerVariable belongs to outerFunction, innerVariable belongs to innerFunction. When innerFunction() is returned, it carries with it access to outerVariable because of a closure.

outerFunction() doesn’t execute innerFunction immediately. It just prepares and hands it back to you for later use. At this point, we’re just setting up the innerFunction to be returned when outerFunction is called.

```js 
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
```
Both lines use template literals (backticks: ``) to log values dynamically. The placeholders ${} are replaced with the actual values of outerVariable and innerVariable.

The first line shows that innerFunction() still has access to outerVariable (because of the closure).
The second line shows the value of the innerVariable, which is specific to the innerFunction().

Together, they demonstrate how innerFunction can access both its own parameter (innerVariable) and the parameter of outerFunction (outerVariable) because of the closure.

```js 
    const closureFunc = outerFunction("outside");
```

This line calls outerFunction() and passes the argument "outside".
outerFunction() returns the innerFunction(), but it does not execute innerFunction() yet.

## This does two things:
1. Calls outerFunction("outside"):
    - This executes outerFunction with the argument "outside".
    - outerFunction runs, logs "outside", and then returns innerFunction.
2. Assigns innerFunction to closureFunc:
    - The value returned by outerFunction is the innerFunction.
    - closureFunc is now a reference to the innerFunction.

closureFunc is now a reference to the innerFunction(), and it "remembers" the value of outerVariable ("outside") because of the closure.

At this stage, closureFunc is ready to be called later. It’s like saving the returned innerFunction for future use.

```js 
    closureFunc("inside");
```
Here, you are calling the closureFunc() function, which is the innerFunction() returned earlier by outerFunction. When closureFunc("inside") is called, the argument "inside" is passed to the parameter innerVariable in innerFunction.

So when you write: 
```js 
    closureFunc("inside");
```
You’re invoking innerFunction because closureFunc is now pointing to innerFunction, not outerFunction.

## Why doesn’t closureFunc("inside") invoke outerFunction?
Let’s think of this step by step:

1. What does outerFunction return?
    - outerFunction doesn’t return itself—it returns the innerFunction.
    - After returning, outerFunction is finished. It’s no longer involved.
2. What does closureFunc represent?
    - closureFunc is just a variable holding the value that outerFunction returned.
    - Since outerFunction returned innerFunction, closureFunc now refers to innerFunction.

## Why It Feels Like It Should Invoke outerFunction
This confusion is natural because it feels like closureFunc is somehow "linked" to outerFunction. But here’s the key distinction:
After outerFunction is called and returns innerFunction, closureFunc is not linked to outerFunction anymore. It’s just pointing directly to innerFunction.
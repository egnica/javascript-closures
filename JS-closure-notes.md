# Closures

### What is a Closure?

A closure is a function that retains access to variables from its outer scope, even after the outer function has finished executing. Closures are often created when a function is defined inside another function and references variables from the parent function's scope.

In JavaScript, when a function returns another function, you need to:

- Capture the returned function (assign it to a variable or chain it directly).
- Invoke the returned function to see the effect.

When you have a function defined inside another function, the inner function has access to variables and scope of the outer function, even if that function finishes executing.

Each call to `outerFunction` creates its own scope and closure. The `innerFunction` retains access to the specific `outerVariable` from the scope where it was created.

### Example of a Closure

```javascript
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

---

### **_TL;DR_**

### `closureFunc` is the returned `innerFunction()`, which remembers the outerFunction argument (in this case the string "outside") and takes a new argument for itself..(in this case ("inside")

1. closureFunc is the returned innerFunction.
2. It "remembers" the outerFunction argument (via the closure).
3. It also accepts a new argument specifically for innerFunction.

---

## Total Breakdown of What’s Happening in the Above Closure

### 1. Defining the Outer Function

```javascript
function outerFunction(outerVariable) {
```

- `outerFunction()` has one parameter called `outerVariable`.
- This parameter is a placeholder that will hold the value of the argument passed to `outerFunction` when it is called.

---

### 2. Logging the Outer Variable

```javascript
console.log(outerVariable);
```

- This `console.log` is inside the scope of `outerFunction`, so it can access the `outerVariable` parameter.
- The `outerVariable` is also available to `innerFunction` because of the closure, which allows the inner function to access variables in the scope of `outerFunction`, even after `outerFunction` has finished running.

---

### 3. Returning the Inner Function

```javascript
return function innerFunction(innerVariable) {
```

- This line is saying that `outerFunction()` will return another function called `innerFunction()`.
- `outerFunction()` doesn’t execute `innerFunction()` immediately. It just prepares and hands it back for later use.

- **Parameters in Scope**:
  - `outerVariable` belongs to `outerFunction`.
  - `innerVariable` belongs to `innerFunction`.

---

### 4. Logging Variables Inside Inner Function

```javascript
console.log(`Outer Variable: ${outerVariable}`);
console.log(`Inner Variable: ${innerVariable}`);
```

- The first `console.log` shows that `innerFunction()` still has access to `outerVariable` (because of the closure).
- The second `console.log` shows the value of `innerVariable`, which is specific to `innerFunction()`.

Together, these demonstrate how `innerFunction` can access:

- Its own parameter (`innerVariable`).
- The parameter of `outerFunction` (`outerVariable`) because of the closure.

---

### 5. Calling Outer Function

```javascript
const closureFunc = outerFunction("outside");
```

- **What Happens Here**:

  - `outerFunction("outside")` is called with the argument `"outside"`.
  - Inside `outerFunction`:
    - `"outside"` is logged.
    - `innerFunction` is returned.

- **Result**:
  - `closureFunc` now refers to `innerFunction`. It is a reference to the returned function and "remembers" `outerVariable` (`"outside"`) because of the closure.

---

### 6. Calling the Returned Inner Function

```javascript
closureFunc("inside");
```

- **What Happens Here**:
  - `closureFunc` is invoked, which executes `innerFunction`.
  - The argument `"inside"` is passed to `innerVariable`.
  - Inside `innerFunction`:
    - It logs:
      ```
      Outer Variable: outside
      Inner Variable: inside
      ```

### Accessing innerFunction via the Closure

The only way to access and use innerFunction is by:

1. Calling outerFunction, which returns innerFunction.
2. Capturing the returned innerFunction into a variable (e.g., closureFunc).
3. Calling that captured variable (closureFunc), which is now a reference to innerFunction.

### Why Doesn’t `closureFunc("inside")` Invoke `outerFunction`?

1. **What Does `outerFunction` Return?**

   - `outerFunction` doesn’t return itself—it returns `innerFunction`.
   - After returning, `outerFunction` is finished. It’s no longer involved.

2. **What Does `closureFunc` Represent?**
   - `closureFunc` holds the value returned by `outerFunction`, which is `innerFunction`.
   - Since `outerFunction` returned `innerFunction`, `closureFunc` refers directly to `innerFunction`.

---

### Why It Feels Like It Should Invoke `outerFunction`

This confusion is natural because it feels like `closureFunc` is somehow "linked" to `outerFunction`. But here’s the key distinction:

- After `outerFunction` is called and returns `innerFunction`, `closureFunc` is not linked to `outerFunction` anymore.
- It’s just pointing directly to `innerFunction`, which retains access to the variables in `outerFunction`’s scope (thanks to the closure).

```

This will ensure that your content is fully delivered in Markdown format without interruption. Let me know if you need anything else! 😊
```

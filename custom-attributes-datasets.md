# Rules for Using `dataset` in JavaScript

To access custom attributes using `dataset` in JavaScript, follow these rules:

## Use the `data-` Prefix

Custom attributes in HTML must start with the `data-` prefix to be accessible via the `dataset` property in JavaScript.

## CamelCase Conversion

The part after `data-` in the attribute name is automatically converted to camelCase when accessed via `dataset`.

### Example:

**HTML:**

```html
<button data-btn-val="1">Button One</button>
```

**JavaScript:**

```javascript
const button = document.querySelector("button");
console.log(button.dataset.btnVal); // Logs: "1"
```

### Explanation:

The attribute `data-btn-val` in the HTML becomes `btnVal` when accessed using `button.dataset.btnVal` in JavaScript.

## Common Mistake

Using a custom attribute without the `data-` prefix will not make it accessible via `dataset`.

**Incorrect HTML:**

```html
<button btn-val="1">Button One</button>
```

**JavaScript:**

```javascript
const button = document.querySelector("button");
console.log(button.dataset.btnVal); // Logs: undefined
```

Since `btn-val` does not start with `data-`, it cannot be accessed via `dataset`. You would need to use standard DOM methods to access it.

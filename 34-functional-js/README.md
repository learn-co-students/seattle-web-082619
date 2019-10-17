# Functional JavaScript
* JavaScript is an awesome language
* JavaScript has one especially elegant feature
* JavaScript supports [first class functions](https://en.wikipedia.org/wiki/First-class_function)
* JavaScript's functions can be treated just like any other thing


* Functions can be saved as variables
* Functions can be passed as parameters
* Functions can be returned from functions

---
## Saving Functions To Variables
```js
const printTimestamp = () => console.log(new Date())
const double = n => 2 * n
```

We can refer to a function without executing the function by leaving out
the parenthesis.

Functions are only called when we add the parenthesis.

```js
const click = () => console.log('click');
const bang = () => console.log('BANG!');

let action = click;
if (Math.random() < 1/6) {
  action = bang;
}

action();
```

---
## Callback Functions

Functions can be passed as a parameter and called later.

```js
function delay(cb, waitTime) {
  let start = Date.now()
  let now = Date.now() 
  let delta = now - start

  while (delta < waitTime) {
    now = Date.now() 
    delta = now - start
  }

  cb()
}

delay(() => {
  console.log('ding!')
}, 5000)
```

## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal); 
var animal = "monkey";

Valid 
monkey
```

```js
console.log(animal); //Error animal not defined
let animal = "monkey";

```

```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
```

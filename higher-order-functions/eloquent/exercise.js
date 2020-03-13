// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

let res = arrays.reduce((acc, elem) => acc.concat([...elem]));
console.log(res);
// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(n, testFunc, updateFunc, bodyFunc) {
	for(let i = n; testFunc(i); i = updateFunc(i))
      bodyFunc(i);
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  return array.reduce((acc, elem) => {
  	if(!test(elem))
      acc = false;
    return acc;
  }, true);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
// function dominantDirection(text) {
//   
// }

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

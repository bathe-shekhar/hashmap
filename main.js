import { HashMap } from "./hashmap.js";


const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// console.log(test.print());
test.print();

// console.log(test.get('dog'));
// console.log(test.get('lion'));

// console.log(test.has('dog'));
// console.log(test.has('kite'));
// console.log(test.has('icecream'));

console.log(test.keyCount);
console.log(test.remove('ice cream'));
// test.print();
console.log(test.keyCount);
console.log(test.remove('dog'));
console.log(test.keyCount);
// test.print();
test.set('ice cream', 'white');
test.set('dog', 'brown');
console.log(test.keyCount);
// test.print();

// test.clear();
// console.log(test.keyCount);

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

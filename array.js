// Array Methods

// ForEach()

// let fruits = ["apple", "lemon", "guava"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// let nicks = ["flackko", "asap", "homeboy"];
// nicks.forEach(name => {
//   console.log(`hey my boy is ${name.toUpperCase()}`);
// });

// Map() YOU MUST DEFINE A NEW VARIABLE IF YOU WISH TO TRANSFORM

// const fruits = ["apple", "banana", "cherry"];
// const description = fruits.map((fruit, i) => `${i + 1}. ${fruit}`);
// console.log(description);

// Using return keyword with curly brackets {}

// const prices = [500, 1200, 800, 3000];
// let priceWithVat = prices.map((price) => {
//   return price * 1.1;
// });
// console.log(priceWithVat);

// Using the original array inside map

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num, index, array) => num + array[index]);
// console.log(result);

// filter()
// const digits = [1, 2, 3, 4, 5];
// const filterDigits = digits.filter((int) => int % 4 === 0);
// console.log(filterDigits);

// find()
// let numbers = [1, 2, 3, 4, 5];
// let findNumbers = numbers.find((num) => {
//   return num <= 2;
// });
// console.log(findNumbers);

// reduce()
// let values = [200, 500, 4000, 3500];
// let total = values.reduce((acc, currentValue) => {
//   return acc - currentValue;
// }, 0);
// console.log(total);

// Concatenating/merging using reduce()

// let words = ["i", "love", "flackko"];
// let sentence = words.reduce((acc, currentValue) => acc + ` ` + currentValue);
// console.log(sentence);

// let fruits = ["apple", "lemon", "guava"];
// fruits.push("mango"); /* adds at the end */
// fruits.unshift("orange"); /* adds at the beginning */
// fruits.pop(); /* removes from the end */
// fruits.shift(); /* removes from the beginning */
// console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
let result = numbers.unshift(7);
console.log(result);
// console.log(numbers);

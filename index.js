// Data Types
// var, let and const are used to declare variables
// var person = "john";
// console.log(person); /* Output: John */
// let myName = "Esther";
// console.log(myName); /* Output: Esther */

// Number: A numeric value
// let age = 30;
// const pi = 3.14;
// console.log(age); /* Output: 30 */
// console.log(pi); /* Output: 3.14 */

// Boolean : A value that can either be false or true

// const isStudent = true;
// console.log(typeof isStudent); /* Output: true */

// let x = 0 / 0;
// console.log(typeof x);

// Conversion

// const num = 123;
// let str = `${num}`;
// console.log(str);

// Use of symbol

// let passWord = {};
// let hide = Symbol();
// passWord[hide] = "flackko";
// console.log(passWord[hide]);

// let hide = Symbol();
// let passWord = {
//   [hide]: "flackko",
// };
// console.log(passWord[hide]);

// Use of bigint

// let big = 7896935659876866886559n;
// console.log(big + 200000n);

// let person = {
//   name: "john",
//   age: 25,
// };
// const keys = Object["entries"](person);
// console.log(keys);
// Using dot notation

// adding more properties
// person.name = "alice";
// person.age = 41;
// person.city = "new york";
// person.country = "nigeria";
// // delete a property
// delete person.country;
// delete person.city;

// Using bracket notation

// let key = "age";
// person[key] = 30;
// let newKey = "city";
// person[newKey] = "enugu";
// let oneKey = "country";
// person[oneKey] = "nigeria";
// delete person[oneKey];
// console.log(person);

// Use of Array

// let fruits = ["apple", "banana", "guava", "orange"];
// fruits.push("mango");
// fruits.pop();
// fruits.shift();
// fruits.unshift("lemon");
// console.log(fruits);

// Use of function

// function greet(name1, name2, age) {
//   console.log(`hello ${name1}, you are ${age} years old`);
//   console.log(`hello ${name2}, you are ${age} years old`);
// }
// greet("flackko", "Asap", 28);
// greet("flackko", "Asap", 28);

// functions that return a value
// function add(a, b) {
//   return a + b;
// }
// // let result = add(a + b);
// // console.log(add(2, 3));
// // console.log(add(2, 3));
// // console.log(add(2, 3));
// console.log(add(4, 6));

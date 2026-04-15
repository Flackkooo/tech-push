// const user = {
//   name: "flackko",
//   password: 1234,
//   isFemale: false,
//   city: "Enugu",
//   age: 25,
// };
// user["country"] = "Nigeria"; /* Addition */
// user["name"] = "Asap"; /* Renaming */
// delete user["age"]; /* Deletion */
// const newKey = "Swag"; /* Use of dynamic key */
// user[newKey] = 100;
// console.log(user);

// // Destructuring & Renaming a key in an Object

// const { name, password, city: ekoAtlantic } = user;
// console.log(ekoAtlantic);

// here city was renamed to ekoAtlantic, therefore the key name "city" losing it's content and existence

// Or console.log directly
// console.log(name, password, ekoAtlantic);

// Spread and Rest Operators
// Spread - meethod 1: Creating an independent copy
// const original = { name: "flackko", city: "Enugu" };
// const copy = original; { ...original, city: "abuja" };
// copy["name"] = "Asap";
// copy["age"] = 28;
// console.log(original);
// console.log(copy);

// method 2: Merging and overriding, last defined value wins
// const result = { ada: 70, obi: 50, uju: 40 };
// const newResult = { ada: 30, george: 80, victor: 60 };
// const endResult = { ...result, ...newResult };
// console.log(endResult);
// The later key "ada"oveerides the earlier defined key

// iteration over objects
const user = { nick: "paul", age: 25, city: "awka" };
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
// // Using Object.entries()/keys()/values()
// const key = Object.entries(user);
// console.log(key); /* Or run directly */
// console.log(Object.keys(user));

// For ... of
// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key} : ${value}`);
// }

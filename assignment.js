// Task 1. Creation Of Variables

// let customerName = "Bola Tinubu"; /* String */
// let customerAge = 94; /* Number */
// let bookTitle = "The Way Of The Superior Man"; /* String */
// let bookPrice = 5000; /*  Number */
// let quantity = 5; /*  Number */
// let isStudent = false; /*  Boolean */

// // Task 2. Use Of Arithmetic Operators

// let totalPrice = bookPrice * quantity; /* Calculate total cost */

// // Task 3. Use Of Comparison Operators

// let isAdult = customerAge >= 18; /*Is the customer 18 or older? */
// let buyingManyBooks = quantity > 3; /*Is the quantity more than 3? */
// let isBookFiveThousand = bookPrice === 5000; /* Is book price exactly 5000? */

// // Use Of Non-Primitive Data Type

// const customerOrder = {
//   customerName: "Bola Tinubu",
//   bookTitle: "Way Of The Superior Man",
//   quantity: 5,
//   totalPrice: 25000,
// };

// console.log("Customer Name:", customerName);
// console.log("Book Title:", bookTitle);
// console.log("Total Price:", totalPrice);
// console.log("Is Customer An Adult?", isAdult);
// console.log("Buying More Than 3 books?", buyingManyBooks);
// console.log("Is Book Price 5000?", isBookFiveThousand);

// Use of Substring() and Slice()

// const str = "Nigeria is awesome";
// let extractedSubstring = str.substring(0, 7);
// let extractedSlice = str.slice(-7);
// console.log(extractedSubstring);
// console.log(str.slice(8, 10));
// console.log(extractedSlice);

// Use of Split() and join()

// const names = "john, jane, doe";
// let splittedNames = names.split(",");
// const arr = ["john", "jane", "doe"];
// let joinedNames = arr.join(" ");
// const path = "/user/home/docs";
// let splitPath = path.split("/");
// console.log(splittedNames);
// console.log(joinedNames);
// console.log(splitPath);
// console.log(splitPath[2]);

// Use of split(), endsWith(), replace()

// const email = "user@example.com";
// let getUser = email.split("@");
// console.log(getUser[0]);
// console.log(email.endsWith(".com"));
// console.log(email.replace("@", "AT"));

// Section A forEach()
// Question 1.
// The parameter "num" was declared here to represent each of the array values and used to target the values by multiplication
// const numbers = [2, 4, 6, 8];
// numbers.forEach((num) => {
//   console.log(num * 2);
// });

// // Question 2.
// // "tag" was used as the parameter and then i made use of the backticks which accepts template literals because it's easier and simpler. backticks work with ${}
// const names = ["Esther", "John", "Ada", "Mike"];
// names.forEach((tag) => {
//   console.log(`Hello ${tag}`);
// });

// // Section B map ()
// // Question 3
// // I created a new variable because map() never changes the original array, the return keyword was used to send back the result. Then i console.log to display the output. Here the console.log is outside of the map()
// const digits = [1, 2, 3, 4, 5];
// const mapDigits = digits.map((int) => {
//   return int ** 2;
// });
// console.log(mapDigits);

// // Question 4.
// const prices = [100, 200, 300];
// const discountPrices = prices.map((value) => {
//   return value * 0.9;
// });
// console.log(discountPrices);

// // Section C filter ()
// // Question 5.
// const integers = [5, 12, 8, 20, 3];
// const filterInt = integers.filter((f_int) => {
//   return f_int > 10;
// });
// console.log(filterInt);

// // Question 6.
// const ages = [5, 22, 17, 30, 18];
// const newAge = ages.filter((age_bracket) => {
//   return age_bracket >= 18;
// });
// console.log(newAge);

// // Question 7
// const values = [10, 15, 20, 25, 30];
// const highValues = values
//   .filter((h_values) => {
//     return h_values > 20;
//   })
//   .map((h_values) => h_values * 2);
// console.log(highValues);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled);

const scores = [250, 300, 350, 200, 400];
const newScores = scores.filter((score) => score >= 300);
console.log(newScores);

const colors = ["blue", "yellow", "red"];
colors.push("green");
colors.splice(colors.indexOf("red"), 1);
console.log(colors);

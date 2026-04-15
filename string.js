// length
// let stringText = "My name is flackko";
// console.log(stringText.length);

// // toUpperCase & toLowercase

// let capitalLetter = stringText.toUpperCase();
// let smallLetter = stringText.toLowerCase();
// console.log(capitalLetter);
// console.log(smallLetter);

// trim(), trimStart(), trimEnd()

// let str = "    Hello World!    ";
// let trimmedStr = str.trim();
// let frontTrimmedStr = str.trimStart();
// let endTrimmedStr = str.trimEnd();
// console.log(trimmedStr);
// console.log(frontTrimmedStr);
// console.log(endTrimmedStr);

// const msg = "  Hello WORLD";
// let result = msg.trim();
// console.log(msg);
// console.log(msg.startsWith("Hello"));
// console.log(msg.endsWith("WORLD"));
// console.log(msg.toLowerCase());
// console.log(msg.indexOf("WORLD"));
// console.log(msg.replace("WORLD", "Nigeria"));
// console.log(msg.replaceAll("WORLD", "Nigeria"));
// console.log(msg.slice(3, 8));

//  indexOf(), includes()

// let msg = "hello flackko";
// console.log(msg.indexOf("flackko"));
// console.log(msg.indexOf("asap"));
// console.log(msg.includes("Flackko"));

// startsWith(), endsWith()

// let userName = "vephlan flackko id";
// let starts = userName.startsWith("vephlan");
// console.log(starts)
// OR
// console.log(userName.startsWith("vephlan"));
// console.log(userName.endsWith("id"));

// slice(), substring()

// let fullName = "pretty boy flackko";
// let slicedString = fullName.slice(7);
// let substringString = fullName.substring(7);
// console.log(slicedString);
// console.log(substringString);

// replace(), replaceAll()

// let text = "Flackko loves apples. flackko is so sweet";
// let replaceText = text.replace("Flackko", "he");
// let replaceAllText = text.replaceAll("Flackko", "he");
// let convertedText = text.toLowerCase().replaceAll("flackko", "he");
// console.log(replaceText);
// console.log(replaceAllText);
// console.log(convertedText);

// Split();
const sentence = "LANGUAGES: JavaScript, Python, Java, C++";
let splitSentence = sentence.split(", ");
const javaIndex = splitSentence.indexOf("Java");
console.log(splitSentence);
console.log(splitSentence[javaIndex]);
console.log(javaIndex);

// join()

// let fruits = ["apple", "mango", "pineapple"];
// console.log(fruits.join(" "));

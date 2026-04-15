// if/else statements
let userAge = 17;
if (userAge >= 18) {
  console.log("welcome to club125");
} else {
  console.log("sorry you are not allowed");
}
// if, else, else-if
let gender = "";
if (gender === "female") {
  console.log("welcome to the ladies section");
} else if (gender === "male") {
  console.log("welcome to the men section");
} else if (gender === "other") {
  console.log("welcome to the other section");
} else {
  console.log("we don't know where you belong");
}

let userName = "";
let passWord = "1234";
if (userName === "flackko" && passWord === "1234") {
  console.log("login successful");
} else if (userName === "asap" || passWord === "1234") {
  console.log("username or password is correct");
} else {
  console.log("login failed");
}

let voter = 16;
if (voter >= 18) {
  console.log("eligible voter");
} else {
  console.log("ineligible voter");
}
for (let i = 2; i <= 8; i += 2) {
  console.log(i);
}

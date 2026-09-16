//function are value
// function seyhello() {
//   console.log("hello");
// }
const myfunction = seyhello;

// myfunction()
// console.log(myfunction());
// console.log(myfunction());
myfunction();

console.log("************************callback***********************");
function execute(action) {
  action();
}

function seyhello() {
  console.log("hello");
}

function godbay() {
  console.log("godbay");
}

console.log("************************شرح الفكرة***********************");
// function execute(seyhello) {
//     seyhello();
// }
console.log("************************النتيجة***********************");

execute(seyhello);
execute(godbay);

console.log("************************calculate***********************");
function calculate(a, b, operator) {
  return operator(a, b);
}

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let multiply = (a, b) => a * b;

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, sub));
console.log(calculate(10, 20, multiply));

console.log("********************Anonymous callback*******************");

// const double = (number) => number * 2;
calculate(5, 2, (a, b) => a + b);
console.log(calculate(5, 2, (a, b) => a + b));

console.log("********************array callback*******************");

function applayToAll(numbers, action) {
  const result = [];

  for (const number of numbers) {
    result.push(action(number));
  }
  return result;
}

const double = applayToAll([1, 2, 3], (number) => number * 2);
console.log(double);
// let body = document.querySelector("body");
// let btn = document.createElement("button");
// btn.contains("btn");
// body.appendChild(btn);
console.log("********************validation*******************");
function isvalidation(num) {
  if (typeof num !== "number") {
    return false;
  }
  if (Number.isNaN(num)) {
    return false;
  }
  return num >= 0 && num <= 100;
}
console.log(isvalidation(20));
console.log(isvalidation(50));
console.log(isvalidation(101));
console.log(isvalidation(-20));
console.log(isvalidation("-20"));

function letterGrade(num) {
  if (isvalidation(num)) {
    return "?";
  }
  if (num >= 90) return "A";
  if (num >= 80) return "b";
  if (num >= 70) return "c";
  if (num >= 60) return "d";
  
  return "f";
}

seyhello();
function seyhello() {
  return console.log("hello");
}

console.log((score = 100));
var score = 90;

console.log("******************************************");

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());
console.log(counter1());

console.log("****************closures**************************");

function outer() {
  let name = "hema";
  function inner() {
    console.log(name);
  }

  return inner;
}
let myfunction= outer();
myfunction()

console.log("*************************id**************************");

function createId(prefix) {
  let id = 0;

  return function () {
    id++;
    return `${prefix} - ${id}`;
  };
}

const student = createId("stu");
console.log(student());
console.log(student());
console.log(student());
console.log(student());

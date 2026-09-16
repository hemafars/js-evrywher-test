function greet(name) {
  return `hello ${name}`;
}
console.log(greet());

function greet(name = "ahmed") {
  return `hello ${name}`;
}
console.log(greet());
console.log("***************************************************************");
function calculatSalery(salery = 0, ponus = 0) {
  return `total = ${salery + ponus} - salery = ${salery} - ponus = ${ponus} `;
}
console.log(calculatSalery());
console.log(calculatSalery(5000));
console.log(calculatSalery(5000, 1000));

console.log("---------------------------------------------------------------");
function test(value = 100) {
  console.log(value);
}

test(); //100
test(undefined); //100
test(null); //null
test(0); //0
test(""); //
console.log("***************************************");
function add(a, b) {
  return a + b;
}
//سيتجاهل اي قيم خارج المعطيات
console.log(add(1, 2, 3, 4));
//3

console.log("******************showNumbers*********************");

function showNumbers(...numbers) {
  console.log(numbers);
  return numbers;
}

let num = showNumbers(1, 2, 3, 4, 5, 6, 7);
console.log(num);
num.push(454545);
console.log(num);

console.log("******************sum*********************");
function sum(...numbers) {
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40));

console.log("******************studentReport*********************");
function studentReport(name, ...scores) {
  console.log(name);
  console.log(scores);
}

studentReport("ahmed",100,150,50,10)
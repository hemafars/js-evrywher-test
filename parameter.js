//بدلا من
function doule5() {
  return 5 * 2;
}
function doule10() {
  return 10 * 2;
}
function doule20() {
  return 20 * 2;
}
console.log(doule5());
console.log(doule10());
console.log(doule20());

function doule(number) {
  return number * 2;
}
function doule5(number) {
  return number * 5;
}

console.log(doule(10));

function add(a, b) {
  return a + b;
}
console.log("***********************");
console.log(add(doule(10), doule5(10)));

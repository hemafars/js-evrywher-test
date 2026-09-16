// type for

//first  : for  :-

//use with you want control start and condichin and increment
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// result
// 0
// 1
// 2
// 3
// 4

//decond : for of :-
// use with the array get the value
let cars = ["MBW", "FIAT", "LADA"];
for (let car of cars) {
  console.log(car);
}

//decond : for of :-
// use with the array get the value
let user = {
  name: "hemaFars",
  country: "Egypr",
};
for (let car of cars) {
  console.log(car);
}
//result
// MBW
// FIAT
// LADA

// for in
//use with objects
let users = {
  name: "hemaFars",
  country: "Egypr",
};
for (let key in users) {
  console.log(key);
}
//  what if you want accecc the value
//use array[key] accecc the value
for (let key in users) {
  console.log(users[key]);
}

//for each

// its not forloop but you can use it

let prices = [100, 200, 300];
prices.forEach(function (pric, السعر) {
  console.log(pric, السعر+1);
});

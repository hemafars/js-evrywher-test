let student = {
  hema: 100,
  ahmed: 90,
  ali: 80,
  yaser: 70,
  nor: 60,
};

function letterGrade(score) {
  if (score >= 90) {
    return "A";
  }

  if (score >= 80) {
    return "B";
  }

  return "C";
}

for (let stude in student) {
  console.log(`${stude} | ${student[stude]} | ${letterGrade(student[stude])}`);
}
console.log(letterGrade(100));
console.log(letterGrade(90));
console.log(letterGrade(80));
console.log(letterGrade(70));
console.log(letterGrade(60));

console.log("***********************************************************");

let cars = ["bmw", "fiat", "lada"];

function prices(namecar) {
  if (namecar === "bmw") {
    return 1000;
  }
  if (namecar === "fiat") {
    return 1000;
  }
  if (namecar === "lada") {
    return 1000;
  }
}

for (let car of cars) {
  console.log(`${car} : ${prices(car)}`);
}

console.log("***********************************************************");

let empoys = ["ahmed", "yaser", "ali"];

function trqia(name) {
  if (name === "ahmed") {
    return "up";
  }
  if (name === "yaser") {
    return "down";
  }
  if (name === "ali") {
    return "bitween";
  }
}
for (let empoy of empoys) {
  console.log(`${empoy} : ${trqia(empoy)}`);
}

const number = 10;

const text = "hema";

const calc = function (num) {
  return num * 5;
};
console.log(calc(5)) ;

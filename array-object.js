let a = ["a", "b", "c", "d", "e"];

console.log(a[2]);

const b = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(b[0][3]);
console.log(b[1][4]);
console.log(b[2][0]);

let car = {
  make: "Toyota",
  model: "Camery",
  isUsed: true,
  makeNoise() {
    console.log("Vroom");
  },
};
car.makeNoise();

let book = {
  title: "The Whatever Book",
  author: {
    name: "Sam Smith",
    age: 56,
  },
};
console.log(book.author.age);

const numArray = [1, 2, 3, 4, 5];

numArray.forEach((num, index) => {
  console.log(index + ":" + num);
});

//Map
numArray.map((num, index) => {
  return console.log(num);
});

//Filter
const newNum = numArray.filter((num) => {
  return num > 2;
});
console.log(newNum);

//Find -- returns one number
const nextNum = numArray.find((num) => {
  return num > 3;
});
console.log(nextNum);

//Some -- is some of the elements mach this function
const nextNum2 = numArray.some((num) => {
  return num > 3;
});
console.log(nextNum2);

//Reduce
const eShop = [
  { price: 10, name: "Ball" },
  { price: 20, name: "Glove" },
  { price: 30, name: "Chair" },
];

const sumOfPrices = eShop.reduce((sum, number) => {
  return sum + number.price;
}, 0);
console.log(sumOfPrices);

//Includes
const isTrue = numArray.includes(5);
console.log(isTrue);

// you can't use includes on an object apparently


// Create a new object using 'new'
function User(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const newPerson = new User("Mike", 24);
console.log(newPerson);

const date = new Date();

console.log(date);

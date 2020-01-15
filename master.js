// question 1

var firstVariable = "Variable";

// question 2

var person = {
  name: "Anniken",
  age: 23
};

// question 3

var outOfStock = false;

if(outOfStock === true) {
  console.log("Out of stock");
}

else {
  console.log("In stock");
}

// question 4

var numbers = [5, 32, 6, 12, 31];
for(var index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

// question 5

for (var numberCounter = 15 ; numberCounter <= 25; numberCounter ++) {
  console.log(numberCounter);
}

// question 6

for (var secondNumberCounter = 15 ; secondNumberCounter <= 20; secondNumberCounter ++)
  if(secondNumberCounter === 20){
  console.log(secondNumberCounter);
}

// question 7

var cats = [
  {
  name: "Lucy",
  age: 3,
  alive: true
  },
  {
  name: "Selmi",
  age: 17,
  alive: false
  }
];

for(var catsStatus = 0; catsStatus <cats.length; catsStatus++){
  console.log(cats[catsStatus].age)
  console.log(cats[catsStatus].alive)
}

// question 8

function whatIDontLike(sadStuff) {
  console.log("I don't like " + sadStuff);
}

whatIDontLike("dead cats");

// question 9

function math(highNumber, lowNumber) {
  console.log(highNumber - lowNumber);
}

math(99, 5);

// question 10

var deadCats = []
function myDeadCats(cat) {
  deadCats.push(cat);
}
myDeadCats("Balder");
console.log(deadCats);

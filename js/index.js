//Hejhej

let myName = "John Doe";
let myAge = 30;

console.log("Name:", myName);
console.log("Age:", myAge);

function greet() {
  console.log("Hello, " + myName + "!");
}
greet();

const age = function () {
  console.log("Your age is " + myAge + "!");
};
age();

function addNumbers(a, b) {
  return a + b;
}
console.log("Sum of 5 and 10 is:", addNumbers(5, 10));
console.log(addNumbers(3, 7));

function subtract(c, d) {
  let sum = c - d;

  console.log("The difference is:", sum);
}

subtract(10, 5);
subtract(20, 15);

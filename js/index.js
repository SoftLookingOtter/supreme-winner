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

function checkLenth(box) {
  return box.length;
}
console.log("Length of 'Hello World':", checkLenth("Hello World"));

function year(datum) {
  return Number(datum.substring(0, 4));
}
console.log("År: " + year("2023-10-01"));

// Simple calculator functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

/*
function divide2(a, b) {
  return b != 0 ? a / b : "Error: Division by zero";
}*/

function calculate(a, b, operator) {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return "Error: Invalid input";
  }

  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      return "Error: Unknown operation";
  }
}
// Example usage
console.log("Addition:", calculate(5, 10, "add"));
console.log("Subtraction:", calculate(10, 5, "subtract"));
console.log("Multiplication:", calculate(3, 7, "multiply"));
console.log("Division:", calculate(20, 4, "divide"));

// Function to check if a number is even or odd
function isEvenOrOdd(number) {
  if (typeof number !== "number") {
    return "Error: Input must be a number";
  }
  return number % 2 === 0 ? "Even" : "Odd";
}

// Even or odd check
console.log("Is 4 even or odd?", isEvenOrOdd(4)); // Even
console.log("Is 7 even or odd?", isEvenOrOdd(7)); // OddS

let a = 5;
let b = 10;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// String comparison
let n = "apple";
let m = "banana";

if (n === m) {
  console.log("n is equal to m");
} else if (n !== m) {
  console.log("n is not equal to m");
}

// Biggest number
const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));
if (num1 > num2) {
  console.log("The biggest number is:", num1);
} else if (num2 > num1) {
  console.log("The biggest number is:", num2);
} else {
  console.log("Both numbers are equal.");
}

// Check height true or false
const height = Number(prompt("Enter your height in cm:"));
{
  console.log(height >= 150);
}

const akband = prompt(
  "Vilket åkband har du? (small, medium, large, platinum)"
).toLowerCase();
if (akband === "small" || akband === "platinum") {
  console.log("Du har tillgång till Balder.");
} else if (akband === "medium" || akband === "small") {
  console.log("Du får tyvärr inte åka Balder.");
} else {
  console.log(
    "Ogiltigt åkband. Vänligen ange small, medium, large eller platinum."
  );
}

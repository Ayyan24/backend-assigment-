// Assignment 01 - Loops

// Q1: Print numbers 1 to 10
// Write a program using a for loop to print numbers from 1 to 10.
console.log("Q1");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q2: Sum of first N numbers
// Use a while loop to calculate the sum of the first N natural numbers.
console.log("Q2");
let n = 10;
let count = 1;
let sum = 0;
while (count <= n) {
  sum = sum + count;
  count++;
}
console.log("Sum of first " + n + " numbers is " + sum);

// Q3: Multiplication table
// Print the multiplication table of a given number using a for loop.
console.log("Q3");
let tableNum = 7;
for (let i = 1; i <= 10; i++) {
  console.log(tableNum + " x " + i + " = " + tableNum * i);
}

// Q4: Factorial calculation
// Write a program using a while loop to find the factorial of a given number.
console.log("Q4");
let factNum = 5;
let fact = 1;
let x = factNum;
while (x > 0) {
  fact = fact * x;
  x--;
}
console.log("Factorial of " + factNum + " is " + fact);

// Q5: Reverse counting
// Print numbers from 10 down to 1 using a for loop.
console.log("Q5");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Q6: Even numbers up to N
// Use a do-while loop to print all even numbers up to N.
console.log("Q6");
let limit = 20;
let even = 2;
do {
  console.log(even);
  even = even + 2;
} while (even <= limit);

// Q7: Sum of digits
// Write a program using a while loop to calculate the sum of digits of a given number.
console.log("Q7");
let number = 12345;
let original = number;
let digitSum = 0;
while (number > 0) {
  let digit = number % 10;
  digitSum = digitSum + digit;
  number = Math.floor(number / 10);
}
console.log("Sum of digits of " + original + " is " + digitSum);

// Q8: Fibonacci series
// Generate the first 10 terms of the Fibonacci series using a for loop.
console.log("Q8");
let first = 0;
let second = 1;
let series = "";
for (let i = 1; i <= 10; i++) {
  series = series + first + " ";
  let next = first + second;
  first = second;
  second = next;
}
console.log(series);

// Q9: Guessing game
// Use a do-while loop to keep asking the user for a number until they guess the correct one.
console.log("Q9");
let secret = 7;
let guesses = [3, 9, 5, 7]; // pretend these are the numbers the user types in
let tries = 0;
let guess;
do {
  guess = guesses[tries];
  tries++;
  if (guess == secret) {
    console.log("Guess " + guess + " is correct! It took " + tries + " tries.");
  } else {
    console.log("Guess " + guess + " is wrong, try again");
  }
} while (guess != secret);

// Q10: Prime number check
// Write a program using a for loop to check if a given number is prime.
console.log("Q10");
let primeNum = 29;
let isPrime = true;
if (primeNum <= 1) {
  isPrime = false;
}
for (let i = 2; i < primeNum; i++) {
  if (primeNum % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log(primeNum + " is a prime number");
} else {
  console.log(primeNum + " is not a prime number");
}

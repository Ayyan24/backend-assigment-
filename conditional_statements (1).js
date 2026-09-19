// Assignment 01 - Conditional Statements

// Q1: Write a program that checks if a number is positive, negative, or zero.
console.log("Q1");
let num1 = -7;
if (num1 > 0) {
  console.log(num1 + " is positive");
} else if (num1 < 0) {
  console.log(num1 + " is negative");
} else {
  console.log(num1 + " is zero");
}

// Q2: Even or odd check
// Using an if-else statement, determine whether a given integer is even or odd.
console.log("Q2");
let num2 = 14;
if (num2 % 2 == 0) {
  console.log(num2 + " is even");
} else {
  console.log(num2 + " is odd");
}

// Q3: Largest of two numbers
// Write a program that takes two numbers and prints the larger one using conditional statements.
console.log("Q3");
let a = 25;
let b = 42;
if (a > b) {
  console.log(a + " is larger");
} else if (b > a) {
  console.log(b + " is larger");
} else {
  console.log("Both numbers are equal");
}

// Q4: Grade evaluation
// Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.
console.log("Q4");
let percentage = 76;
if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Q5: Leap year check
// Write a program that checks if a given year is a leap year using conditional statements.
console.log("Q5");
let year = 2024;
if (year % 400 == 0) {
  console.log(year + " is a leap year");
} else if (year % 100 == 0) {
  console.log(year + " is not a leap year");
} else if (year % 4 == 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// Q6: Day of week switch
// Use a switch-case to print the name of the day when given a number (1 = Monday, 2 = Tuesday, ... 7 = Sunday).
console.log("Q6");
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please enter a number from 1 to 7");
}

// Q7: Calculator switch
// Create a simple calculator using switch-case that performs addition, subtraction,
// multiplication, or division based on user input.
console.log("Q7");
let n1 = 20;
let n2 = 4;
let operator = "/";
switch (operator) {
  case "+":
    console.log(n1 + " + " + n2 + " = " + (n1 + n2));
    break;
  case "-":
    console.log(n1 + " - " + n2 + " = " + (n1 - n2));
    break;
  case "*":
    console.log(n1 + " * " + n2 + " = " + (n1 * n2));
    break;
  case "/":
    if (n2 == 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log(n1 + " / " + n2 + " = " + (n1 / n2));
    }
    break;
  default:
    console.log("Invalid operator");
}

// Q8: Vowel or consonant
// Write a program that checks whether a given character is a vowel or consonant using switch-case.
console.log("Q8");
let letter = "E";
switch (letter.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(letter + " is a vowel");
    break;
  default:
    console.log(letter + " is a consonant");
}

// Q9: Traffic light system
// Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).
console.log("Q9");
let light = "Yellow";
switch (light) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Wait");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

// Q10: Menu-driven program
// Write a program using switch-case where the user selects from a menu
// (1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).
console.log("Q10");
let balance = 1000;
let choice = 2;
let amount = 500;
console.log("1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit");
switch (choice) {
  case 1:
    console.log("Your balance is " + balance);
    break;
  case 2:
    balance = balance + amount;
    console.log("Deposited " + amount + ". New balance is " + balance);
    break;
  case 3:
    if (amount > balance) {
      console.log("Not enough balance");
    } else {
      balance = balance - amount;
      console.log("Withdrew " + amount + ". New balance is " + balance);
    }
    break;
  case 4:
    console.log("Goodbye");
    break;
  default:
    console.log("Invalid choice");
}

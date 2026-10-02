// Q1: Access object properties
let student = {
  name: "Ali",
  age: 20,
  grade: "A"
};
console.log(student.name);
console.log(student.age);
console.log(student.grade);
// bracket notation
console.log(student["name"]);

// Q2: Loop through object
for (let key in student) {
  console.log(key + ": " + student[key]);
}

// Q3: Object methods
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b == 0) {
      return "cannot divide by 0";
    }
    return a / b;
  }
};
console.log(calculator.add(8, 2));
console.log(calculator.subtract(8, 2));
console.log(calculator.multiply(8, 2));
console.log(calculator.divide(8, 2));
console.log(calculator.divide(8, 0));

// Q4: Nested objects
let person = {
  name: "Sara",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};
console.log(person.address.city);
console.log(person.address.country);

// Q5: Convert object to array
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
let keys = Object.keys(car);
let values = Object.values(car);
console.log(keys);
console.log(values);

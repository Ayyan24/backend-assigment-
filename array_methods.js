// Assignment 02 - Array Methods

// Q1 push()
// add Mango and Orange at the end
let fruits = ['Apple', 'Banana'];
fruits.push('Mango', 'Orange');
console.log(fruits);

// Q2 pop()
// remove last task and save it in another variable
let tasks = ['Login', 'Dashboard', 'Logout'];
let removed = tasks.pop();
console.log(removed);
console.log(tasks);

// Q3 unshift() + shift()
// add Student A at start then remove first student
let queue = ['Student B', 'Student C'];
queue.unshift('Student A');
console.log(queue);
let served = queue.shift();
console.log(served);
console.log(queue);

// Q4 slice()
// get CSS, JS, React without changing topics
let topics = ['HTML', 'CSS', 'JS', 'React', 'Node'];
let newTopics = topics.slice(1, 4);
console.log(newTopics);
console.log(topics);

// Q5 splice()
// remove jQuery
let technologies = ['HTML', 'CSS', 'jQuery', 'React'];
technologies.splice(2, 1);
console.log(technologies);

// Q6 includes()
// check email is registered or not
let emails = ['ali@gmail.com', 'sara@gmail.com', 'student@gmail.com'];
let result = emails.includes('student@gmail.com');
console.log(result);

// Q7 indexOf()
// first index of Karachi
let cities = ['Karachi', 'Lahore', 'Islamabad', 'Karachi'];
let index = cities.indexOf('Karachi');
console.log(index);

// if city is not found it gives -1
let index2 = cities.indexOf('Multan');
if (index2 == -1) {
  console.log('City not found');
} else {
  console.log(index2);
}

// Q8 slice() vs splice()
// slice does not change the original array, it just copies a part
let a = [1, 2, 3, 4, 5];
let b = a.slice(1, 3);
console.log(b); // [2, 3]
console.log(a); // same [1,2,3,4,5]

// splice changes the original array
let c = [1, 2, 3, 4, 5];
let d = c.splice(1, 2);
console.log(d); // [2, 3] removed items
console.log(c); // [1, 4, 5] original changed

// Q9 map()
// add 10% tax in every price
let prices = [1000, 2500, 800, 1500];
let taxPrices = prices.map(function (p) {
  return p + p * 0.1;
});
console.log(taxPrices);

// Q10 map()
// full name of students
let students = [
  { firstName: 'Ali', lastName: 'Khan' },
  { firstName: 'Sara', lastName: 'Ahmed' },
  { firstName: 'Usman', lastName: 'Raza' }
];
let fullNames = students.map(function (s) {
  return s.firstName + ' ' + s.lastName;
});
console.log(fullNames);

// Q11 filter()
// only passing marks
let marks = [35, 76, 49, 90, 50, 20];
let passed = marks.filter(function (m) {
  return m >= 50;
});
console.log(passed);

// Q12 filter() + map()
// names of users who are 18 or more
let users = [
  { name: 'Hamza', age: 17 },
  { name: 'Fatima', age: 22 },
  { name: 'Bilal', age: 18 },
  { name: 'Zainab', age: 15 }
];
let adults = users.filter(function (u) {
  return u.age >= 18;
});
let adultNames = adults.map(function (u) {
  return u.name;
});
console.log(adultNames);

// Q13 find()
// find user with id 103
let userList = [
  { id: 101, name: 'Ali' },
  { id: 102, name: 'Sara' },
  { id: 103, name: 'Ahmed' }
];
let user = userList.find(function (u) {
  return u.id === 103;
});
if (user) {
  console.log(user);
} else {
  console.log('User not found');
}

// Q14 find() vs filter()
// find() gives only the first matching item (not an array)
// and if nothing matches it gives undefined
// filter() always gives an array of all matching items
// (empty array if nothing matches)
// use find when I need one thing, like a user by id
// use filter when I need many things, like all products under 1000

// Q15 reduce()
// total bill
let cart = [1200, 350, 999, 450];
let total = cart.reduce(function (sum, price) {
  return sum + price;
}, 0);
console.log(total);

// Q16 reduce()
// count each technology
let techs = ['JS', 'React', 'JS', 'Node', 'React', 'JS'];
let count = techs.reduce(function (obj, tech) {
  if (obj[tech]) {
    obj[tech] = obj[tech] + 1;
  } else {
    obj[tech] = 1;
  }
  return obj;
}, {});
console.log(count);

// Q17 sort()
// ascending order
let nums = [25, 3, 100, 12, 8];
nums.sort(function (a, b) {
  return a - b;
});
console.log(nums);
// normal sort() without compare function treats numbers like strings
// so 100 comes before 25 because "1" is smaller than "2"
// thats why we need (a, b) => a - b

// Q18 sort() with state
// sort() changes the original array, and in React we should not
// change state directly. so first make a copy with slice() then sort the copy
let stateArr = [40, 10, 30, 20];
let sortedArr = stateArr.slice().sort(function (a, b) {
  return a - b;
});
console.log(sortedArr);
console.log(stateArr); // original is safe

// Q19 some()
// is any product out of stock
let stock = [5, 0, 7, 2];
let outOfStock = stock.some(function (q) {
  return q === 0;
});
console.log(outOfStock);

// Q20 every() + some()
let studentMarks = [78, 92, 55, 66, 49];

// (a) did all students pass
let allPassed = studentMarks.every(function (m) {
  return m >= 50;
});
console.log(allPassed);

// (b) did anyone get 90 or above
let got90 = studentMarks.some(function (m) {
  return m >= 90;
});
console.log(got90);

// every() is true only when ALL items match the condition
// some() is true when at least ONE item matches
// both stop early, every stops at first false, some stops at first true

// Final Challenge
// product names in uppercase -> map()
// only active users -> filter()
// user with email X -> find()
// total salary -> reduce()
// any field empty -> some()
// all terms accepted -> every()
// products ordered by price -> sort()

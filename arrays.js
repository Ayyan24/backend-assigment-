// Q1: Print array elements
let arr = ["Apple", "Mango", "Banana"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Q2: Find array length
// counting with a counter in loop
let names = ["Ali", "Sara", "Ahmed", "Hina"];
let count = 0;
for (let x of names) {
  count = count + 1;
}
console.log(count);

// Q3: Reverse array
function reverseArray(a) {
  let result = [];
  for (let i = a.length - 1; i >= 0; i--) {
    result.push(a[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// Q4: Sum of array
let nums = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}
console.log(sum);

// Q5: Filter even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    even.push(numbers[i]);
  }
}
console.log(even);

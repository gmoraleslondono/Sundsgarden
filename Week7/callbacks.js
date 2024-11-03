// // example 1
// const sum = (a, b, callback) => {
//   const result = a + b;
//   callback(result);
// };

// sum(2, 3, (result) => {
//   console.log("The result is " + result);
// });

// // example 2
// const greet = (name, callback) => {
//   console.log(`Hello!, ${name}`);
//   callback();
// };

// greet("John", () => {
//   console.log("Have a nice day!");
// });

// // example 3
// const delayedMessage = (message, delay, callback) => {
//   setTimeout(() => {
//     console.log(message);
//     callback();
//   }, delay);
// };

// delayedMessage("This message will appear after 2 seconds", 2000, () => {
//   console.log("The delay is over!");
// });

// // example 4
// let numbers = [1, 2, 3, 4, 5];

// const processArray = (arr, callback) => {
//   arr.forEach((number) => {
//     callback(number);
//   });
// };

// processArray(numbers, (number) => {
//   console.log(number * 2);
// });

// // example 5
const calculator = (num1, num2, callback) => {
  return callback(num1, num2);
};

let sum = calculator(5, 3, (num1, num2) => {
  return num1 + num2;
});

let product = calculator(5, 3, (num1, num2) => {
  return num1 * num2;
});

console.log("The sum is " + sum);
console.log("The product is " + product);

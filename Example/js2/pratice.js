// let name = "Gangadhar";
// let vowels = ["a", "e", "i", "o", "u"];
// let result = "";
// for (let i = 0; i <= name.length; i++) {
//   for (const j of vowels) {
//     if (j === name[i]) {//doesn't take index values
//       console.log(j);
//     }
//   }
// }

// let str = "gangadhar";
// let vowels = ["a", "e", "i", "o", "u"];
// for (let count = 0; count < str.length; count++) {
//   if (str[count] === vowels) {
//     console.log(count);
//   }
// }
//1. Declare a variable with var, let, const. Try to reassign each — note what errors you get.
// let value = "hello world";
// const value1 = "hellp world";
// var value2 = "hello world";

// value1 = "hi";
// value = "javascript";
// value2 = "hello";
// console.log(value, value1, value2);

// 2.Convert the string '42abc' to a number using Number(). Log the result and explain why.
// let str = "42abc";
// let number = Number(str);
// console.log(typeof str);

//3. Write a function that takes any value and logs both its value and typeof.
// function num(val1, val2, val3, val4, val5, val6) {
//   console.log(typeof val1);
//   console.log(typeof val2);
//   console.log(typeof val3);
//   console.log(typeof val4);
//   console.log(typeof val5);
//   console.log(typeof val6);
// }
// num(2, "ganga", null, undefined, [1, 2, 3], true);

// 4.Create 5 comparisons mixing strings and numbers (e.g. '5' > 3). Predict the output before running.
// let a = "abc5";
// let b = 45;
// if (a > b) {
//   console.log(`${a} is grater then ${b}`);
// } else if (a < b) {
//   console.log(`${a} is less then ${b}`);
// } else if (a == b) {
//   console.log(`${a} is equal to ${b}`);
// } else if (a === b) {
//   console.log(`${a} is equal to ${b}`);
// } else if (a != b) {
//   console.log(`${a} is not equal to ${b}`);
// }

// 5.Use at least 6 string methods: toUpperCase, slice, includes, startsWith, replace, trim.
// let newStr = "hello";
// console.log(newStr.toUpperCase());
// console.log(newStr.slice(1, 2));
// console.log(newStr.startsWith("he"));
// console.log(newStr.includes("hel"));
// console.log(newStr.replace("hel", "gel"));
// console.log(newStr.trim());

//6. Build a string template: given a name and score, output 'Hi {name}, your score is {score}/100'
// let name = "abc";
// let score = 450;
// console.log(`${name},Your score is ${score / 100}`);

// 7.math method in the array
// let num = [1, 3, 6, 10, 8, 19];
// let num1 = 123.5678543;
// console.log(Math.max(...num));
// console.log(Math.round(num1));
// console.log(Math.random() * 10 + 10);
// console.log(Math.pow(num1, 2));
// console.log(Math.min(...num));
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));
// console.log(Math.sqrt(num1));

//8. Log today's date in 3 formats: full date string, toLocaleDateString(), and custom using getDate/getMonth/getFullYear.?\
// let date = new Date();
// console.log(date);
// console.log(date.toLocaleDateString());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.toUTCString());

// 9.SUbtarcting dates
// let todayDate = new Date();
// let startDate = new Date("2024-01-01");
// let diff = todayDate - startDate;
// console.log(diff);
// let seconds = diff / 1000;
// let minutes = seconds / 60;
// let hours = minutes / 60;
// let days = Math.floor(hours / 24);
// console.log(
//   `The Time in Seconds ${seconds},The time in hours ${hours},The time in Minutes ${minutes},The time in days ${days}`,
// );

// 10.Arrays
// let arr = [1, 2, 3, 4, 5];
// let add = arr.push(6);
// console.log(arr);
// let remove = arr.pop();
// console.log(arr);
// let firstIdx = arr.shift();
// console.log(arr);
// let removeIdx = arr.unshift(0);
// console.log(arr);
// let divide = arr.splice(1, 2);
// console.log(arr);
// console.log(divide);

// let divide1 = arr.slice(1, 2);
// console.log(arr);
// console.log(divide1);

// 11.Flatten [[1,2],[3,[4,5]]] using flat(Infinity). Then use spread to merge two arrays.
// let arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14]]];
// let arr1 = [15, 16, 17, 18, 19];
// console.log(arr.flat(Infinity));
// let merged = [...arr, ...arr1];
// console.log(merged);

// 12.Given an array of numbers, find the sum using a regular for loop (no reduce yet).
// let arr = [1, 2, 3, 4, 5, 6];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

//13. Create a 'user' object. Access properties with both dot and bracket notation.
// let user = {
//   name: "abc",
//   age: 22,
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);
// console.log(user["age"]);

//14. Destructure name, age, city from an object. Use a default value for a missing property.

// let user = {
//   name: "abc",
//   age: 22,
//   city: "Bengaluru",
//   course: "full stack python",
// };

// // simple destructuring
// const { name, age, city, course } = user;
// console.log(name); // abc
// console.log(age); // 22
// console.log(city); // Bengaluru
// console.log(course);

// let user1 = {
//   name: "abc",
//   age: 22,
//   city: "bijapur",
// };
// for (const [values] of Object.values(user1)) {
//   console.log(`${values}`);
// }

//15. Write the same function 3 ways: function declaration, function expression, and arrow function.
// Easy
// function name() {
//   console.log("Hello WOlrd");
// }
// name();

// let user = () => {
//   console.log("JavaScript");
// };
// user();
// let greet = function () {
//   console.log("Fuck U bitch");
// };
// greet();

// 16.Create an IIFE that initializes a counter and logs 'App started'. Show why the variable is not accessible outside.
// function sum(num1, num2) {
//   return num1 + num2;
// }
// let add = sum(4, 3);
// console.log(add);

// 17.Create an IIFE that initializes a counter and logs 'App started'. Show why the variable is not accessible outside
// (function app(val) {
//   console.log(`${val} App started`);
// })("hello");

// // Style 1 - named
// (function app() {
//   console.log("named IIFE");
// })();

// // Style 2 - arrow function IIFE
// (() => {
//   console.log("arrow IIFE");
// })();

// function ko PEHLE call karo
// greet(); // line 1 - call

// // function ko BAAD mein declare karo
// function greet() {
//   // line 3 - declare
//   console.log("Hello from hoisting!");
// }
// hello();

// let hello = function () {
//   console.log("Hello World");
// };

// for questions
// 1.

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log(i);
// }

// while
// let num = [];
// let i = 10;
// while (i >= 0) {
//   if (i === 5) {
//     break;
//   }
//   i--;
//   num.push(i);
// }
// console.log(num);

// itrations
let arr = [
  {
    user: "ram",
    age: 14,
  },
  {
    user: "shiva",
    age: 22,
  },
  {
    user: "rahul",
    age: 45,
  },
  {
    user: "Nayan",
    age: 55,
  },
];
for (const i of arr) {
  if (i.age <= 18) {
    console.log("They ar under age");
  } else if (i.age >= 18) {
    console.log(`${i.user} and ${i.age} `);
  }
}

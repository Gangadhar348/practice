/*An array is a collection of values stored in a single variable

let arr=[1,2,3,4]
*/
let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]);
fruits[1] = "grapes";
// console.log(fruits);
// console.log(fruits.length);

//Array methods

let num = [1, 2, 3];
// console.log(num)
num.push(4); //add 4 at end
// console.log(num)
num.pop(); //remove the end
// console.log(num)
num.unshift(0); //add at start
// console.log(num)
num.shift(); //remove from start
// console.log(num);

//slice vs splice
//slice() -> does not change original array

let newArr = [1, 2, 3, 4];
// let arr = newArr.slice(1,3);
// console.log(arr);

//splice() > modifys the original array

let newSplice = newArr.splice(1, 2); //
// console.log(newSplice)
// console.log(newArr)
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}

//array destruucturing

//detructuring means extracting values from array and objects into variables in a clean way
/* Instead of Writing:
let arr =[10,20]
let a=arr[0]
let b=arr[1] */

// let[a,b]=[10,20];
// console.log(a,b)

let numbers = [1, 2, 3];
let [a, b, c] = numbers;
// console.log(a,b,c)

// default values
let [a10, b10 = 20] = [5]; //overwriting the values
// console.log(a10,b10);

//swap Variables

let num1 = 5;
let num2 = 10;
// console.log(num1,num2);
[num1, num2] = [num2, num1];
// console.log(num1,num2);

let student = {
  name: "abc",
  age1: 22,
};
let { name, age1 } = student;
let { name: studentName } = student;
// console.log(studentName)

let employee = {
  empname: "ABC",
  empdid: 2,
};
let { empname, empdid } = employee;
let { empname: employeename } = employee;
// console.log(employeename)

// console.log(student.name)
// console.log(student.age1)

// Destructuring
function greet({ name3, age2 }) {
  // console.log(name3, age2);
}
greet({ name3: "abc", age2: 22 });

// let newStr = "madam";
// let result1 = "";
// for (let i = newStr.length - 1; i >= 0; i--) {
//   result1 = result1 + newStr[i];
//   if (result1 === newStr) {
//     console.log(`this ${result1} is matched with ${newStr}`);
//   }
// }
// let newWord = "Hello";
// let result2 = "";
// for (let j = newWord.length - 1; j >= 0; j--) {
//   result2 = result2 + newWord[j];
// }
// if (result2 === newWord) {
//   //   console.log(`this ${result2} is matched with ${newWord}`);
//   // } else {
//   // console.log(`this ${result2} are not matched with ${newWord}`);
// }

// let newArr2 = [3, 7, 2, 9, 5];
// let max = arr[0];
// for (let i = 0; i <= newArr2.length; i++) {
//   if (i > max) {
//     max = newArr2[i];
//   }
// }
// console.log(max);

let arr = [10, 5, 20, 8];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num < largest && num > secondLargest) {
    secondLargest = num;
  }
}

console.log(secondLargest);

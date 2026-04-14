// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e" || char==="i"|| char==="o"|| char==="u" ){
//         count++;
//         }
//     }
    
//     console.log(count);
       

// const countVow=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }

//     }
//     console.log(count);
// }

// let arr=[1,2,3,4];
// arr.forEach((arrs)=>{
//      console.log(arrs*arrs);
// })

// arr=[1,2,3,4,5,6,7,8,9,10];
// let newArr=arr.filter((val) =>{
//     return val%2==0;
// })
// console.log(newArr);

// let arr=[23,56,78,90,99,87];
// let newArr=arr.filter((val)=>{
//     return val>=90;
// })
// console.log(newArr)

// let n=prompt("Enter a number");
// arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)
// sumArr=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(sumArr);
// factArr=arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(factArr);

// practice1

// console.log("Hello JavaScript")
// let name="Gangadhar"
// console.log(name);
// const pi=3.14;
// console.log(pi);
// var age=22;
// console.log(age);
// let User="Gangadhar";
// console.log(User);
// let num=22;
// console.log(num);



// Practice2


// const Student={
//     name:"Gangadhar",
//     age:22,
//     marks:67
// };
// let num=prompt("Enter the Number");
// if (num%2==0){
//     console.log("It is Even Number");
// }
// else{
//     console.log("it is odd no");
// }
// let num=prompt("Enter the Number ");
// if (num%5==0){
//     console.log("It is divisable Number 5");
// }
// else{
//     console.log("It is not Divisable of 5");
// }
// let grade=prompt("Enter the Grade");
// if (grade==100 && grade>=90){
//     console.log("Grade A");
// }
// else if (grade<=89 && grade>=70){
//     console.log("Grade B");
// }
// else if (grade<=69 && grade>=50){
//     console.log("Grade c");
// }
// else if (grade<50){
//     console.log("Fail");
// }

// ternery operators

// let age=prompt("Enter the Age");
// num= (age<18) ? "not-adult" : "Adult" ;
// console.log(num);

//pratice3

// let a=10;
// let b=5;
// console.log("Addition",a+b);
// console.log("Sub",a-b);
// console.log("Mul",a*b);
// console.log("Div",a/b);
// console.log("Mod",a%b);

// console.log(a==b);
// console.log(a===b);


//Inbulit Function
// let a=3;
// let b=4;
// let c=8;
// let largest = Math.max(a, b, c);
// console.log("Largest is:", largest);


// let num=prompt("Enter the Number");
// if (num>0){
//     console.log("The Number is Positive")
// }
// else if (num<0){
//     console.log("The Number is Negative")
// }
// else{
//     console.log("The Number is Zero")
// }


// let a=prompt("Enter the First Number");
// let b=prompt("Enter the Second  Number");
// let cal=prompt("Enter 1 for '+' 2 for '-' ")
// if (cal==1){
//     console.log("Addition",a+b);
// }
// else if (cal==2){
//     console.log("Subtraction",a-b);
// }

// practice4

// Condtional statement
// for(i=0;i<=10;i++){
//     console.log(i);
// }
//  let i=10;
// while (i>=1){
//     console.log(i);
//     i--;
    
// }
// for(i=0;i<=100;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }
//  let n=prompt("Emter the Number");
//  let i=0;
//  while(i<=n){
//     i++;
//     n=i+n;
//     console.log(n);
//  }
// let n = Number(prompt("Enter the Number"));
// let i = 1;
// let sum = 0;

// while (i <= n) {
//     sum = sum + i;
//     i++;
// }

// console.log("Sum is:", sum);

// let num=89;
// let n=prompt("Enter the Number");
// while (n!=num){
//     n=prompt("Enter the Number again");
// }

// console.log("The Correct Number is 89");


// Practice4


// let str="Gagana";
// let n=str.length;
// console.log(n);

// let btn=document.createElement("Button");
// btn.innerText="click me";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").prepend(btn);

// let modebtn=document.querySelector("#mode");
// currMode="light";
// modebtn.addEventListener("click",() =>{
//     if(currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// });


// Function


// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
//         count++;    
//     }
//   console.log(count);      
// }


// let arrowVowels = (str) => {
//     let count=0;
//     for(const char of str){
//         if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
//         count++;         
//     }
//     console.log(count);
// }




// forEach() - Function


// let arr=[1,100,99,88,47];
// arr.forEach((val) =>{
//     console.log(val*val);
// })



// filter 


// let arr=[45,56,89,90,91,95,98];
// let newArr= arr.filter((val) => {
//     return val>90;
// })
// console.log(newArr);



// reduce

// let n = prompt("Eneter the Number");
// let arr=[];
// for (let i=1; i<=n; i++) {
//     arr[i-1] = i;
// }
// console.log(arr);

// let newArr = arr.reduce((prev,curr) => {
//     return prev+curr;
// })
// console.log(newArr);

// let factorial = arr.reduce((prev,curr) => {
//     return prev*curr;
// })
// console.log(factorial);


// DOM


// let heading = document.querySelector("h2")
// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " from apna college student"; // concantate


// let divs = document.querySelectorAll(".box")

// let idx =1;
// for(div of divs ){
//     divs.innerText = `new unique value ${idx}`;
//     idx++;

// }



// insert element

// let btn = document.createElement("button");
// btn.innerText = "Click me!";
// let body = document.querySelector("body");
// body.prepend(btn);
// btn.style.backgroundColor = "red";
// btn.style.color = "white";


// class and objects
let DATA = "secret information!";
class user{
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ",DATA);
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA = "some new value";
    }
}


let student1 = new user("abc","abc@123.com")
let student2 = new user("sdf","sdf@gmail.com")

let admin1 = new admin()


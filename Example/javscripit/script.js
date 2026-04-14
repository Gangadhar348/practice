/*javascript is client side programming language used to make website interactive

it runs in:
browsers
node.js

what is javascript?
js is used for form validation DOM(Documnet Object manipulation)
event handling
api calling
full stack development(react,node,js,etc...)

/*Variables*/
let name1="String";
let age=32;
const pi=3.14;
let isStudent=true;
let value=null;
let x//undefined

console.log(name1);
console.log(age);
console.log(typeof name1)
console.log(pi);
console.log(isStudent)
console.log(value)
console.log(x)

/*operators*/
 a=10;
 b=20;
 sum=a+b;

console.log("Addition",sum)
console.log("Substraction",a-b)
console.log("Multiplication",a*b)
console.log("Division",a/b)
console.log("Moulus",a%b)

/*control statements
1.if statement
2.if-else
3.if-else-if
4.switch statement*/
/*if statement*/
let age1=20;
if(age1>=10){
    console.log("you are eligible to vote");

}
/*if else statement*/
let number=7;
if(number%2===0)
{
    console.log("Even");
}
else{
    console.log("odd")
}
/*if else if statement*/
let marks=88;
if(marks>=90){
    console.log("Grade A")

}
else if(marks>=75){
    console.log("Grade B")
}
else{
    console.log("Grade C")

}

/*Switch Statement*/
let day=7;
switch(day){
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
        console.log("Thursaday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

}
/*for loop*/
for(let i=1;i<=5;i++){
    console.log(i);
}
/*while loop*/
let i=1;
while(i<=9){
    console.log(i);
    i++;
}
/*do while loop*/
let n=1;
do{
    console.log(n);
    n++;
}while(n<=5);

/*4.For...of Array*/
let numbers=[10,20,30]

for(let num of numbers){
    console.log(num)
}




// JavaScript Program to Find the Square Root: 

var number = prompt('Enter the number: '); 
if(typeof(number) === "number") 
var result = Math.sqrt(number); 
console.log(`The square root of ${number} is ${result}`);

// Swap two variables using Javascript:

let a = prompt('Enter the first variable: '); 
let b = prompt('Enter the second variable: '); 
let temp; 
temp = a; 
a = b; 
b = temp; 
console.log(`The value of a after swapping: ${a}`); 
console.log(`The value of b after swapping: ${b}`);


//  Compute Factorial of a number using Javascript :

const num = parseInt(prompt('Enter a positive integer: ')); 
if (num < 0) { 
console.log('Error! Factorial for negative number does not exist.'); 
} 
else if (num === 0) { 
console.log(`The factorial of ${num} is 1.`); 
}
else { 
let fact = 1; 
for (i = 1; i <= num; i++) { 
fact *= i; 
} 
console.log(`The factorial of ${num} is ${fact}.`); 
}

// Reverse a String using Javascript :

function reverseString(str) { 
let newString = ""; 
for (let i = str.length - 1; i >= 0; i--) { 
newString += str[i]; 
} 
return newString; 
} 
const string = prompt('Enter a string: '); 
const result = reverseString(string); 
console.log(result);
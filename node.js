//var express = used in a variable that can be reassigned. It is generally not recommended to use var for requiring modules in Node.js due to its function-scoped nature and potential for hoisting issues.
//let express = usedin a variable that can be reassigned. It is generally recommended to use const instead of let for requiring modules in Node.js to avoid accidental reassignment of the module reference.
//const express = usedin a constant variable that cannot be reassigned. It is a best practice to use const for requiring modules in Node.js to prevent accidental reassignment of the module reference.
const fullName = 'jethro';
let ageNumber = 22;
var isStudent = true;



// primitive data types in JavaScript include:
// 1. Number: Represents numeric values, both integers and floating-point numbers.
// 2. String: Represents sequences of characters, used for text.
// 3. Boolean: Represents true or false values.
// 4. Undefined: Represents a variable that has been declared but has not been assigned a value.
// 5. Null: Represents the intentional absence of any object value.
// 6. Symbol: Represents a unique and immutable value, often used as object property keys.
// 7. BigInt: Represents whole numbers larger than the maximum safe integer in JavaScript (2^53 - 1).  


//strick (===) and loose (==) equality operators in JavaScript:
// 1. Strict Equality (===): Compares both value and type. It returns true only if both the value and type are the same.
// Example: 
// 5 === 5 // true
// 5 === '5' // false

// 2. Loose Equality (==): Compares only the value, allowing for type coercion. It returns true if the values are equal after type conversion.
// Example: 
// 5 == '5' // true
// 0 == false // true   


// logic operators in JavaScript include:
// 1. AND (&&): Returns true if both operands are true.
// Example: 
// true && true // true
// true && false // false

// 2. OR (||): Returns true if at least one of the operands is true.
// Example: 
// true || false // true
// false || false // false

// 3. NOT (!): Returns the opposite boolean value of the operand.
// Example: 
// !true // false
// !false // true
//example of using logic operators:
let isRaining = true;
let isSunny = false;

if (isRaining && !isSunny) {
  console.log('It is raining and not sunny.');
} else if (!isRaining && isSunny) {
  console.log('It is sunny and not raining.');
} else {
  console.log('The weather is uncertain.');
}


// switch statement in JavaScript is a control flow statement that allows you to execute different blocks of code based on the value of an expression. It is often used as an alternative to multiple if-else statements when you have a single variable to evaluate against multiple possible values.
// The syntax of a switch statement is as follows:

// switch (expression) {
//   case value1:
//     // Code to execute if expression === value1
//     break;
//   case value2:
//     // Code to execute if expression === value2
//     break;
//   ...
//   default:
//     // Code to execute if expression doesn't match any case
// }

// Example:
let fruit = 'mangoes';

switch (fruit) {
  case 'banana':
   console.log('This is a banana.');
    break;
  case 'apple':
    console.log('This is an apple.');
    break;
  case 'orange':
    console.log('This is an orange.');
    break;
    case 'mangoes':
    console.log('This is a mango.');
    break;
  default:
    console.log('Unknown fruit.');

}   
// switch  and if-else statements are both control flow statements in JavaScript, but they have different use cases and syntax.
// 1. Use Case:
// - switch: Best suited for situations where you have a single variable to evaluate against multiple possible values. It is often used when you have a fixed set of known values to compare against.
// - if-else: More flexible and can handle complex conditions, including ranges, comparisons, and logical operators. It is suitable for scenarios where you need to evaluate multiple conditions that may not be based on a single variable.

// 2. Syntax:
// - switch: Uses the switch keyword followed by an expression in parentheses. Each case is defined with the case keyword, followed by the value to compare against. The break statement is used to exit the switch block after a match is found.
// - if-else: Uses the if keyword followed by a condition in parentheses. The else if keyword can be used for additional conditions, and the else keyword can be used for a default case when none of the conditions are met. 

//example of if-else statement:
let number = 10;

if (number > 0) {
  console.log('The number is positive.');
} else if (number < 0) {
  console.log('The number is negative.');
} else {
  console.log('The number is zero.');
} 

let age = 25;
if (age >= 19) {
  console.log('You are an adult.');
} else if (age < 19) {
  console.log('you are young');
} else {
  console.log('you are almost an adult');
}
 


let accountBalance =  0.2;
if (accountBalance <= 0) {
  console.log('Account Overdrawn');
} else if (accountBalance > 0 && accountBalance < 100) {
  console.log('Account Active');
}

//Comprehensive Challenge: Write a short script using variables, arithmetic operators, and a switch statement that calculates a final grade based on a numeric score out of 100 divided into ranges for grades A, B, C, D, and F.
// Example:
let score = 85; // Example score

switch (true) {
  case (score >= 90):
    console.log('Final Grade: A');
    break;
  case (score >= 80 && score < 90):
    console.log('Final Grade: B');
    break;
  case (score >= 70 && score < 80):
    console.log('Final Grade: C');
    break;
  case (score >= 60 && score < 70):
    console.log('Final Grade: D');
    break;
  default:
    console.log('Final Grade: F');
} 

//
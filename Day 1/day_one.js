/*
Day 1: Exercises
Write a single line comment which says, comments can make code readable

Write another single comment which says, Welcome to 30DaysOfJavaScript

Write a multiline comment which says, comments can make code readable, easy to reuse and informative

Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

Declare four variables without assigning values

Declare four variables with assigned values

Declare variables to store your first name, last name, marital status, country and age in multiple lines

Declare variables to store your first name, last name, marital status, country and age in a single line

Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

*/


// 1.
//comments can make codes readable
// 2.
// Welcome to 
// 30DaysOfJavaScript
// 3.
/*
comments can make codes readable, easy to reuse and informative
*/
// 4.
let typeString = "I'm a string!";
let isBoolean = true;
let notDefined;
let nothingToSeeHere = null;
// 5.
console.log(typeof(typeString), typeof(isBoolean), typeof(notDefined), typeof(nothingToSeeHere));
// 6.
let a;
let b;
let c;
let d;
// 7.
let person1 ="Andie";
let person2 = "John";
let person3 = "Jamie";
let person4 = "Zack";
// 8.
let firstName = "Tolu";
let lastName = "Michael";
let isMarried = false;
let country = "canada";
let age = 23;
//9.
let fName = "Tolu", lName = "Michael", Married = false, myCountry = "canada", ageNow = 23;
//10.
const myAge = 23;
const yourAge = 45;
console.log(`I am ${myAge} years old. \nYou are ${yourAge} years old.`)

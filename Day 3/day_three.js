//Exercise 1
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Tolu";
let lastName = "Michael";
let city = "Sunburst";
let age = 23;
let isMarried = false;
let year = 2022;
let country = "canada";
console.log(typeof(firstName), typeof(lastName), typeof(city), typeof(age), typeof(isMarried), typeof(year), typeof(country));

//2. Check if type of '10' is equal to 10
console.log(`${typeof('10') == 10}`);

//3. Check if parseInt('9.8') is equal to 10
console.log(`${parseInt('10') == 10}`);

//4. Boolean value is either true or false.
//i. Write three JavaScript statement which provide truthy value.
console.log(`${6 > 2}`);
console.log(`${-10 < -2}`);
console.log(`${!(isMarried === true)}`);
//ii. Write three JavaScript statement which provide falsy value.
console.log(null == true);
console.log(' ' == true);
console.log(NaN === NaN);
//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
/* 
  i.    4 > 3 true
  ii.   4 >= 3 true
  iii.  4 < 3 false
  iv.   4 <= 3 false
  v.    4 == 4 true
  vi.   4 === 4 true
  vii.  4 != 4 false
  viii. 4 !== 4 false
  ix.   4 != '4' false
  x.    4 == '4' true
  xi.   4 === '4' false  
*/
//xii. Find the length of python and jargon and make a falsy comparison statement.
const py = "python";
const jg = "jargon";
console.log(jg == -4 && py == 6); //false

//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
/* 
  i.    4 > 3 && 10 < 12 true
  ii.   4 > 3 && 10 > 12 false
  iii.  4 > 3 || 10 < 12 true
  iv.   4 > 3 || 10 > 12 true
  v.    !(4 > 3) false
  vi.   !(4 < 3) true
  vii.  !(false) true
  viii. !(4 > 3 && 10 < 12) false
  ix.   !( 4 > 3 && 10 > 12) true
  x.    !(4 === '4') true
*/
//xi.
console.log(!(py.includes("on") && "dragon".includes("on"))) //false

//7. Use the Date object to do the following activities
let today = new Date();
console.log(today.getFullYear()); //i. year today
console.log(today.getMonth() + 1); //ii. month as number
console.log(today.getDate()); //iii. today's date
console.log(today.getDay()); //iv. day as a number
console.log(today.getHours()); //v.  hours
console.log(today.getMinutes()); //vi. minutes
console.log(today.getTime()); //vii.  time elapsed sin '70 in seconds

//Exercise 2
//1. calculating area of triangle 

let base = Number(prompt("Enter base: "));
let height = Number(prompt("Enter height: "));
alert(`The area of the triangle is ${ 0.5 * base * height}`);
//2. calculating perimeter of triangle
let sideA = Number(prompt("Enter side a:"));
let sideB = Number(prompt("Enter side b:"));
let sideC = Number(prompt("Enter side c:"));
alert(`The perimeter of the triangle is ${sideA * sideB * sideC}`);
//3. calculating area of reactangle
let lgth = Number(prompt("Enter length:"));
let width = Number(prompt("Enter width:"));
alert(`The area of the rectangle is ${2 * (lgth + width)}`);
//4. calculating area of a circle
let r = Number(prompt("Enter radius:"));
const PI = 3.14;
alert(`The area of the circle is ${PI * (Math.pow(r, 2))} and the circumference of the circle is ${2 * PI * r}`); 
//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//y = mx + c

let c = -2
let x0 = -c + 0;
let y0 = + c;
let m = (0 - c)/ x;
console.log(`Slope is ${m}, x-intercept is ${x0} and y-intercept${y0}`);

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
var x1 = 2;
var y1 = 2;
var x2 = 6;
var y2 = 10;
console.log(`Slope is m = ${(y2 - y1) / (x2 - x1)}`);

//7. Compare the slope of above two questions.
console.log(m == (y2 - y1) / (x2 - x1));
//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
var x = -3;
let y = Math.pow(x, 2) + (6 * x) + 9;

console.log(y);

//9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

hours = Number(prompt("Enter hour: "))
rate_per_week = Number(prompt("Enter rate per week:"))
alert(`Your weekly earning is ${hours * rate_per_week}`);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
(firstName.length > 7) ? console.log("Your name is long!") : console.log("Your name is short!");

//11. Compare your first name length and your family name length and you should get this output.
(firstName.length > lastName.length) ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`) : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}.`);

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} older than you.`);

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

userYear = prompt("Enter birth year: ");
((today.getFullYear() - userYear) >= 18) ? alert(`You are ${today.getFullYear() - userYear}. You are old enough to drive.`) : alert(`You are ${today.getFullYear() - userYear}. You will be allowed to drive  after ${18 - (today.getFullYear() - userYear)} years.`);

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

numOfYearsLived = prompt("Enter number of years you live: ");
alert(`You lived ${numOfYearsLived * 31536000} seconds.`); 

//15. Create a human readable time format using the Date time object
//i. YYYY-MM-DD HH:mm
console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`);
//ii. DD-MM-YYYY HH:mm
console.log(`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`);
//iii. DD/MM/YYYY HH:mm
console.log(`${today.getDate() }/${today.getMonth() + 1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`);
/*
Exercises: Level 3
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${ (today.getHours() < 10) ?  ('0' + today.getHours()) : (today.getHours())}:${(today.getMinutes() < 10) ?  ('0' + today.getMinutes()) : (today.getMinutes())}`);
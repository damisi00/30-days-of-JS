//Exercise 1
//1. Declare an empty array;
//could be new Array(), []
const emptyArr = Array();

//2. Declare an array with more than 5 number of elements
const fiveNumberArr = [1, 2, 3, 4, 5];

//3. Find the length of your array
console.log(fiveNumberArr.length);

//4. Get the first item, the middle item and the last item of the array
let firstNum = fiveNumberArr[1];
let middleNum = fiveNumberArr[2];
let lastNum = fiveNumberArr[fiveNumberArr.length - 1];
console.log(`First item is ${firstNum}, middle item is ${middleNum} and the last item of the array is ${lastNum}.`);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const  mixedDataTypes = [
    5, 
    'Day 5', 
    false, 
    null, 
    undefined, 
    {1: 'Day One', 2: 'Day Two', 3: 'Day Three'}, 
    ['string', 'boolean', 'number' ]
];

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];

//7. Print the array using 
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(`Number of companies is ${itCompanies.length}.`);

//9. Print the first company, middle and last company
let firstCompany = itCompanies[1];
let middleCompany = itCompanies[3];
let lastCompany = itCompanies[itCompanies.length - 1];
console.log(`First item is ${firstCompany}, middle item is ${middleCompany} and the last item of the array is ${lastCompany}.`)

//10. Print out each company
for (let x in itCompanies){
    console.log(itCompanies[x]);
}

//11. Change each company name to uppercase one by one and print them out
for (let x in itCompanies){
    console.log(itCompanies[x].toUpperCase());
}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let changeToStr = itCompanies.join(', ');
console.log(`${changeToStr} are big IT companies.`);

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
for(let i in itCompanies) {
    i= 'IBM'; //test
    if (itCompanies.includes(i) === true){
        console.log(i)
    }else{
        console.log('company not found')
    }
}
//14. Filter out companies which have more than one 'o' without the filter method
for(let y in itCompanies){
    // if y.match(/o+/gi) === true{

    // }
}

//15. Sort the array using sort() method

console.log(itCompanies.sort());

//16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17. Slice out the first 3 companies from the array
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
let firstThreeComps = itCompanies.slice(0, 4);
console.log(firstThreeComps);

//18. Slice out the last 3 companies from the array
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
let threeCountriesSliced = itCompanies.slice(-3);
console.log(threeCountriesSliced);

//19. Slice out the middle IT company or companies from the array
let getIndex = Math.floor(itCompanies.length / 2)
if (itCompanies.length % 2 === 0){
   
    console.log(itCompanies.slice(getIndex - 1, getIndex + 1));
}else{
    console.log(`${itCompanies.slice(getIndex, getIndex + 1)}`); //when there's only one middle value
}

//20. Remove the first IT company from the array
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies.shift())

//21. Remove the middle IT company or companies from the array
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies.splice(3, 4));

//22. Remove the last IT company from the array
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
console.log(itCompanies.splice(-1, 1));

//24. Remove all IT companies
console.log(itCompanies.splice());

/*
Exercise: Level 2
1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
*/
import countries from './countries.js';
import web_techs from './web_tech.js';

//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let reg = /['.,]/g;
let words = text.replace(reg, '').split(' ');
console.log(words);
console.log(words.length);

/*
3. In the following shopping cart add, remove, edit items

   -- const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
   -- add 'Meat' in the beginning of your shopping cart if it has not been already added
   -- add Sugar at the end of your shopping cart if it has not been already added
   -- remove 'Honey' if you are allergic to honey
   -- modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);

    shoppingCart.push('Sugar');
    console.log(shoppingCart);

    console.log(shoppingCart.splice(-2, 1));
    shoppingCart[3] = 'Green Tea'
    console.log(shoppingCart);


//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.



//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

//6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/*
The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
--Sort the array and find the min and max age
--Find the median age(one middle item or two middle items divided by two)
--Find the average age(all items divided by number of items)
--Find the range of the ages(max minus min)
--Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let minAge = ages[0];
let maxAge = ages[ages.length -1]; 
console.log(`The min age is ${minAge} & the max age ${maxAge}.`);

// let medianAge = ages.length / 2; 
if (ages.length % 2 === 0){
    console.log(`${ages[(ages.length / 2) - 1]}, ${ages[ages.length / 2]}`)
}else{
    console.log(Math.ceil(ages[ages.length / 2]));
}

let sum = 0;
for (let a in ages){
    sum += ages[a];
}
let average = sum / ages.length;
console.log(average);
//2. Find the middle country(ies) in the countries array


//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more  country for the first half.
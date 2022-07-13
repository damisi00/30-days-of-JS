/*
computer Day 2: Exercises
Exercise: Level 1
*/
//1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let initialSentence = '30 Days Of JavaScript'; 

//2. Print the string on the browser console using console.log()
console.log(initialSentence); 

//3. Print the length of the string on the browser console using console.log()
console.log(initialSentence.length); 

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(initialSentence.toUpperCase()); //4

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(initialSentence.toLowerCase()); //5

//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(initialSentence.substring(0, 3)); 

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(initialSentence.slice(3)); //7

//8. Check if the string contains a word Script using includes() method
console.log(initialSentence.includes("Script")); //8

//9. Split the string into an array using split() method
console.log(initialSentence.split(""));

/*10. Split the string 30 Days Of JavaScript at the space using split() method
 */
console.log(initialSentence.split(" ")); //10

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let elevenSentence = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(elevenSentence.split(", ")); //11

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(initialSentence.replace("JavaScript", "Python"));

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(initialSentence.charAt("15")); //13

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(initialSentence.charCodeAt("J")); //14

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(initialSentence.indexOf("a")); //15 

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(initialSentence.lastIndexOf("a")); //16 

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`You cannot end a sentence with because because because is a conjunction`.indexOf("because")); //17

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`You cannot end a sentence with because because because is a conjunction`.lastIndexOf("because")); //18

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`You cannot end a sentence with because because because is a conjunction`.search("because")); //19

//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(initialSentence.trim()); 20

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(initialSentence.startsWith("30")); 21

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(initialSentence.endsWith("t")); //22

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(initialSentence.match(/a/gi)); //23

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log("30 Days of".concat(" JavaScript")); //24

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(initialSentence.repeat(2)); //25

// Exercise 2
//1. Exercise: Level 2
/*1.
Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to ${"help"} one another.`) //1

/*2.
Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
console.log(`Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same-- with charity you give love, so don't just give money but reach out your hand instead.`); //2

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10')=== 10);
console.log(Number("10") === 10); //3 casting

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10); //4

//5. Check if 'on' is found in both python and jargon
let word1 = 'python';
let word2 = 'jargon';
console.log(`${word1.includes('on')} and ${word2.includes('on')}`); //5

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log(`I hope this course is not full of jargon.`.includes('jargon')); //6

//7. Generate a random number between 0 and 100 inclusively.
console.log(Math.ceil(Math.random() * 101)); //7

//8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50)); //8

//9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * (255 - 0 + 1) + 0)); //9

//10. Access the 'JavaScript' string characters using a random number.
let word3 = "JavaScript";
console.log(word3[Math.floor(Math.random() * word3.length)]); //10

/*11.
Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 
*/
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`); //11

//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(`You cannot end a sentence with because because because is a conjunction`.substring(31, 54)); //12

/* 
Exercises: Level 3
*/
//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let word4 = `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same-- with charity you give love, so don't just give money but reach out your hand instead.`
console.log(word4.match(/love/gi)); //1

//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`You cannot end a sentence with because because because is a conjunction`.match(/because/gi)); //2

/*3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    // const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' */

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanSentence = sentence.replace("30#Days&OfJavaScript", "30 Days Of JavaScript").replace(/[%@$!&;#]/g, '').split(' ');
for(let x in cleanSentence){
    let count = {};
    count.key
    if (x in count){
        count[x] += 1 
    }else{
        count[x] = 1
    }
    console.log(count)
} //3

//4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
numbers = text.match(/[\d]/g);
console.log(`${((numbers[0] + numbers[2]) * 12) + numbers[1]} `);
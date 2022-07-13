//Exercises: Level 1
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = Number(prompt("Enter your age: "));
(age >= 18) ? alert(`You are old enough to drive.`) : alert(`You are left with ${18 - age} years to drive.`);

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 23;
let yourAge = Number(prompt("Enter your age: "));
if (yourAge < myAge){
    console.log(`You are ${myAge - yourAge} year(s) younger than me.`);
} else if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} year(s) older than me.`);
}else{
    console.log(`We are age mates.`);
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
let a = 7;
let b = 10;
if(a > b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${a} is less than ${b}`);
}
//ternary operator.
(a > b) 
? console.log(`${a} is greater than ${b}`) 
: console.log(`${a} is less than ${b}`);

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = Number(prompt("Enter a number: "));
(num % 2 === 0)
? alert(`${num} is an even number.`)
: alert(`${num} is an old number.`)

/*
Exercises: Level 2
1. Write a code which can give grades to students according to theirs scores: 
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = Number(prompt("Enter score here: "));
if (score >= 90 && score <= 100){
    console.log(`Student's grade is A.`);
}else if (score >= 70 && score <= 89){
    console.log(`Student's grade is B.`);
}else if (score >= 60 && score <= 69){
    console.log(`Student's grade is C.`);
}else if (score >= 50 && score <= 59){
    console.log(`Student's grade is D.`);
}else if (score >= 0 && score <= 49){
    console.log(`Student's grade is F.`);
} else{
    console.log(`This score is not on the spectrum.`)
}

/*
2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
-- September, October or November, the season is Autumn.
-- December, January or February, the season is Winter.
-- March, April or May, the season is Spring
-- June, July or August, the season is Summer
*/

let season = (prompt("To check if the season is Autumn, Winter, Spring or Summer.\nEnter the month in full:")).toLowerCase();

switch(season){    
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn");
        break;
    case "december":
    case "january":
    case "february":
        console.log("The season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("The season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer");
        break;
    default:
        console.log("Invalid input")
        
}

/*
3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */

    let day = (prompt('Check if a day is weekend day or a working day. \nWhat is the day today?')).toLowerCase()
    let mod_day = day[0].trim().toUpperCase() + day.slice(1);

    if(day === 'saturday' || day === 'sunday'){
        console.log(`${mod_day} is a weekend.`)
    } else if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'){
        console.log(`${mod_day} is a working day.`)
    }else{
        console.log('Invalid input.')
    }

/*
Exercises: Level 3
1. Write a program which tells the number of days in a month.
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.

    */
    let month =  (prompt('Wanna to find out the number of days in a month. \nEnter a month: ')).toLowerCase();
    let mod_month= month[0].trim().toUpperCase() + month.slice(1);
    switch(month) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            alert(`${mod_month} has 31 days.`);
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            alert(`${mod_month} has 30 days.`);
            break;
        case 'february':
            alert(`${mod_month} has 28 days.`);
            break;
        default:
            alert('Invalid input.');

    }

    // Write a program which tells the number of days in a month, now consider leap year.
    //when year% 4 === 0
    switch(month) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            console.log(`${mod_month} has 31 days.`);
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            console.log(`${mod_month} has 30 days.`);
            break;
        case 'february':
            console.log(`${mod_month} has 29 days.`);
            break;
        default:
            alert('Invalid input.');
    }


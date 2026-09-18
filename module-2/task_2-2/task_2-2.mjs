"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("Part 1 ");

/* Put your code below here!*/

printOut(2+3*(2-4)*6);

printOut(newLine);

printOut(" Part 2");
/* Put your code below here!*/
let millimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
let sumPart2 = millimeters / millPrInch;
printOut(sumPart2);

printOut(newLine);

printOut("Part 3");
/* Put your code below here!*/
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;

let days =3;
let hours = 12;
let minutes = 14;
let seconds = 45;

let sumPart3 = (seconds / secondsInMinute) * (minutesInHour * hours) * (days * hoursInDay * minutesInHour) + 14;
printOut(sumPart3);

printOut(newLine);

printOut("Part 4");
/* Put your code below here!*/


const totalMinutes = 6322.52

// Step 1 - Find the number of whole days

let remainder = totalMinutes / (hoursInDay * minutesInHour); // 4.39063889 days
const wholeDays = Math.floor (remainder); // 4 dager. Remainder = 0.39063889 days

//Step 2 - Isolate the remainder and find the number of whole hours

remainder = remainder - wholeDays; // 0.39063889 days
remainder = remainder * hoursInDay; // 9.37533333 hours
const wholeHours = Math.floor (remainder); // 9 hours. Remainder = 9.37533333 hours

//Step 3 - Isolate the remainder and find the number in whole minutes

remainder = remainder - wholeHours; // 0.37533333  hours
remainder = remainder * minutesInHour; // 22.52 minutes
const wholeMinutes = Math.floor (remainder); // 22 minutes. Remainder = 0.52 minutes

//Step 4 - Isolate the remainder and find the number in whole seconds 

remainder = remainder - wholeMinutes; // 0.52 minutes
remainder = remainder * secondsInMinute; // 31.2 seconds
const wholeSeconds = Math.floor (remainder); // 31 seconds. Remainder = 0.2 seconds

printOut(wholeDays + " days " + wholeHours + " hours " + wholeMinutes + " minutes and " + wholeSeconds + " seconds.");       

// Lært: Ikke sett deklarer const dager/timer/minutter/sekunder flere ganger i samme fil. 
// Bruk de som er deklarert i filen allerede. Man kan lage nye variabler, men ikke deklarer de som const dager/timer/minutter/sekunder på nytt.

printOut(newLine);

printOut(" Part 5 ");
/* Put your code below here!*/

// Convert 54 dollars to Norwegian kroner and print price for both
// NOK to USD and USD to NOK

const dollars = 54;
let NOK = dollars * 10.5;
let USD = NOK / 10.5;
printOut(dollars + " USD is " + NOK + " NOK");
printOut(NOK + " NOK is " + USD + " USD");

printOut(newLine);

printOut("Part 6 ");
/* Put your code below here!*/
// Det kommer opp forslag til kode hele tiden, kan de brukes så lenge de er rett? 

// Create a variable that contains the following text:
const text = "There is much between the heavens and earth that we do not understand";
// Print the number of characters in the text
printOut(text.length);
// Print the character at position 19
printOut(text[19]);
//Print the Characters starting at position 35 and 8 charachters forward
printOut(text.substring(35, 43));
// Print the index at which "earth" starts in the text
printOut(text.indexOf("earth"));

printOut(newLine);

printOut(" Part 7 ");
/* Put your code below here!*/

//Comparison, print the values for the following expressions (evaluate wether the statements are true) 

// Remember that 2 is not "2", if the value has this: "" it is a string and if not its a number
// 2 og "2" er ikke det samme, med "" er det en string, uten er det et tall.

//No quotes (2) = A mathematical Number. You can do math with it (add, subtract, multiply).
//With quotes ("2") = A String of text. It is literally just typography. It is a "picture" of a number.

// Is 5 greater than 3? 
printOut(5 > 3);
// Is 7 greater than or equal to 7?
printOut(7 >= 7);
// Is "a" greater than "b"?
printOut("a" > "b");
// Is "1" less than "a"? 
printOut("1" < "a");
// Is 2500 less than "abcd"?
printOut(2500 < "abcd");
// Arne is not equal to Thomas?     
printOut("Arne" !== "Thomas");
// (2 equals 5) is this statement true?
printOut(2 === 5);
//("abcd" is greater than "bcd") is this statement false?
printOut("abcd" <= "bcd");


//test
printOut("Test");  
printOut(2==="2" ? "True" : "False"); // False, because === checks for both value and type, and 2 is a number while "2" is a string.


printOut(newLine);

printOut(" Part 8 ");
/* Put your code below here!*/
printOut ("Convert and print the following expressions:") 
printOut ("From text 254 to number");
let textToNumber = Number("254");
printOut(textToNumber);
printOut ("From text 57.23 to a number");
let textToFloat = parseFloat("57.23");
printOut(textToFloat);
printOut ("From text 25 kroner to a number")
let textToInteger = parseInt("25");
printOut(textToInteger);


printOut(newLine);




printOut(" Part 9 ");
/* Put your code below here!*/
printOut ("Create variable Y and randomly generate a number from 1 to 360 (1>=r<=360)");
let Y = Math.random() * 360 + 1;
printOut(Y  + " random desimal number");

let roundedY = Math.floor (Math.random () *360) + 1;  
printOut(roundedY + " whole number");


printOut(newLine);

/* Task 10*/
printOut(" Part 10 "); 
/* Put your code below here!*/

// Use division (/) and modolus to calculate how many weeks there are in 131 days

const daysInWholeWeeks = 7
const durationDays = 131;
let wholeWeeks = (durationDays/daysInWholeWeeks);
printOut (wholeWeeks + " weeks" );

let remainder2 = Math.floor (wholeWeeks)

printOut (remainder2 + " whole weeks using math.floor");
remainder2 = wholeWeeks - remainder2;
printOut (remainder2 + " remainder");   


let modulus = 131 % 7;
printOut (modulus + " whole days using modulus");

printOut(newLine);
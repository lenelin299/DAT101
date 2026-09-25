"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
const wakeUpTime = 8;
const time = 7;
if (wakeUpTime === time) {
    printOut("Take the bus!");
} else if (time === 8) {
    printOut("Take the Train!")
} else {
    printOut("Take the Car!");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part4Number = 0.00001
if(part4Number > 0){
    printOut("The number is positive");
}else if (part4Number <0){
    printOut("The number is Negative!");
}else{
    printOut("The number is Zero!");
}


printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Image User Size = ${imageUserSize}`);
if (imageUserSize >= imageMinSize) {
    if (imageUserSize <= imageMaxSize) {

        printOut("Thank you!");
    } else
        printOut("Image is too large");
} else {
    printOut("Image is too small!");
}

if (imageUserSize > imageMaxSize) {
    printOut("Image is too large");
}
else if (imageUserSize < imageMinSize) {
    printOut("Imge is too small");
}
else {
    printOut("Thank you!")
}


//opt+shift+f=rydd opp
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = ["January", "February", "Mars", "April", "Mai",
    "June", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(monthName);
// Bruke w3schools for å finne ut hvordan jeg finner ut selektering av strings

if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You dont need extra vitamin D")
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

switch (monthName) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        printOut("31 days in month");
        break;
    case "February":
        printOut("28 days in month");
    default:
        printOut("30 days in a month");

}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
//March through May, but in April you have temporary premises in the building next door. Use the month
//constant in exercise 8 to inform the status of your gallery in that month
//if? switch case?

if(monthName === "March" || monthName === "May"){
    printOut("SORRY, the gallery is CLOSED");
}else if(monthName === "April"){
    printOut("Sorry Main Gallery is closed, you are welcome into the premiss next door");
}else{
    printOut("Welcome to my Gallery!");
}

printOut(newLine);

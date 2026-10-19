"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*
Use "for" loops to generate two lines on the HTML page.
One should count from 1 to 10, and the other should count from 10 to 1.
Use only two lines to print the rows.
*/
let task1Line = "Line 1: ";
for (let i = 1; i <= 10; i++) {
  task1Line += i + " ";
}
printOut(task1Line);
task1Line = "Line 2: "; // Reset the variable for the second
for (let i = 10; i >= 1; i--) {
  task1Line += i + " ";
}
printOut(task1Line);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const task2GuessNumber = 45;
let task2RandomNumber = 0;
while (task2RandomNumber !== task2GuessNumber) {
    task2RandomNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("The random number is: " + task2RandomNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const task3GuessNumber = 45;
let task3RandomNumber = 0;
let task3Attempts = 0;
let task3TimeStart = Date.now();
while (task3RandomNumber !== task3GuessNumber) {
    task3RandomNumber = Math.floor(Math.random() * 1000000) + 1;
    task3Attempts++;
}
let task3TimeEnd = Date.now();
let task3TimeTaken = (task3TimeEnd - task3TimeStart);
printOut(`The random number is: ${task3RandomNumber}`);
printOut(`Number of attempts: ${task3Attempts}`);
printOut(`Time taken: ${task3TimeTaken} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*
Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
*/

let primes = "";
for(let i = 2; i <= 200; i++) {
    let isPrime = true;
    let j = i - 1;
    while(isPrime && j > 1) {
        if(i % j === 0){
            isPrime = false;
        }
        j--;
    }
    if(isPrime === true){
        primes += " " + i;
    }
}

printOut(primes);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let rowText = "";
for (let row = 1; row  <= 7; row++){
    for(let col =1; col <=9; col++){
        rowText += " K"+col + "R" + row;
    }
    rowText += newLine;
}

printOut(rowText); 
  
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Simulate 5 student grades using Math.random(), from 1 to 236 (inclusive).
Print each student's grade (A to F) based on the percentage.
*/

for (let i = 1; i <= 5; i++) {
    const task6Points = Math.floor(Math.random() * 236) + 1;
    const task6Percent = (task6Points / 236) * 100;

    let task6Grade;
    if (task6Percent >= 89) {
        task6Grade = "A";
    } else if (task6Percent >= 77) {
        task6Grade = "B";
    } else if (task6Percent >= 65) {
        task6Grade = "C";
    } else if (task6Percent >= 53) {
        task6Grade = "D";
    } else if (task6Percent >= 41) {
        task6Grade = "E";
    } else {
        task6Grade = "F";
    }

    printOut(`Student ${i}: ${task6Points} points (${task6Percent.toFixed(1)}%) = ${task6Grade}`);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const d1 = Math.floor(Math.random() * 6) + 1;
const d2 = Math.floor(Math.random() * 6) + 1;
const d3 = Math.floor(Math.random() * 6) + 1;
const d4 = Math.floor(Math.random() * 6) + 1;
const d5 = Math.floor(Math.random() * 6) + 1;
const d6 = Math.floor(Math.random() * 6) + 1;

const diceThrow = `${d1} ${d2} ${d3} ${d4} ${d5} ${d6}`;
printOut("Throw: " + diceThrow);

const dice = [d1, d2, d3, d4, d5, d6];

let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
for (let i = 0; i < 6; i++) {
    const c = dice[i];
    if (c === 1) {
        c1++;
    } else if (c === 2) {
        c2++;
    } else if (c === 3) {
        c3++;
    } else if (c === 4) {
        c4++;
    } else if (c === 5) {
        c5++;
    } else if (c === 6) {
        c6++;
    }
}

const counts = [c1, c2, c3, c4, c5, c6];
let summary = "";
for (let i = 0; i < 6; i++) {
    if (counts[i] > 0) {
        summary += (i + 1) + "s: " + counts[i] + "   ";
    }
}
printOut(summary);

let pairs = 0;
for (let i = 0; i < 6; i++) {
    if (counts[i] === 2) {
        pairs++;
    }
}

if (counts.includes(6)) {
    printOut("Yatzy!");
} else if (counts.every(n => n === 1)) {
    printOut("Straight!");
} else if (counts.includes(4) && counts.includes(2)) {
    printOut("Tower!");
} else if (pairs === 3) {
    printOut("Three pairs!");
} else {
    printOut("Better luck next time!");
}

printOut(newLine);

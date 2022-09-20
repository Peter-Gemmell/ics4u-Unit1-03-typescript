/**
 * The program calculates the microwave
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-19
 */

import promptSync from "prompt-sync";

const prompt = promptSync();
const userInput = prompt("What are you heating? (sub, pizza or soup) : ");
const amountfoodString = prompt("How many of that item are you putting in? : ");
const food = parseInt(amountfoodString);
let time = 1;
let percent = 1;
if (userInput === "pizza") {
  time = 45;
} else if (userInput === "sub") {
  time = 60;
} else if (userInput === "soup") {
  time = 105;
} else {
  console.log("Not acceptable input.");
}
if (food === 1) {
  percent = 1;
} else if (food === 2) {
  percent = 1.5;
} else if (food === 3) {
  percent = 2;
} else if (isNaN(+food)) {
  console.log("Not an acceptable input.");
} else {
  console.log("Not correct amount of items");
}

if (time > 1 && percent > 1) {
  const finalTime = time * percent;
  console.log(`The time in the microwave is ${finalTime} seconds.`);
}
console.log("\nDone.");

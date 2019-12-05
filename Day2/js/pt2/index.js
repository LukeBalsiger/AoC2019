// Console interaction
const inquirer = require("inquirer");
const chalk = require("chalk");
const log = console.log;
const result = chalk.bgGreenBright.black;
const info = chalk.blueBright;
const sectionHeader = chalk.yellowBright;

// Custom calculator and given inputs
const calc = require("./calculator.js");
const input = require("./input.json");

// Log inputs for clarity
log(sectionHeader("Input:"));
log(info(input));

log("\n");

// Run the calculation based off of our given inputs
log(sectionHeader("Solution:"));

let solutionFound = false;
// When we run these calculations, we have to vary the input until we get the result in question
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    // Make a copy of the input so we don't modify the original data. This will reset the input every run
    let data = Object.assign([], input);

    // Set the input values to the current iteration
    data[1] = i;
    data[2] = j;

    // Run the computer
    let answer = calc.calculate(data);

    // If the computer find the value in question
    if (answer[0] === 19690720) {
      // Stop further execution
      solutionFound = true;

      // Log our result!
      log(result(`noun: ${i}, verb: ${j}, answer: ${100 * i + j}`));
    }

    // Solution check
    if (solutionFound) {
      break;
    }
  }

  // Solution check
  if (solutionFound) {
    break;
  }
}

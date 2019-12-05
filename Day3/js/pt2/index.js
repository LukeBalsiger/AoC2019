// Console interaction
const inquirer = require("inquirer");
const chalk = require("chalk");
const log = console.log;
const result = chalk.bgGreenBright.black;
const info = chalk.blueBright;
const sectionHeader = chalk.yellowBright;
const warning = chalk.redBright;

// Custom calculator and given inputs
const calc = require("./calculator.js");
const input = require("./input.json");

// Log inputs for clarity
log(sectionHeader("Input:"));
log(info(`wire1: ${input.wire1}`));
log(info(`wire2: ${input.wire2}`));

log("\n");

// Run the calculation based off of our given inputs
log(sectionHeader("Solution:"));
log(warning("Please wait..."));
log(
  warning(
    "This could take upwards of 20 minutes depending on your input, because I'm a bad programmer."
  )
);
log(
  warning(
    "I iterate over 2 300000+ length arrays containing sub arrays 2 times each, and cant be bothered to try to make it more performant."
  )
);
log(result(calc.calculate(input.wire1, input.wire2)));

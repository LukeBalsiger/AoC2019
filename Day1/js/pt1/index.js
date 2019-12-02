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
log(result(calc.calculateBaseFuelPerModule(input)));

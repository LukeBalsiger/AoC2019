exports.calculate = program => {
  // Since we have exit conditions, declare a var to set when we want to stop processing
  let continueProcecssing = true;

  // Iterate over the program
  for (let i = 0; i < program.length; i++) {
    // Handle cases of first value of op codes
    switch (program[i]) {
      // Case where op code = 1
      case 1:
        program[program[i + 3]] =
          program[program[i + 1]] + program[program[i + 2]];

        // Once we process the op code, jump forward to get to the next
        i = i + 3;
        break;

      // Case where op code = 2
      case 2:
        program[program[i + 3]] =
          program[program[i + 1]] * program[program[i + 2]];

        // Once we process the op code, jump forward to get to the next
        i = i + 3;
        break;

      // Case where op code = 99
      case 99:
        // Don't do any more processing
        continueProcecssing = false;
        break;

      // This represents the case we would hit if we didn't get a 1, 2 or 99. This can happen if there are additional values after a 99.
      default:
        continueProcecssing = false;
        break;
    }

    // If the run hit a 99 or the end, we are done.
    if (!continueProcecssing) {
      break;
    }
  }

  return program;
};

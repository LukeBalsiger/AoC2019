// Function to calculate a total value of fuel needed given an array of module weights
exports.calculateBaseFuelPerModule = moduleWeights => {
  // Create a variable for our answer
  let totalFuelRequired = 0;

  // Iterate through each module
  for (let i = 0; i < moduleWeights.length; i++) {
    // Given formula for determining fuel per module weights
    let moduleFuelRequired = Math.floor(moduleWeights[i] / 3) - 2;

    // Add the value of fuel needed for ith module to the running total
    totalFuelRequired += moduleFuelRequired;
  }

  // Return the final total!
  return totalFuelRequired;
};

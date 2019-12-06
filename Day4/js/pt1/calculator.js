exports.calculate = (lowerBound, upperBound) => {
  let validCount = 0;
  for (let i = parseInt(lowerBound); i <= parseInt(upperBound); i++) {
    if (isValidPassword(i.toString())) {
      validCount++;
    }
  }
  return validCount;
};

exports.parseInput = input => {
  let text = input[0];
  let inputArr = text.split("-");
  return [inputArr[0], inputArr[1]];
};

const isValidPassword = password => {
  return (
    isValidLength(password, 6) &&
    containsRepeatedDigits(password) &&
    digitsNeverDecrease(password)
  );
};

const isValidLength = (password, length) => {
  return password.length === length;
};

const containsRepeatedDigits = password => {
  let previousDigit = password[0];
  for (let i = 1; i < password.length; i++) {
    if (password[i] === previousDigit) {
      return true;
    }
    previousDigit = password[i];
  }
  return false;
};

const digitsNeverDecrease = password => {
  let previousDigit = parseInt(password[0]);
  for (let i = 1; i < password.length; i++) {
    if (parseInt(password[i]) < previousDigit) {
      return false;
    }
    previousDigit = parseInt(password[i]);
  }
  return true;
};

exports.isValidPassword = isValidPassword;

exports.isValidLength = isValidLength;

exports.containsRepeatedDigits = containsRepeatedDigits;

exports.digitsNeverDecrease = digitsNeverDecrease;

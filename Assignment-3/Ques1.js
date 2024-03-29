const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (num2 === 0) return "Not defined";

  return num1 / num2;
};

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;

    case "-":
      return subtract(num1, num2);
      break;

    case "*":
      return multiply(num1, num2);
      break;

    case "/":
      return divide(num1, num2);
      break;

    default:
      return "Operator not defined in calculator";
      break;
  }
}

let calculatedValue;
calculatedValue = calculate(4, 5, "-");

calculatedValue = calculate(4, 5, "*");

calculatedValue = calculate(4, 5, "/");

calculatedValue = calculate(4, 0, "/");

calculatedValue = calculate(4, 5, "+");

calculatedValue = calculate(4, 5, "#");

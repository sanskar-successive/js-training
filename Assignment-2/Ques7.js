// ************** Question 3 ***************

const arg_function = () => {
  return "argument of another function";
};

const outer_function = (arg_function) => {
  return "function as an " + arg_function();
};

const output = outer_function(arg_function);

// console.log((output))





// *************** Question 4 ***************

const getSquare = (num) => {
  return num * num;
};

const squaredValue = getSquare(5);

// console.log(squaredValue);





// ************* Question 5 ***************

const getSum = (num1, num2) => {
  return num1 + num2;
};

const sum = getSum(3,5);

// console.log(sum);





// *************** Question 6 **************

const isEven = (num) => {
  if (num % 2) return false;
  return true;
};

const evenFound = isEven(9);

// console.log(evenFound);

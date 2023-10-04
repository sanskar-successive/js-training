// ************** Question 3 ***************

const arg_function = () => {
  return "argument of another function";
};

const outer_function = (arg_function) => {
  return "function as an " + arg_function();
};

// console.log(outer_function(arg_function));





// *************** Question 4 ***************

const getSquare = (num) => {
  return num * num;
};

// console.log(getSquare(4));





// ************* Question 5 ***************

const getSum = (num1, num2) => {
  return num1 + num2;
};

// console.log(getSum(4,6));





// *************** Question 6 **************

const isEven = (num) => {
  if (num % 2) return false;
  return true;
};

// console.log(isEven(9));

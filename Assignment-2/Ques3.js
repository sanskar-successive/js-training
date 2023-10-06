function arg_function() {
  return "argument of another function";
}

function outer_function(arg_function) {
  return "function as an " + arg_function();

}

const output = outer_function(arg_function);

// console.log((output))

function arg_function() {
  return "argument of another function";
}

function outer_function(arg_function) {
  return "function as an " + arg_function();

}

// console.log(outer_function(arg_function));

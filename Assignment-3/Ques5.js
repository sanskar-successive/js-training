function print_even_then_odd_single_iteration(n) {
  let odd = "";
  let even = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      odd += i;
      odd += " ";
    } else {
      even += i;
      even += " ";
    }
  }

  return odd + even;
}

// console.log(print_even_then_odd_single_iteration(15));

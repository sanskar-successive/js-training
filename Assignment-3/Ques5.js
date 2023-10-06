// 5. Write a program to print all even number first and then all odd numbers using only one iteration



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

const printEvenOdd = print_even_then_odd_single_iteration(15);

// console.log(printEvenOdd);
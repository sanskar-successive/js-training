function printFibonacciSeries(n) {
  if (n === 1) {
    console.log(0);
    return;
  }

  let previous_prev = 0;
  let previous = 1;

  console.log(previous_prev);
  console.log(previous);

  for (let i = 2; i < n; i++) {
    let next = previous + previous_prev;
    console.log(next);
    previous_prev = previous;
    previous = next;
  }
}

printFibonacciSeries(10);

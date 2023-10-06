function printEvenThenOdd(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2) console.log(i);
  }
}

printEvenThenOdd(10);

// 4. Write a program to print all even number first and then all odd numbers



function printEvenThenOdd(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2) console.log(i);
  }
}

printEvenThenOdd(10);

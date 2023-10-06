function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function displayPrimes(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) console.log(i);
  }
}

displayPrimes(50);

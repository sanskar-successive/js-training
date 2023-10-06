// 3. Write a program to display Diamond Pattern


function printDiamondPattern(n) {
  let row;

  for (let i = n; i >= 1; i--) {
    row = "";

    for (let j = 1; j < i; j++) row += " ";
    for (let j = i; j <= 2 * n - 1 - i + 1; j++) {
      if (i % 2) {
        if (j % 2) {
          row += "*";
        } else {
          row += " ";
        }
      } else {
        if (j % 2) {
          row += " ";
        } else {
          row += "*";
        }
      }
    }
    for (let j = 2 * n - 1 - i + 2; j <= 2 * n - 1; j++) row += " ";
    console.log(row);
  }

  for (let i = 2; i <= n; i++) {
    row = "";

    for (let j = 1; j < i; j++) row += " ";
    for (let j = i; j <= 2 * n - 1 - i + 1; j++) {
      if (i % 2) {
        if (j % 2) {
          row += "*";
        } else {
          row += " ";
        }
      } else {
        if (j % 2) {
          row += " ";
        } else {
          row += "*";
        }
      }
    }
    for (let j = 2 * n - 1 - i + 2; j <= 2 * n - 1; j++) row += " ";
    console.log(row);
  }
}

printDiamondPattern(5);

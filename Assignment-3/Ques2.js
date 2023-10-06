function printPattern1(n) {
  let counter = 1;
  let row;
  for (let i = 1; i <= n; i++) {
    row = "";
    for (let j = 1; j <= i; j++) {
      row += counter;
      row += " ";
      counter++;
    }

    console.log(row);
  }
}

function printPattern2(n) {
  let counter = 1;
  let row;
  for (let i = 1; i <= n; i++) {
    row = "";
    for (let j = 1; j <= i; j++) {
      row += counter;
      row += " ";
    }
    counter++;

    console.log(row);
  }
}

function printPattern3(n) {
  let row;
  for (let i = 1; i <= n; i++) {
    row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += j;
      row += " ";
    }
    console.log(row);
  }

  for (let i = 2; i <= n; i++) {
    row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
      row += " ";
    }
    console.log(row);
  }
}

printPattern1(4);
printPattern2(4);
printPattern3(5);

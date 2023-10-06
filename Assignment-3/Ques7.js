// 7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)



function displayTwiceSeries() {
  let start = 2;

  while (start <= 4096) {
    console.log(start);
    start *= 2;
  }
}

displayTwiceSeries();

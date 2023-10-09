const arrayReverse = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
};

const reversedArray = arrayReverse([1, 2, 3, 4, 5]);


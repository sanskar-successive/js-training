// 8. Write a program to remove dupliacte elements from an array



const removeDuplicateElements = (arr) => {
  const uniqueSet = new Set();

  arr.forEach((element) => {
    uniqueSet.add(element);
  });

  const uniqueArray = [];

  uniqueSet.forEach((element) => uniqueArray.push(element));
  return uniqueArray;
};

const uniqueElements = removeDuplicateElements([
  7, 8, 1, 2, 3, 4, 1, 2, 3, 4, 4, 5, 6, 5,
]);

console.log(uniqueElements);

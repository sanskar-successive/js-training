
const removeDuplicateElements = (arr) => {
  
  const unique = [];

  arr.forEach(element => {
    if(unique.includes(element)===false) unique.push(element);
  });

  return unique;
};

const uniqueElements = removeDuplicateElements([
  7, 8, 1, 2, 3, 4, 1, 2, 3, 4, 4, 5, 6, 5,
]);


// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const removeDuplicates = (str) => {
  let uniqueElements = new Set();

  let noDuplicateString = "";

  for (let i = 0; i < str.length; i++) {
    if (uniqueElements.has(str[i])===false) {
      uniqueElements.add(str[i]);
      noDuplicateString += str[i];
    } 
  }

  return noDuplicateString;
};

const noDuplicateString = removeDuplicates("klsadgsdjsadkjl hdqkhedkj");

console.log(noDuplicateString);

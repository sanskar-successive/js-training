
const removeDuplicates = (str) => {
  let uniqueElements = new Set();

  let noDuplicateString = "";

  for (let i = 0; i < str.length; i++) {
    if (!uniqueElements.has(str[i])) {
      uniqueElements.add(str[i]);
      noDuplicateString += str[i];
    } 
  }

  return noDuplicateString;
};


const noDuplicateString = removeDuplicates("klsadgsdjsadkjl hdqkhedkj");




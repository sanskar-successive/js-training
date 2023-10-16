
const countVariables = (str) => {
  const count = new Map();
  

  for (let i = 0; i < str.length; i++) {
    if (count.has(str[i])) {
      count.set(str[i], count.get(str[i]) + 1);
    } else {
      count.set(str[i], 1);
    }
  }

  let compressedString = "";

  count.forEach((value, key) => {
    compressedString += key;
    compressedString += value;
  });

  return compressedString;
};

const compressedString = countVariables("gdshjadkjldgh");





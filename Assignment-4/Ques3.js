// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")



const countVariables = (str) => {
  const count = new Map();

  for (let i = 0; i < str.length; i++) {
    if (count.has(str[i])) {
      const prev = count.get(str[i]);
      count.set(str[i], prev + 1);
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

console.log(compressedString);

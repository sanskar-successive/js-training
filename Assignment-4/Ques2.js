
const reverseString = (str) => {
  const words = str.split(" ");

  let reversedString = "";

  words.forEach((word) => {
    let reverserdWord = word.split("").reverse().join("");

    reversedString += reverserdWord;
    reversedString += " ";
  });

  reversedString.trimEnd();

  return reversedString;
};

const reverse = reverseString("Learning Javascript");




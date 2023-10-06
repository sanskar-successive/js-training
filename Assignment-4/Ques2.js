// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

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

console.log(reverseString("Learning Javascript"));

// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)


const convertToCamelCase = (string) => {
  const str = string.toLowerCase();
  const words = str.split(" ");

  let camelCaseString = "";

  if (words.length > 0) camelCaseString += words[0];

  for (let i = 1; i < words.length; i++) {
    const camelCaseWord = words[i][0].toUpperCase() + words[i].slice(1);

    camelCaseString += camelCaseWord;
  }

  return camelCaseString;
};

const camelCaseString = convertToCamelCase("hello john doe");

console.log(camelCaseString);

const convertToUpperCase = (str) => {
  let upperCaseString = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      upperCaseString += String.fromCharCode(charCode - 32);
    } else {
      upperCaseString += String.fromCharCode(charCode);
    }
  }
  return upperCaseString;
};

const convertToLowerCase = (str) => {
  let lowerCaseString = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      lowerCaseString += String.fromCharCode(charCode + 32);
    } else {
      lowerCaseString += String.fromCharCode(charCode);
    }
  }
  return lowerCaseString;
};
const lowerCaseString = convertToLowerCase("HGDGHDhjdsh");

const upperCaseString = convertToUpperCase("HGDGHDhjdsh");


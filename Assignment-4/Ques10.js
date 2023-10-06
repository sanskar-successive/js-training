const convert2Dto1D = (array2D) => {
  let concatenatedArray = [];

  array2D.forEach((arr) => {
    arr.forEach((element) => {
      concatenatedArray.push(element);
    });
  });

  return concatenatedArray;
};

const array2D = [
  [1, 2, "str"],
  [4, "5767", 6],
  [7, 8, 9],
];

const concatenatedArray = convert2Dto1D(array2D);

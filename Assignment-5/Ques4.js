// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const deepClone = (obj) => {
  const deepCloneObj = { ...obj };
  return deepCloneObj;
};

const obj = {
  firstName: "Sanskar",
  lastNAme: "Mishra",
  employeeId: 12345,
  reviewver: "Ujwala",
  training: {
    trainerName: "Krishna",
    trainingTime: "9:30 to 11:00",
  },
};

const clone = deepClone(obj);


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



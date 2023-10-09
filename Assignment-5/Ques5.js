const flatObject = (obj) => {
  let flattenObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const innerObj = flatObject(obj[key]);

      for (const innerKey in innerObj) {
        flattenObj[key + "." + innerKey] = innerObj[innerKey];
      }
    } else {
      flattenObj[key] = obj[key];
    }
  }
  return flattenObj;
};

const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};

const flattenObj = flatObject(obj);



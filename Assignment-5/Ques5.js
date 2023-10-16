
// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

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




const indexOfDuplicateElements = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      const newValue = map.get(arr[i]) + ", " + i;
      map.set(arr[i], newValue);
    } else {
      map.set(arr[i], i + "");
    }
  }

  map.forEach((value, key) => {
    if (value.includes(",") === false) {
      map.delete(key);
    }
  });

  return map;
};

const duplicateIndices = indexOfDuplicateElements([
  7, 8, 1, 2, 3, 4, 1, 2, 3, 4, 4, 5, 6, 5,
]);





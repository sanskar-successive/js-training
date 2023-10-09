const lastDuplicateIndex = (arr) => {
  const map = new Map();

  arr.forEach((element, index) => {
    if (map.has(element)) {
      map.set(element, index);
    } else {
      map.set(element, -1);
    }
  });

  map.forEach((value, key) => {
    if (value === -1) map.delete(key);
  });

  return [...map.entries()];
};


const lastDuplicateIndices = lastDuplicateIndex([
  7, 8, 1, 2, 3, 4, 1, 2, 3, 4, 4, 5, 6, 5,
]);

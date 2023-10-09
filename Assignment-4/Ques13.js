const inverseArray = (arr) => {

  const inverse = [];

  for(let i=0;i<arr.length;i++) inverse[arr[i]] = i;

  return inverse;
}

const arrayInverse = inverseArray([1,2,3,0]);



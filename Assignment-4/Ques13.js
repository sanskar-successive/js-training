const inverseArray = (arr) => {

  arr.forEach((element, index) => {

    [element, arr[index]] = [arr[index], element];
  })

  return arr;
}

const arrayInverse = inverseArray([1,2,0,4,5]);
console.log(arrayInverse);

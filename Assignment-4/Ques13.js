
const inverseArray = (arr) => {
  return arr.map((item,index)=>arr.indexOf(index))
}

const arrayInverse = inverseArray([1,2,3,0]);



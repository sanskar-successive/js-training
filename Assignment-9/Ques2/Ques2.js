const lodash =  require("lodash")

let name = "sanskar";
const firstCapital = lodash.capitalize(name);
console.log(firstCapital);

let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];

const intersection = lodash.intersection(arr1, arr2);
console.log(intersection);
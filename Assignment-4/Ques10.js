const flatArray = (arr) => {
  let flattenArray = [];

  
  for(const element of arr){

    if(typeof(element) === 'object'){
      const innerArr = flatArray(element);

      for(const innerElement of innerArr){
        flattenArray.push(innerElement)
      }
    }
    else{
      flattenArray.push(element);
    }
  }

  return flattenArray;
};

const arr = [
  [1, 2, "str"],
  [4, "5767", 6],
  [7, 8, [9,10, [11,"hhgd"]]],
];

const flattenArray = flatArray(arr);





const intersectionArray = (arr1,arr2) => {


    arr1.sort((i,j) => {
        if(i >= j) return 1;
        return -1;
    })
    arr2.sort((i, j) => {
        if(i >= j) return 1;
        return -1;
    })


    let intersection = [];


    let i = 0, j= 0;

    while(i < arr1.length && j < arr2.length){

        if(arr1[i] < arr2[j]){
            i++;
        }
        else if(arr1[i] > arr2[j]){
            j++;
        }
        else{
            intersection.push(arr1[i]);
            i++;
            j++;
        }
    }

    return intersection;
}

const arr1 = [6,7,8,8,1,1,1,2,2,3,4];
const arr2 = [9,9,8,7,1,1,2,4,5,6];

const intersectionElements = intersectionArray(arr1,arr2);




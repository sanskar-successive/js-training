const obj = {
    firstName : "Sanskar",
    lastName : "Mishra",
    employeeId : 12345,
    reviewerName : "Ujwala"
}

const objElements = Object.entries(obj).map(element => {
    return `key: ${element[0]} ==>  value : ${element[1]}`;
});

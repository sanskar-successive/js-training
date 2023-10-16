

async function fetchFirstAPIData(){

    const apiUrl = `https://jsonplaceholder.typicode.com/users/1`;
    const response = await fetch(apiUrl);

    const data = await response.json();
    return data;
}

async function fetchSecondAPIData(){
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;
    const response = await fetch(apiUrl);

    const data = response.json();
    return data;
}

async function fetchDataFromMultipleAPIs(){

    try{
        const [userData1, userData2] = await Promise.all([fetchFirstAPIData(), fetchSecondAPIData()]);

        const combineData = {...userData1, ...userData2};

        return combineData;
    }

    catch(error){
        throw error
    }
}


(async () => {
    try{
        const combineData = await fetchDataFromMultipleAPIs();
        console.log(combineData);
    }
    catch(error){
        console.error(error)
    }
})()



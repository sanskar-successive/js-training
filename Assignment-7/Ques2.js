// 2. Give an example of using multiple callback functions in a single function in JavaScript

function handleMultipleCallbacksExample(data, successCallback, errorCallback){
    if(data){
        successCallback(data);
    }
    else{
        errorCallback('No data available');
    }
}

function onError(error){
    console.error('Error: ', error)
}

function onSuccess(data){
    console.log('Success: ', data)
}

handleMultipleCallbacksExample('some data from API', onSuccess, onError);
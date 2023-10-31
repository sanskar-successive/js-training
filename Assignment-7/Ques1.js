// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function fetchDataUsingCallbackBasedAPI(userId, callback){
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const promise = fetch(apiUrl);
  promise
  .then((response)=>{
    return response.json();
  })
  .then((userData) => callback(userData, null))
  .catch((error)=> callback(null, error))
}

function handleUserData(userData, error){
  if(error){
    console.error(error);
  }
  else{
    console.log('User data', userData)
  }
}

fetchDataUsingCallbackBasedAPI(1, handleUserData);

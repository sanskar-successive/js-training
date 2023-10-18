// 3. Convert a callback-based API to a Promise-based API 

function fetchDataUsingPromiseBasedAPI(userId){
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const promise = fetch(apiUrl);
  return promise.then((response)=>{
    return response.json();
  })
}

fetchDataUsingPromiseBasedAPI(1)
.then((userData) => {
  console.log(`User ID : ${userData.id}, Username : ${userData.name}`)
})
.catch((error)=>{
  console.error(error)
})

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

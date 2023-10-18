// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

const resolvePromiseAfterDelay = (delay) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`promise reolved after ${delay} delay`)
        }, delay)
    })
}

const delayFunction = async (delay) => {
    console.log(`this function will return a promise after ${delay} ms delay`)
    const response = await resolvePromiseAfterDelay(delay);
    return response;
}

const returnedPromise = delayFunction(5000);
returnedPromise.then(data => console.log(data))

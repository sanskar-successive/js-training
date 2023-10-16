class RateLimiter{

    constructor(limit){
        this.limit = limit;
        this.pendingRequestsQueue = [];
        this.activeRequests = 0;
    }

    async executeNextRequest(){
        if(this.pendingRequestsQueue.length>0 && this.activeRequests < this.limit){
            const {url, resolve, reject} = this.pendingRequestsQueue.shift();
            this.activeRequests++;

            try{
                const response = await fetch(url);
                const data = await response.json();
                resolve(data);
            }
            catch(error){
                reject(error);
            }
            finally{
                this.activeRequests--;
                this.executeNextRequest();
            }
        }
    }

    addToPendingRequestsQueue(url){

        return new Promise((resolve, reject) => {

            this.pendingRequestsQueue.push({url ,resolve, reject});
            this.executeNextRequest();

        })
    }

}

const rateLimiter = new RateLimiter(3);

async function fetchUserData(userId){
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return rateLimiter.addToPendingRequestsQueue(apiUrl);
}

(async () =>{

    for(let i=1;i<=10;i++){
        fetchUserData(i)
        .then((userData)=>{
            console.log(userData);
        })
        .catch((error)=>{
            console.error(error);
        })
    }
})();





// Sanskar - Closures and Lexical Scoping:
// Understanding how closures work, lexical scoping, and how they can be used to encapsulate data and create private variables.

// Nikhil - Asynchronous Programming:
// Mastery of asynchronous JavaScript, including callbacks, Promises, and async/await. 
// complex asynchronous flows and error management.

// Nikhil - Advanced Object-Oriented Programming (OOP):
// Implementing advanced OOP patterns like mixins, prototypal inheritance, and class composition. 
// Understanding class constructors, static methods, and Symbols.

// Pranjhi - Event Loop and Concurrency Model
// In-depth knowledge of the event loop, how it works, and its impact on concurrency. 
// Understanding the call stack, callback queue, and microtasks.

// Ayush - 
// Functional Programming:
// 1.Advanced functional programming concepts, such as currying, composition, monads, and point-free programming.
// 2.Memory Management and Garbage Collection:
// How JavaScript handles memory and the role of the garbage collector. Strategies for optimizing memory usage.

// Rounak - Design Patterns in javascript
// Exploring and implementing design patterns like Singleton, Factory, Observer, and Proxy in JavaScript.







// What is Async Await?
//      Aync = makes a function return a promise
//      Await = makes a function wait for a promise

//      These allow you to write code in an asyncronsous manner
//      Async doesn't have to resolve or reject parameters
//      Everything after Await is placed in an Event Queue


// ================================================
function cutOnions() {
    return new Promise((resolve, reject) => {
                onionsCut = 1
                if(onionsCut) {
                    resolve("The onions have been cut!")
                } else {
                    reject("The onions have not been cut")
                } 
    })
}

cutOnions()
    .then(results => console.log(results))
    .catch(e => console.log(e))
// ================================================


//1. A function has to be written
//2. The return of that function has to be a new promise
    //a. Promise is a constructor so it needs the new keyword
    //b. Promise needs to be passed in an arrow function where resolve and reject are the parameters
//3. A condition is set as a variable
//4. And if statement checks the variable to see its truthy or falsyness
    //a. if the condtion is truthy it returns the resolve
    //b if it is !truthy then it rejects
//5. the function is called
    //a. the then key word is called and passed in the results and told to return the console.log of the results
    //b. the catch block catches and errors that are returned by the function call.
    

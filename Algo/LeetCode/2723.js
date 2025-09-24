/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {


    promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
    promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
   
    const promise1resolve = await promise1
    const promise2resolve = await promise2

    return promise1resolve + promise2resolve
};

addTwoPromises()

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
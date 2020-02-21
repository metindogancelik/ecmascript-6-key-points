/*
* Promises are useful processes rather than chained callback functions.
* A promise can call one of two functions, resolve() or reject().
* resolve() => In case of successful statements.
* reject() => In case of any error.
*/

// Set timeout function represents an API.
const examplePromise = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("You can vote for this polling.");
            }, 2000);
        } else {
            setTimeout(() => {
                reject("You can't vote for this polling!");
            }, 2000);
        }
    });
};

// An example for age dependent state.
examplePromise(18)
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.log(errorMessage);
    });
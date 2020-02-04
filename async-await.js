/*
* async - await is a more practical use than promises.
* In scope of async - await, instructions run line by line. (like synchronous)
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
                resolve("You can't vote for this polling!");
            }, 2000);
        }
    });
};

const example = async () => {
    try {
        const successMessage = await examplePromise(18);
        console.log(successMessage);
    } catch (error) {
        console.log(error);
    }
};

// Alternative using (same as before)
async function alternative() {
    try {
        const successMessage = await examplePromise(18);
        console.log(successMessage);
    } catch (error) {
        console.log(error);
    }
}

example();
alternative();
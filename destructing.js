/*
* Ecmascript 6 supports destructuring.
*/

const ex1 = {
    key1: "val1",
    key2: "val2",
    key3: "val3",
    key4: "val4",
    key5: "val5"
};

// Destructuring of ex1 structure.
const {key1, key2} = ex1;
console.log("key1: ", key1, "-", "key2: ", key2);

const ex2 = ["arrVal1", "arrVal2", "arrVal3"];

// Destructuring of ex2 structure (array).
const [firstVar] = ex2;
console.log(firstVar);
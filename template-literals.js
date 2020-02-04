/*
* Template literals provide mentioning an another variable in a string without needing concat operator.
*/

let variableWillBeMentioned = 5;
let ourStr = `Variable in a string without needing concat operator (+) => ${variableWillBeMentioned}`;

console.log(ourStr);
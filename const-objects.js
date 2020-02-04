/*
* While value of a const primitive variable cannot be changed, value of a const object can be change.
* It should be noted that no other object can be assigned to a const object's reference.
*/

const person = {name: "Metin Doğan", surname: "Çelik"};
person.surname = "Const object values can be changed.";

console.log(person);

// This assignment generates an error.
/*
person = {name: "This is an another object.", surname: "This is an another object."};
console.log(person);
*/
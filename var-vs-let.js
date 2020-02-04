for (var a = 0; a < 5; a++) ;

// prints 5 because var identifier's scope is global.
console.log(a);

for (let b = 0; b < 5; b++) ;

// prints "b is not defined" because let identifier's scope is local.
//console.log(b);

// var variables can be declared again but let variables can not be declared!
var c = 10;
var c = 10;

console.log("c: ", c);
// Create symbol id with description
const id = Symbol("someDescription");

//get description
console.log(id.description) //someDescription

console.log(id) //Symbol(someDescription) - type symbol
console.log(id.toString()) //Symbol(someDescription) - type string

//Global symbol 

const idAgain = Symbol.for("id"); // get symbol from global
const getDescription = Symbol.keyFor(idAgain); // get symbol description from global symbol - "id"
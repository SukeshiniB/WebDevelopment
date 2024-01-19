const str = prompt ("Enter constant statement")
const word = prompt("Enter constant word")
let op1 = str.indexOf(word)
let length = word.length - 1
let op2 = str.lastIndexOf(word)


console.log (op1) 
console.log (op2) 
console.log (length)

console.log (`The position of first anf last letter for the first and last occurrance of the word \"${word}\" is ${op1}, ${op1 +length} and the position of the letters for its last occurance is ${op2}, ${op2+length}.`)
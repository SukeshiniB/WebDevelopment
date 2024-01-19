
let string = prompt("enter a word")
let splitstring = string.split("")
let reversestring = splitstring.reverse("")
let joinstring = (reversestring.join(""))
let final = (joinstring.charAt(0).toUpperCase() + joinstring.substr(1,6))
console.log (final)

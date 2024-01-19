// Write a JavaScript program to list the properties of a JavaScript object and return the string in which 
// all property names are separated by comma.
// Sample Object Data:
// PropertyName  —  Value
// name  — Vishal
// class — X
// seatNo — 987
// Sample Output:
// “name,class,seatNo”

let property = {
    name : "Vishal",
    class : "X",
    seatNo : 987,
}
const keys = Object.keys(property)
console.log (keys)
let s1 = prompt("Enter Product Name")
let s2 = parseInt(prompt("Enter number of items"))
let s3 = parseFloat (prompt("Enter price of the book"))
let s4 = parseFloat(prompt("Discount value"))

let s5 = s2*s3
let s6 = s5 - (s5 * s4/100)

console.log (`You have successfully purchased ${s2} products tittle \"${s1}\".\nAmount before the discount is Rs. ${s5}. \nAmount after the ${s4}% discount is Rs. ${s6}.`)


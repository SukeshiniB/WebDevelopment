//Print the square of all the numbers present in the given array using the map method. 
// The array is [2, 3, 5, 4, 8, 6, 9]

let arr=[2, 3, 5, 4, 8, 6, 9]
let square = arr.map(sq => Math.pow(sq, 2))
console.log(square)


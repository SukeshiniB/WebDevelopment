// Write a program that generates a random number of 10 integer numbers and sorts them in descending order. 
// Use any methods or algorithms you want.

let array = []
let newarray = []
let N = 10
for (i=0;i<N;i++)
{
    let number = Math.floor(Math.random()* (100 - (-100)+1) + (-100))
   
    array.push(number)
    console.log(array)
}
console.log(array)
array = array.sort();
console.log(array.reverse());


// let array = []

// let N = 10
// for (i=0;i<N;i++)
// {
//      let number = Math.floor(Math.random()* (100 - (-100)+1) + (-100))
//      array.push(number)
// }
// let copy = Array.from(array)
// console.log(copy)

// array.sort(function(a,b){return b-a})
// console.log(array)



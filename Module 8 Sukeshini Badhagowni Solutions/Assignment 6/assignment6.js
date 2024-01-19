// You should be familiar with powers in mathematics and how you can calculate it in JS. 
// If we want to calculate a ^ b, we should just write a**b. 
// So your task is to create a function which takes two arguments x and y and returns the value x ^ y
//  without using ** operator. 

function power(a,b)
{
    return Math.pow(a,b)
}
let output = power(2,3)
console.log(output)
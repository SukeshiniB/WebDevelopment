// Create a function that receives 2 numbers as arguments and finds out if the first number 
// is divisible by the second number or not.Function should return whether the 1st number is divisible by the 2nd number.
// Sample Input 1: 
// 15, 3
// Sample Output 1: 
// Completely divisible!
// Sample Input 2: 
// 12, 5
// Sample Output 2: 
// Not divisible!

function divisible(num1,num2)
{
    if(num1%num2 === 0)
    {return ("Completely divisible!")}
    else
    {return ("Not divisible!")}
}
let output = divisible(12,6)
console.log(output)
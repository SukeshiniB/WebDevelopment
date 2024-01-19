// Implement a function which takes 2 numbers as input and returns the minimum of the two values given. 
// Don’t use in-built JavaScript Math functions. 
// After you finish, do a little research and find how you can do the same using the built-in function. 
// Sample Input: 
// 4, 9
// Sample output: 
// 4

function minnum(a,b)
{
    if(a>b)
    {
        return (`the min value is ${b}`)
    }
    else{
        return(`The min value is ${a}`)
    }
}
let lesservalue = minnum(7,3)
console.log(lesservalue)

// function minnum(a,b)
// {
//     return Math.min(a,b)
// }
// let lesservalue = minnum(7,3)
// console.log(lesservalue)

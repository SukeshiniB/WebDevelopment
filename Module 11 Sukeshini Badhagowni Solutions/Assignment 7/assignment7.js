// Write a JavaScript function flip to take array of numbers containing only 0s and 1s. 
// For given array print another array with opposite values 1 for 0 and 0 for 1 from input array. 
// Please note that you can’t use any conditional statements like if or ternary or negation.

// Sample Use:
// 0, 1, 1, 1, 0, 0, 1 
// // returns  1,0,0,0,1,1,0 

let arr = [0, 1, 1, 1, 0, 0, 1, ]
function flip(arr) {
    var flippedArr = arr.map(function(num) {
    return 1 - num;
    });
    return flippedArr;
    }
console.log(flip(arr))

// let arr1 = Array.from(arr)
// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i] === 0)
//     {
//         arr[i] = 1
//         // arr2.push(arr[i])
//     }
//     else if (arr[i] === 1)
//     {
//         arr[i] = 0
//         // arr2.push(arr[i])
//     }
    
// }
// console.log(arr1)
// console.log(arr)
 
// 0 1 1 1 0 0 1


// You have numbers from 1 to n in an array in ascending order. 
// One of the numbers in the sequence is missing. 
// Write a function that receives an array, finds the missing number and 
// its position in the list and returns the missing number and it’s position.
// Sample Input: [1,2,3,4,6,7,8,9,10]
// Sample output: [5, 5]

// function sequence(arr)
// {
//     let count = 10;
//     let missing = []
//     for (let i = 1; i <= count; i++) {
//     if (arr.indexOf(i) == -1) {

//     missing.push(i);
//     }
//     }
//     console.log(missing); 
// }
// sequence([1,2,3,4,6,7,8,9,10])

// let arr = [1,2,3,4,6,7,8,9,10]
// let count = 10;
// let missing = []
// for (let i = 1; i <= count; i++) {
//     if (arr.indexOf(i) == -1) {
        
//       missing.push(i );
//     }
//   }
//   console.log(missing); 

function sequence(arr)
{
    let count = 10;
    let missing = []
    for (let i = 1; i <= count; i++) {
    if (arr.indexOf(i) == -1) {

    // missing.push(i);
    console.log(i)
    var res = [i, i]
    return res
    }
    }
    
    // console.log(missing); 
}
console.log(sequence([1,2,3,4,6,7,8,9,10]))

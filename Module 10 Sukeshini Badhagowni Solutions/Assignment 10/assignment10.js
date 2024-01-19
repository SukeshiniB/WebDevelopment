// Create a function that takes two parameters, one is an array of numbers and the other is another function 
// that prints whether the array number is even or odd.

// The array is [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55].

let num = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55]

const example = (message) => {
    console.log(message)
}
const checkNum = (arr, example) => 
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2 == 0)
        {
            example(`${arr[i] } is an Even Number`)
        }
        else
        {
           example(`${arr[i] } is an Odd Number`)
        }
    }

}
checkNum(num, example)

// function printFunction (message) {
//     console.log(message)
// }

// function checkNumbers(arr, checkNumFunc) {
//     for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//     checkNumFunc(arr[i] + " is even");
//     } else {
//     checkNumFunc(arr[i] + " is odd");
//     }
//     }
//     }
    
//     var numbers = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];
//     checkNumbers(numbers, printFunction); // Output: "2 is even", "4 is even", "6 is even", "5 is odd", "8 is even", "7 is odd", "1 is odd", "9 is odd", "39 is odd", "22 is even", "13 is odd", "40 is even", "55 is odd"
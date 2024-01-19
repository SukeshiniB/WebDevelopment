// Write a function which searches for the maximum subset of the given number in an array and returns the length of the subset.
// Sample input: [1,2,2,2,5,3,4,4,4,4,8,4,4], 4
// Sample output: 4.
// This is because the number 4 occurs in the list 4 times in a row and 2 times in a row. Since 4 > 2, you output 4.
// When you’re done with the task, simply type the word “done” into the field below.
// Hint (1 of 3): You need to keep track of the length of the maximum occurrence of the given number in the list. Try iterating over the array.
// Hint (2 of 3): You need to return the maximum length of the subset.
// Hint (3 of 3): Solution:
function searchSubset(arr, num) {
 if (!arr.length) return false;
 let count = 0;
 let result = 0;
 for (let i = 0; i< arr.length; i++) {
   if (arr[i] !== num) {
     count = 0;
   } else {
     count++;
     result = Math.max(result, count); // Maximum of result and count
   }
 }
 console.log(result);
}

searchSubset ([1,1,1,2,2,2,2,3,4,4,5,5,4,4,4,4,4,5,5], 4 )
// Write a JavaScript findSecondLargestNumber function to find second largest number in a given array. 
// Function needs to take array of numbers as input parameter.

function findTheLargestNumber(numArray) {
    let largest = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > largest) {
    largest = numArray[i];
    }
    }
    return largest;
    }
    
    console.log(findTheLargestNumber([2, 3, 5, 9, 11, 23]));
    console.log(findTheLargestNumber([2, 23, 6, 9, 44]))
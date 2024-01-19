// You have the following transaction amounts stored in an 
// array : [1500, 1200, 786, 450, 2000, 2300, 546, 780, 800, 900, 2000]
// Sort the array using Bubble Sort. Print the sorted array
let bubbleSortArray = [1500, 1200, 786, 450, 2000, 2300, 546, 780, 800, 900, 2000]
function bubbleSort(bubbleSortArray){
    let len = bubbleSortArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (bubbleSortArray[j] > bubbleSortArray[j + 1]) {
                let tmp = bubbleSortArray[j];
                bubbleSortArray[j] = bubbleSortArray[j + 1];
                bubbleSortArray[j + 1] = tmp;
            }
        }
    }
    return bubbleSortArray;
};



console.log(bubbleSort(bubbleSortArray))
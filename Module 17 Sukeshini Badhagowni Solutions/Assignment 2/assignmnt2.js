// Sort student submissions using Insertion Sort
// You have the following submission ID : [67, 60, 58, 75, 53, 71, 63, 52, 53, 59, 57, 59, 63, 76, 53]
// Sort the array using Insertion Sort
// Print the sorted array

let insertArray = [67, 60, 58, 75, 53, 71, 63, 52, 53, 59, 57, 59, 63, 76, 53]
function insertionSort(insertArray) {
    for (let i = 1; i < insertArray.length; i++) {
      let currentValue = insertArray[i]
      let j
      for (j = i - 1; j >= 0 && insertArray[j] > currentValue; j--) {
        insertArray[j + 1] = insertArray[j]
      }
      insertArray[j + 1] = currentValue
    }
    return insertArray
}
console.log(insertionSort(insertArray))
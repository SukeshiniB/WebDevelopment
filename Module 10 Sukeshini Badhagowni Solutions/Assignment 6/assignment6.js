// Create a function updateArray which takes two parameters one is an array and the other is a function, 
// which prints the modified array. Modify the array in the updateArray. Print both old and new updated array.
// The array is [1, 2, 3, 4, 5].

let arr = [1, 2, 3, 4, 5]
let arr2 = Array.from(arr)
const updateArray = (x, y) => {  
   return [x,y]

    
}
const modArr = () => { 
      arr2.push(6)
      return arr2
}

console.log(updateArray(arr, modArr()))
    




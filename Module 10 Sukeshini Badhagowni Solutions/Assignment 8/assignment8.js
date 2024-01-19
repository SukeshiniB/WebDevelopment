// Create a function that duplicates the given array and returns a single array. The array is [1, 2, 3, 4, 5].

let arr = [1, 2, 3, 4, 5]
const dup = () => {
    let duplicate = Array.from(arr)
    return duplicate
}
console.log(dup())
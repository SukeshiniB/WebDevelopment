// // Implement a function which takes an array as input. 
// // Then finds out and returns the largest three elements in an array. Don’t sort the array.
// // Sample Input: 
// // [3, 44, 1, 2, 10, 6, 77]
// // Sample output: 
// // 77,44,10
function maxarray(arr)
{
let maxvalue = 0
for(i=0; i<arr.length; i++)
{
    for(j=i+1; j< arr.length; j++)
    {
        if(arr[i] < arr[j])  
        {
            maxvalue = arr[i]   
            arr[i] = arr[j] 
            arr[j] = maxvalue 
        }        
}
}
console.log (arr) 
return arr.slice(0,3)
} 
console.log (maxarray([3, 44, 1, 2, 10, 6, 77]))

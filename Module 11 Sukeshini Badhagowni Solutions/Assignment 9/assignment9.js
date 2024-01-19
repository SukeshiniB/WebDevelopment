// Write a JavaScript function find2NumberSum to find 2 numbers from a given array, such as sum of 2 numbers 
// is equal to a given target. Function takes 2 input params, target and an array of numbers. 
// Try to achieve time complexity of O(n).  

 

// Sample Use:

// [7, -5, 2, 0, 1, 14, 4], -5 

// // returns  [-5, 0]

let arr = [7, -5, 2, 0, 1, 14, 4]
let find2NumberSum= (target,arr) => 
{
    let res = {}
        for(let i=0; i<arr.length; i++)
        {
            let y = target - arr[i]  //-5-7 = -12
            if(y in arr){
                return [y, arr[i]]
            }
            else{
                res [arr[i]] = true
            }
        }
        return []    
}
console.log(find2NumberSum (-5,arr))
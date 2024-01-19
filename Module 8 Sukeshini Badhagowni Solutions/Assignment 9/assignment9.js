// Write a function to find the number which has a duplicate in the array,
// and return the duplicate’s position in the array and it’s index as well. 
// If there are multiple duplicates, return the first duplicate you find. 
// The final output should be in the form of a string like below -:
// “The duplicate number is <number>, and it’s position in the list is <position> with index of <index>.”
// You need to find the duplicate number, the position where the duplicate was found and the index number 
// of the found duplicate value.

// function tofindduplicate(arr)
// {
//   let found = false
//   for(i=0;i<arr.length;i++) 
//   {
//     for(j=i+1;j<arr.length;j++) 
//     {
//         if(arr[i] === arr[j])
//         {
//             found = true
//             console.log(j)
//             break;
//         }
//     } 
//     if(found === true)
//     break;
//   }
// }
// tofindduplicate([1,2,3,4,2,5,2,6])

function tofindduplicate(arr)
{
  let dup = []
  for(i=0;i<arr.length;i++) 
  {
    
        if(dup.includes(arr[i]))
        {
          return `duplicate number is ${arr[i]}, index is ${i} and position is ${i+1}`
        }
        dup.push(arr[i])
    } 
  
  }

console.log(tofindduplicate([1,2,3,4,2,5,2,6]))
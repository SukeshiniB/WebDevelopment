// Sort songs based on songID from two albums using Merge Sort

// You have the following arrays :
// [259, 260, 264, 265, 273, 276, 279, 300]
// [214, 262, 266, 275, 290, 306]
// Sort the array using Merge Sort
// Print the sorted array

function merge_sort(left_part,right_part) 
{
 var i = 0;
 var j = 0;
 var results = [];


 while (i < left_part.length || j < right_part.length) {
  if (i === left_part.length) {
   // j is the only index left_part
   results.push(right_part[j]);
   j++;
  } 
      else if (j === right_part.length || left_part[i] <= right_part[j]) {
   results.push(left_part[i]);
   i++;
  } else {
   results.push(right_part[j]);
   j++;
  }
 }
 return results;
}


console.log(merge_sort([259, 260, 264, 265, 273, 276, 279, 300], [214, 262, 266, 275, 290, 306]));

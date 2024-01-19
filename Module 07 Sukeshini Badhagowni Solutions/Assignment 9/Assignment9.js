// The number N (N > 1) has been entered out of the keyboard. Write a program that:
// Creates and prints a set of  N random integer numbers in range [-100, 100].
// Prints out the numbers that are greater than their right “neighbors”.

let array = []
let newarray = []
let N = parseInt(prompt("Enter a number"))
for (i=0;i<N;i++)
{
    number = Math.floor(Math.random()* (100 - (-100)+1) + (-100))
    array.push(number)
}
console.log (array)
for(i=0; i<array.length;i++) 
{
   if(array[i] > array[i+1])
   {
    console.log(i)
    newarray.push(array[i])
   }
}
console.log(newarray)
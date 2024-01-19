// You know a guy who is a palindromic fan. 
// Help him check whether a string is a palindrome or not. 
// A palindromic string is a string which is the same when spelled backwards. 
// For example, “anna” spelled backwards is “anna”. 
// Write a function which receives a string and checks if the string is a palindrome. 
// Sample Input 1: Coding
// Sample Output 1: “Not palindrome”
// Sample Input 2: Anna
// Sample Output 2: “A palindrome”

function pali(string)
{
const arrstring = string.split('')
const reversearray = arrstring.reverse()
const reversestring = reversearray.join('')
if(string === reversestring)
{
   return ("A palindrome")
}
else
{
    return ("Not Palindrome")
}
}
let output = pali("DESSERTS I DESIRE NOT SO LONG NO LOST ONE RISE DISTRESSED")
console.log(output)


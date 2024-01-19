// Create a function that takes the radius of the sphere as an input and returns the volume of the sphere. 
// Find the formula to calculate the volume of a sphere on the internet. You can take the value of pi to be 3.14.
// Sample Input: 3
// Sample output: 113.1

// V = (4/3)πr3 

function radius(r)
{
    return ((4/3)*3.14*r**3)
}
let volume = radius(3)
console.log(volume)
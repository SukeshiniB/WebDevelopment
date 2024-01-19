// Calculates the arithmetic mean of each included set.
// Prints the set with the largest arithmetic mean.


const numbers = [

    [171, 166, 703, 197, 139], 
 
    [360, 314, 437, 367],
 
    [310, 280, 970],
 
    [0, 14, 1400, 424],  
 
    [109, 311, 9, 13, 314, 210, 30]
 
 ]
 let newarray = []
 let mean = 0
 let max=0
 let maxid = -1
for(let number of numbers)
{
   
    for(let num of number)
    {
        mean+=num 
        
    }
    mean = mean/number.length
   
    if(mean>max){
        max=mean
        maxid =numbers.indexOf(number) 

}
}
console.log (numbers[maxid])

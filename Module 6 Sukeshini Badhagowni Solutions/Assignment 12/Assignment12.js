
let num = parseInt(prompt("Enter a number"))
let a = 0, b = 1, res;
for (i=1; i<=num; i++)
{   
    res = a + b;  
    if(res === num)
    {
    console.log (`${b}, ${ res + b}`)
    break;
    } 
    a = b; 
    b = res; 
}
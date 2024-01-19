let number = parseInt(prompt("Enter a positive number"))
if (number > 1)
{
    for(i=2; i<number; i++ )
    if (number%i == 0){
        console.log ("This number is not a prime number")
        break;
        } else
            {
                console.log ("This is a prime number")
            }
}
else 
    {
        console.log ("This number is not a prime number") 
    }


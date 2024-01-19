let str = prompt("Enter your password")
const symbols = ["=", "?", "*", "^", "$", "№", "@"]
for(let i=0; i<str.length; i++){
    if (str[i] === '=' || str[i] === '?' || str[i] ==='*' || str[i] === '^' || str[i] === '$' || str[i] === '№' || str[i] ==='@')
    {   console.log (`This symbol ${str[i]} is forbidden`)
        break;
    }
} console.log ("Correct!")
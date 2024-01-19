let Deposit = parseInt(prompt("Please enter your deposit amount"))
let Years = parseInt(prompt("Please enter the number of years"))
const interest = (0.09)
for (i = 0; i < Years; i++) {
    let interestValue = Deposit * interest
    Deposit += interestValue
} 
console.log(`Your balance is ${Deposit} after ${Years} years`)





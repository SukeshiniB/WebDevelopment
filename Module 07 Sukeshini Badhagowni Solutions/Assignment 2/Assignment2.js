// Write a script for a digital cart which works with the list of prices given from the keyboard. 
// The script must calculate a total sum of all costs and evaluate whether it is equal or greater than 20000 or not. 
// If so, set a 30% discount to the total sum and print the total sum to pay, rounded to the nearest hundreds. Otherwise, just print the calculated sum.
// Note. You may use “0” to stop entering countries.

let cart = []
let values = ""
let sum = 0
while(values !== 0)
{
    values = parseInt(prompt("Enter the product value"))
    cart.push(values)
}
cart.pop(0)
console.log(cart)

for(let n of cart)
{
    sum = sum+=n
}

if (sum >= 20000)
    {
        discountprice = sum-(sum*0.3)
        console.log (`The total sum to pay after 30% discount is ${discountprice.toFixed(2)}`)
    }
    else
    {
        console.log(`The total sum to pay is ${sum.toFixed(2)}`)
    }

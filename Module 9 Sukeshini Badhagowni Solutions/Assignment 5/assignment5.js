// Suppose you went into a grocery e-commerce and you have added the following products with their 
// respective quantities and price. You need to calculate the total cart value by iterate over respective 
// product quantity and its respective price.
// And create a function for iteration and calculating the cart total value and call the same function to 
// get the output.

let cartItems = 
{
    shampoo: 
    {
        quantity: 5,
        price: 278 
    },
    butter: 
    {
        quantity: 4,
        price: 80
    },
    oil: 
    {
        quantity: 2,
        price: 142
    }
 }

function totalCalculation(items)
{
    let sum = 0;
    for(const item in items)
    {
        sum += items[item].quantity * items[item].price
    }
    return sum;
}
console.log(`Total cart value is ${totalCalculation(cartItems)}`)
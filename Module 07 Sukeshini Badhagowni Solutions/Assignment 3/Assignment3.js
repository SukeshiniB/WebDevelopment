// write a script for an e-books online-store.
// Write a program that requests a list of books as string (books’ titles are divided by commas). 
// Then form an array of books and find out whether there are specific books “The Little Prince” and “Pinocchio”. 
// If so, add at the beginning of the array a promo-gift - a set of stickers. 
// Finally, print out all the items. 

let cart = prompt("Enter the book names")
cart = cart.split(",")
if(cart.includes('The Little Prince')  || cart.includes('Pinocchio')  )
    {
        cart.unshift("A special gift — set of stickers")
        console.log(cart)     
    }
    
    console.log(cart)
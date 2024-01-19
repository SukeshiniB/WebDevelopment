// Write a program to create dynamic products list based on user input
// Subtask 1: Prompt the user for no. of Products
// Subtask 2: Based on input in subtask 1, iterate the loop till that number and in each 
//             iteration ask user name and quantity of the product and add the object along with its name and 
//             quantity properties  in the array.
// Subtask 3: Iterate through the array of products using for each loop and print
//             <productName> : <productQuantity></productQuantity>


let numOfProducts = prompt("Enter the number of products")
for (i =0; i<numOfProducts; i++)
{
    let productName = prompt("Please enter the product name")
    let productQuan = prompt("Please enter the product quantity")
    
    createProductObject(productName, productQuan)
}
function createProductObject(productName, productQuan)
{
    let product = 
        { 
            Pname : productName,
            Pquan : productQuan,
            getDetail : function() {
                return `${this.Pname} : ${this.Pquan}`
            }
        }
        console.log(product.getDetail())
}


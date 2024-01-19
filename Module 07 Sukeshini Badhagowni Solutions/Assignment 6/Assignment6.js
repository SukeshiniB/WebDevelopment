// You are asked to create a script for a popular darkstore. 
// The problem is when customers add various goods into their digital carts in a random order.  
// Eventually, these lists aren’t convenient for darkstore’s sellers who gather these goods all over the storage. 
// Write a JavaScript program that analyses a given list of goods (each good is written along with its category) and prints a convenient list ordered by categories.

const goods = [ ["Apples", "fruit"],["Milk 3.2%", "dairy products"],["Potato", "vegetables"],
                ["Brinjal", "vegetables"],["Mango", "fruit"],["Cheese", "dairy products"] ] 
let good = Array.from(goods)
let fruits = []
let dairyProducts = []
let vegetable = []
let catagory =[]

for(let each of good){
    if(!catagory.includes(each[1])){
        catagory.push(each[1])
    }
}
    for(let eachs of catagory){
        console.log(eachs.toUpperCase())
        for(let each of good){
            if(each[1]===eachs){
                console.log(each[0])
            }

        }
    }

// for (let i=0; i<good.length; i++)
// {
//     if(good[i][1] === "fruit")
//     {
//         fruits.push(good[i][0])
//     }
//     else if(good[i][1] === "dairy products")
//     {
//         dairyProducts.push(good[i][0])
//     }
//     else(good[i][1] === "vegetables")
//     {
//         vegetable.push(good[i][0])
//     }
    
// }

// console.log(fruits)
// console.log(dairyProducts)
// console.log(vegetable)





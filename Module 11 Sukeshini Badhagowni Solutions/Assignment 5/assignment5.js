// Write a function totalPrice in JavaScript to construct an object with list of orders for given array of items 
// and cost. Find the order with highest cost. Function takes 2 inputs 1st array of items, 2nd array of values. 
// Constructed object should have orders array with key:value pair.

let items =  ["item1", "item2", "item3"]
let costs = [200, 400, 260]
function totalPrice(items, costs) {
let orders = {};

for(let i = 0; i < items.length; i++) {
orders[items[i]] = costs[i];
}
console.log(orders) //{item1: 200, item2: 400, item3: 260}

let highestOrder = {
    item: "",
    cost: 0
    }
    
    for(let items in orders) {
    if(orders[items] > highestOrder.cost) {
    highestOrder.item = items;
    highestOrder.cost = orders[items];
    }
    
    return {

    order: Object.values(highestOrder)
    }
    }
}
    console.log(totalPrice(items, costs))

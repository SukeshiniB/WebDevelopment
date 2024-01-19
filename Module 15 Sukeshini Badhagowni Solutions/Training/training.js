class Stack {
    constructor() {
        this.items = []; //stack
    }
    //push -> inserting elements in the stack
    add(element) {
        return this.items.push(element);
    }
    //pop -> remove elements from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
        else {
            console.log("Stack is empty!")
        }
    }

}
//let menu = ["chocolate", "Pen", "Pencil", "Eraser", "Paints"]
let cart = new Stack()
let input = ""
do {
    input = prompt("Please enter your product")
    //console.log(menu)
    if (input !== "checkout") {
        cart.add(input)
        console.log(cart.items)
        //console.log(menu)

    }

} while (input !== "checkout")
console.log(cart.items)

// do{
//     input = parseInt(prompt("Please enter your product"))
//     switch(input){
//         case 1: cart.add("Chocolate");
//         console.log(cart.items)
//         break;
//         case 2 : cart.add("Milk");
//         console.log(cart.items)
//         break;
//         case 3 : cart.add("Pen");
//         console.log(cart.items)
//         break;
//         case 4 : cart.add("Pencil");
//         console.log(cart.items)
//         break;
//         case 5 : cart.add("Biscuits");
//         console.log(cart.items)
//         break;
//         default : console.log(cart.items)
//         break;
//         }
//     }

// while(
//     input >=1 && input < 6
//     )
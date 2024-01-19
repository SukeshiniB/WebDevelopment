// You are working on a Credit Card Statement application where you need to keep a track of the transactions
// being performed by the user using a Queue.
// The first function, Purchase, reads the amount required from the user and debits that amount from their 
// Credit Balance (Rs. 25,000 by default) by storing it in a Queue.
// When required, the user can Check Available Balance where your application displays the available balance.
// The user can also call a View Transactions function which will list all transactions in the order 
// in which the user made those purchases.

 class Queue{
        constructor(){
            this.items=[]
        }
        enqueue(element){
            return this.items.push(element)
        }
        dequeue(){
            if(this.items.length > 0){
                return this.items.shift()
            }
        }
 }

 let CCstatement = new Queue
 let creditBalance = 25000
 do{
    var input=0;
    input = parseInt(prompt("Enter purchase amount or view transactions"))
    switch (parseInt(input)){
               case 1:
                    var amount = parseInt(prompt("Enter the purchase amount"))
                    if(amount <= creditBalance){
                    CCstatement.enqueue(amount)
                    console.log(creditBalance)
                    creditBalance -= amount
                    console.log(creditBalance)
                    console.log(`The current credit balance is ${creditBalance} after the purchase of amount ${amount}`)
                    }
                    else {
                        console.log("Insufficient funds")
                    }      
                    break;
                case 2: 
                    console.log(`Transaction list is ${CCstatement.items}`)
                    break;
                default:
                    console.log("Invalid Input")
                    
   }
 }while (input >= 1 && input <= 2)

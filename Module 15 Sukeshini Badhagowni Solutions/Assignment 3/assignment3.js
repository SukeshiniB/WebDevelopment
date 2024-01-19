// // You are developing a Bus Ticket Booking application where you need to implement booking via the first-come first-serve 
// // basis using a Queue.
// // The first function, Book Ticket, will store user details(name, from city and to city) in an Array of Objects and 
// // add the corresponding ticket ID (random number) in the Tickets Queue
// // When the bus operator needs to, they should be able to search for all details of a user by using the ticket ID with the 
// // Search User function.

// // Note : Since this task requires taking inputs from the user, you have to use the script within an HTML file

class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        return this.items.push(element);
    }
    dequeue(){
        if(this.items.length > 0) {
          return this.items.shift()
        }
    }
    search(pId){
        for(i=0; i<this.items.length ; i++ ){
            if(this.items[i] == pId){
                return pId ;
            }
        }
    }
}
let ticketsQueue = new Queue()
let passengers = []
do{
    var input=0;
 input = parseInt(prompt("Enter details or search with ID"))
switch (parseInt(input)){
            case 1:
                 id = Math.floor(Math.random() * 100);
                     Pname = prompt("Enter Name")
                     Pfrom = prompt("Enter from city")
                     Pto = prompt("Enter to city")
                     
                   let tempPass = 
                   {name:Pname,
                    from:Pfrom,
                    to:Pto,
                    pId:id,
                }
                   passengers.push(tempPass)
                   console.log(passengers)
                   ticketsQueue.enqueue(id);
                //    console.log("added")
                    console.log("Ticket id is :", id)
            break;
            case 2 : let searchInput = parseInt(prompt("Enter ticket ID"))
                // console.log(searchInput)
                // console.log(ticketsQueue.items)
                for(let i=0; i<=passengers.length; i++){
                    if(passengers[i].pId == searchInput ){
                        console.log("passnger present");
                        console.log(`name = ${passengers[i].name} is travelling from = ${passengers[i].from} to = ${passengers[i].to}`)
                    }
                
                }
                break; 
                default :
                console.log("invalid id");
            }
        }while(input >= 1 && input <= 2)

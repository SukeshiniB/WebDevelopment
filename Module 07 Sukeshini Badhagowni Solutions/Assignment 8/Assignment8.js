// Write a program for arranging a queue for a competition’s participants. 
// Participants are being entered from the keyboard divided by commas. 
// Then a list of participants is displayed with distributed numbers. Be careful, numbers mustn’t repeat.

let participants = prompt ("enter the participant names") 
participants = participants.split(",") 
let copy = []
let a = participants.length
let b = 0
for(let participant of participants) //b=0
{
     do
     {
       b = Math.floor(Math.random()*a) + 1
       console.log(b)
     } 
     while(copy.includes (b) == true)
     console.log (`${participant} - ${b}`) 
     copy.push(b)  
}


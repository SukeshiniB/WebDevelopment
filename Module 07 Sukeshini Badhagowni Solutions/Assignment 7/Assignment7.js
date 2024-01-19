// When a guest comes to the restaurant, a hostess checks whether there is a reservation by its ID or by a surname. 
// If such a reservation exists, the booked table is displayed and the reservation is deleted. 
const guests = [
    ["001", "Johnson", "Table 2"],
    ["002", "Nisha", "Table 10"],
    ["003", "Vasav", "Table 1"],
    ["004", "Uddin", "Table 7"]
 ]
 let guest = Array.from(guests);
 let verify=""
 do
{
let a = false
 verify =  prompt("Enter either your ID or surname")
    for(let i=0; i<=guest.length; i++)
    {
        if (guest[i][0] === verify || guest[i][1] === verify)
        {
            console.log ( `Welcome to the ${guest[i][2]}`)
            guest.splice(i, 1)
            console.log (guest)
            a = true
            break;
        }                  
    }
    
    if(a===false)
    {
    console.log ("There is no such reservation") 
    }
} while(guest.length > 0)
    



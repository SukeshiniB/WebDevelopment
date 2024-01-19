// Write a script that randomly divides participants into 2 teams. The list of participants is given:
// const participants = ["John M.", "David H.", "Rajesh A.","Sunita S.", "Mohammed A.", "Ram J.","Anita R.", "Suresh R.", "Sara M.","Nick C.", "Lakshmi N."]
// Numbers of team members can’t differ more than 1. If the difference between teams reaches more than 1, remove members from the bigger team to another.
// Note. To find an absolute value of difference between arrays’ length, use Math.abs() method:
// Math.abs(team1.length - team2.length)

let participants = [ "John M.", "David H.", "Rajesh A.", "Sunita S.", "Mohammed A.", "Ram J.","Anita R.", "Suresh R.", 
                        "Sara M.", "Nick C.", "Lakshmi N."] 
let team1 = participants.slice(0, 4)
let team2 = participants.slice(4, participants.length)
console.log (team1)
console.log (team2)
let difference = Math.abs(team1.length - team2.length)
do
{
    difference = Math.abs(team1.length - team2.length)
    if(team1.length > team2.length)
    {
        let a = team1.pop()
        team2.push(a)
    }
    else
    {
        let b = team2.pop()
        team1.push(b)
    }
} while (difference > 1)
console.log(difference)
console.log (team1)
console.log (team2)

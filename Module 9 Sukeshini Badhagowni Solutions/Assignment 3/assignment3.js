// Write a JavaScript function which take the input from user such as name,age and room number as one string 
// separated by comma and create a person object using those properties and values and also add one method 
// in an object which returns a string forming an persons introduction message as shown in output
// Sample Input:
// Steve,27,111
// Sample output:
// I am steve, aged 27, living in room 111

function acceptValues() {
    let name = prompt("Enter name");
    let age = prompt("Enter age");
    let roomNumber = prompt("Enter room number");

    objectPerson(name, age, roomNumber)
}
acceptValues()
function objectPerson(name, age, roomNumber)
{
    let person = {
        fName : name,
        fAge : age,
        fRoomNum : roomNumber,
        getIntro : function(){
            return `I am ${this.fName}, aged ${this.fAge}, living in room ${this.fRoomNum}`
        }
    }
    console.log(person.getIntro())
}


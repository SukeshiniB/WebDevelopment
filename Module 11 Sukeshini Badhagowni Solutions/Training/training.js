//this Theory

// const employee = {
//     id:1,
//     fname: "John",
//     lname : "Doe",
//     dept : "Finance",

//     recordAttendance(date){
//         // get if of this employee
//         console.log(this)
//         console.log("Recorded for ID: "+ this.name)
//     },

//     getFullName(){
//         return this.fname+ " "+this.lname
//     }
// }
// employee.recordAttendance(new Date())

//Create a user object in JavaScript with properties id, name, and address. 
//Write a method inside the object to return the user's address. 
//Note that method should be called on the user’s object.

const user = {
    id:1,
    name: "John Doe",
    address : "India",

    locationDetail(){
        console.log("User belongs to "+this.address)
             
    }
}
user.locationDetail()

const user = {
    id: 1,
    name: "John Doe",
    address: "Mumbai, India",
    getAddress(){
        return "User belong to " + this.address;
    }
 }
 console.log(user.getAddress());

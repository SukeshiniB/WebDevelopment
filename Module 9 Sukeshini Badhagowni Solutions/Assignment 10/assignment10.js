function submitData(){
    var person = {
        Firstname : simpleForm.fname.value,
        Lastname : simpleForm.lname.value,
        Email : simpleForm.emailid.value,
        city : simpleForm.City.value,
        gender: simpleForm.gender.value,
       
       
    }
    console.log(`This is ${person.Firstname} ${person.Lastname}, ${person.gender} from ${person.city} and my email id is ${person.Email}`)
    
}






// function submitData(){
//     var person = {
//         name : simpleForm.name.value,
//         age : simpleForm.age.value,
//         city : simpleForm.city.value
//     }
//     console.log(person)
// }
// let personName = prompt("Enter name")
// let personAge = prompt("Enter age")
// let personCountry = prompt("Enter country")

// let obj = {
//     name : personName,
//     age : personAge,
//     country : personCountry
// }
// console.log (obj)
// console.log (obj.name)

let attempts = 5
let login = ""
let password = ""
//  if (login !== "admin_425" && password !== "jvv0oj45tm")
// {
//     for (let i=1; i<attempts; i++){
//         console.log (`Incorrect! Try again. ${attempts - i}  attempts left`)
//         do {
//             login = prompt("Login :: ")
//             password = prompt("password")
//         } while (i < attempts ) 
//     }
// } 
// else { 
//     console.log ("Success")
// }
// console.log ("No attempts left. We have to block your account")

let i = 1
do {
    login = prompt("Login :: ")
    password = prompt("password")
    if (login !== "admin_425" && password !== "jvv0oj45tm") {
        console.log(`Incorrect! Try again. ${attempts - i}  attempts left`)
        i++
    } else {
        console.log("Success")
        break;
    }
} while (i < attempts)
if (i === attempts) {
    console.log("No attempts left. We have to block your account")
}
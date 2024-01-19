// Define a JavaScript function largestSwapExistsInMarks within a student object having an array of marks to check 
// if for given 2 digit number, its largest swap exists in marks. Function should be defined as a 
// property of the object and invoke it using dot operator on the object. 
// Note that function should only accept one parameter as it should be able to access other properties of 
// current object.

let student = { marks : [23, 56, 78, 89, 43],
 largestSwapExistsInMarks(num) {
    let swap = parseInt(num.toString().split('').reverse().join(''))
    return this.marks.find((element) => element == swap) > 0
 }
}
console.log(student.largestSwapExistsInMarks(98))


// let student = { marks : [23, 56, 78, 89, 43]}


// let chec = Object.values(student)
// console.log(chec) //[23, 56, 78, 89, 43]}

// function largestSwapExistsInMarks(num){
//     const revNum = parseInt(num.toString().split('').reverse().join(''))
//     console.log(revNum)  //23
//     for(let i=0; i<chec.length; i++)
//     {
//         if(revNum == parseInt(chec[i]))
//         {
//             return true
//         }
//         else 
//         {
//             return false
//         }
//     }

// }
// console.log(largestSwapExistsInMarks(32))




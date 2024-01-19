// Given an array of marks of students write a function printMarks in JavaScriptto get first and second marks 
// in array without using index positions. Function should take a student 
// object with id, name and marks and print first and second marks from array.

 let printMarks = (student) => {
   //  let one = student.marks[0]
   //  let two = student.marks[1]
   const value = student.marks
   const [one,two] = value
    console.log( one, two)
 }
printMarks({name: 'David', id: 1, marks:[89, 76, 45, 83, 93]})




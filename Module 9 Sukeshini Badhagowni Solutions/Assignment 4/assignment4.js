// Create an array of objects 
// After creating as array of objects then sort the array and  iterate over them and
// print the output as follows by accessing object properties

let student = 
[
    {
        firstName : "John",
        lastName : "Apple",
        age : 27,
        joinedDate : "December 15, 2017"
    },
    {
        firstName : "Ana",
        lastName : "Rosy",
        age : 25,
        joinedDate : "January 15, 2019"
    },
    {
        firstName : "Zion",
        lastName : "Albert",
        age : 30,
        joinedDate : "February 15, 2011"
    }
]
student.sort((a, b) => a.age - b.age);
student.forEach((y) => {
    console.log(`This is ${y.firstName} ${y.lastName}, aged ${y.age} joined the institure on ${y.joinedDate}`);
});
// This is Ana Rosy, aged 25 joined the company on January 15, 2019
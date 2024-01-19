let employees = [
{
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 27,
    joinedDate: 'December 15, 2017'
}, 
{
    firstName: 'Tony', 
    lastName: 'Stark',
    age: 25,
   joinedDate: 'January 15, 2019'
}, 
{
    firstName: 'Bruce',
    lastName: 'Banner',
    age: 30,
    joinedDate: 'February 15, 2011'
 }];
 var obj = {
    firstName: 'Black',
    lastName: 'Widow',
    age: 27,
    joinedDate: 'December 25, 2018'
}
employees.push(obj)
var obj2 = {
    firstName: 'Winter',
    lastName: 'Soldier',
    age: 27,
    joinedDate: 'October 15, 2007'
}
employees.unshift(obj2)
console.log(employees)
console.log("output1:")
for(const employee in employees)
{
    console.log( `This is ${employees[employee].firstName} ${employees[employee].lastName}, aged ${employees[employee].age} joined the company on ${employees[employee].joinedDate}`)
}
let newEmployees = Object.seal(employees)
console.log("output2:")
for(const joindate in employees)
{
    employees[joindate].joinedDate = "December 13, 2021"
    console.log( `This is ${employees[joindate].firstName} ${employees[joindate].lastName}, aged ${employees[joindate].age} joined the company on ${employees[joindate].joinedDate}`)
}

// Subtask 1 : In the above array of employee objects, add the new object of an employee at the end of the array.
// Following is the object details
// PropertyName -- Value
// firstName -- Black
// lastName -- Widow
// age -- 27
// joinedDate -- December 25, 2018
// Subtask 2 : In the above array of employee objects, add the new object of an employee at the start of the array.
// Following is the object details
// PropertyName -- Value
// firstName -- Winter
// lastName -- Soldier
// age -- 27
// joinedDate -- October 15, 2007
// SubTask 3 :Print the objects data as shown in the sample output by accessing object properties and 
// print the heading “output1:” before that.
// Subtask 4: Make sure that after subtask 3 we cannot add no new objects in the array but we can 
// change the properties of the objects in the array.
// Subtask 5:  Iterate over all the objects and change every object’s property i.e. 
// joinedDate value to have value December 13, 2021.
// Subtask 6:  Print the objects data as shown in the sample output by accessing object properties and 
// print the heading “output2:” before that.

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status)
// of the following books. And use string literal to print message and author name should be in upper case.
// Sample Object Data:
// Object 1
// PropertyName  —  Value
// Author - Bill Gates
// Title - The Road Ahead
// readingStatus - true
// Object 2
// PropertyName  —  Value
// Author - Steve Jobs
// Title - Walter Isaacson
// readingStatus - true
// Object 3
// PropertyName  —  Value
// Author - Suzanne Collins
// Title - Mockingjay: The Final Book of The Hunger Games
// readingStatus - false
// Sample output: 
// I already read  The Road Ahead by BILL GATES.
// I already read  Walter Isaacson by STEVE JOBS.
// I need to read Mockingjay: The Final Book of The Hunger Games by SUZANNE COLLINS.

let statusvalue = [
  {Author : "Bill Gates",
        title : "The Road Ahead",
       readingStatus : true},
   {Author : "Steve Jobs",
       title : "Walter Isaacson",
      readingStatus : true},
 {Author : "Suzanne Collins",
      title : "Mockingjay: The Final Book of The Hunger Games",
     readingStatus : false}
]
for(let eachstatus of statusvalue)
{
    if(eachstatus.readingStatus === true )
    {
        console.log(`I already read ${eachstatus.title} by ${eachstatus.Author}`)
    }
    else 
    {
        console.log(`I need to read ${eachstatus.title} by ${eachstatus.Author}`)
    }

}
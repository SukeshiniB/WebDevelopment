// Create a function addNum which takes 2 parameters. The first is an integer value and the other is a
// function type parameter. When addNum is invoked(called), it should return the sum of the first parameter and 
// the return value from the second parameter(which is 10 here).

let addNum = (x,y=10) => { return x+y}
console.log(addNum(4))

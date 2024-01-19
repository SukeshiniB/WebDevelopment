// Create a function expression with mainFunc as the variable name, which takes only one parameter of 
// function type and calls that function inside the mainFunc.
// Hint: create a secondary function that has a simple console.log method with any string.

const mainFunc = (func) => {
  return func
  }
const secFun = () => {
    return "This is a function expression"
};
console.log(mainFunc(secFun()))



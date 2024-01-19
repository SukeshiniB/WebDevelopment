// Write a javascript function calculateNetSalary to calculate employee’s net salary after taxes. 
// Function should take employee object as parameter and percent of taxes to be deducted. 
// If percent of tax is not passed, use 30% as the default amount.

let salary = {id: 1, totalSalary: 90000, dept: "IT"}
const calculateNetSalary = (salary,taxes=30) => {
    console.log(salary.totalSalary - (salary.totalSalary*taxes/100))
}
calculateNetSalary(salary)
calculateNetSalary(salary,10)
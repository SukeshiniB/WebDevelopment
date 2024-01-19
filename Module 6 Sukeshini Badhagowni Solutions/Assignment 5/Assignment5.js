let Num = parseInt(prompt("Enter the number"))
let runningtotal = 0
while (Num >= 0) {
    runningtotal = runningtotal += Num
    console.log(`The total profit is : ${runningtotal} INR`)
    Num = parseInt(prompt("Enter the number"))
}
console.log(`The total profit is : ${runningtotal} INR`)
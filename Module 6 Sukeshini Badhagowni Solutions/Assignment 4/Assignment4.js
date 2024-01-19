let number = parseInt(prompt("Enter a number"))
if (number >= 0 && number <= 100) {
    for (let i = 0; i <= number; i++) {
        console.log(i)
    }
} else {
    alert("The number is not in the [0,100] interval")
}
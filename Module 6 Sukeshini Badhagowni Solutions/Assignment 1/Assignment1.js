let password = prompt("Please enter your password")
if (password.length < 8) {
    console.log("not acceptable")
    password = prompt("Please enter your password")
} else {
    console.log("accept")
}
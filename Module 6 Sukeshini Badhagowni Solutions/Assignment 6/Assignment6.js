let promocode = ""
do {
    promocode = prompt("Please enter the code")
    if (promocode === "HOLIDAYS22") {
        console.log("“10% discount has been applied”")
        break;
    } else {
        console.log("“Incorrect!”")
    }
} while (promocode !== "HOLIDAYS22")
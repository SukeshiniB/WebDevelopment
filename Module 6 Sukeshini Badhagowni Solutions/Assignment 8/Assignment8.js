let maincharacter = ""

do {
    maincharacter = prompt("Please enter main character name")
    if (maincharacter === "Peter Parker") {
        console.log("Spider-Man")
        break;
    } else if (maincharacter === "Fiona") {
        console.log("Shrek")
        break;
    } else if (maincharacter === "Jack Sparrow") {
        console.log("The Pirates of the Caribbean")
        break;
    } else if (maincharacter === "Master Shifu") {
        console.log("Kung Fu Panda")
        break;
    } else {
        console.log("I don’t know him/her yet")
    }
} while (maincharacter != 0)
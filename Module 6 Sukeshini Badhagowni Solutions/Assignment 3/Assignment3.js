let taste = prompt("Please enter your desired taste")
let headcount = (prompt("Enter the total headcount"))

if (headcount > 0) {
    if (headcount >= 1 && headcount <= 2) {
        headcount = "Small"
    } else if (headcount >= 3 && headcount <= 5) {
        headcount = "Medium"
    } else {
        headcount = "Large"
    }
    switch (taste) {
        case "chocolate":
            taste = "Chocolate Dream"
            break;
        case "Berries or fruits":
            taste = "“Tropic Pleasure”"
            break;
        case "Nuts":
            taste = "“Cupcake Set”"
            break;
        case "Cheesecake":
            taste = "“Creamy Cheesecake”"
            break;
        default:
            taste = "“Cupcake Set”"
            break;
    }
}
console.log(`${headcount} ${taste}`)
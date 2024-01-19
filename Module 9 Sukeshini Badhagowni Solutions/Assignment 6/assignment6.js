// Write a JavaScript program to calculate the area and perimeter of a circle and square. 
// Subtask 1: Ask user to either enter 1 or 2, 1 for circle and 2 for square
// Subtask 2: create switch case for both cases i.e. either circle or square. If user enters value other than 1 or 2, alert user as “Enter valid option”
// // Subtask 3: Create formCircle method having one parameter that is radius of circle, 
// in that there will be an object of circle which has 3 properties as radius, 
// calculatePerimeter and calculateArea as  methods which calculate perimeter and area of circle 
// respectively and call the methods calculatePerimeter and calculateArea inside the formCircle method itself.
// Subtask 4: Create formSquare method having one parameter that is side of square, 
// in that there will be an object which has 3 properties as side, calculatePerimeter and calculateArea as  
// methods which calculate perimeter and area of square respectively and call the methods calculatePerimeter and 
// calculateArea inside the formSquare method itself.
// Subtask 5: If user entered 1, then ask the user for radius of circle and also call formCircle method
// Subtask 6: If user entered 2, then ask the user for side  of square and also call formSquare method

let userInput = prompt("Please enter 1 for circle and 2 for square")// removing parseint
switch(userInput) {
    case "1": 
        let r = prompt("Enter the radius of a circle")
        // console.log("It is Circle");
        function formCircle(r, typeOfOperation){
            typeOfOperation(r)
        }
        function calculatePerimeterofCircle(r){
             let circleperimeter = 2*3.14*r
             console.log(`The perimeter of circle is ${circleperimeter}`)
        }
        function calculateAreaofCircle(r){
            let circlearea = 3.14*Math.pow(r,2)
            console.log(`The area of circle is ${circlearea}`)
        }
        formCircle(r, calculatePerimeterofCircle)
        formCircle(r, calculateAreaofCircle)
        break;
    case "2": 
        let s = prompt("Enter the side")
        console.log("It is Square");
        function formSquare(s, typeOfOperation){
            typeOfOperation(s)
        }
        function calculatePerimeter(s){
             let perimeter = 4*s
             console.log(`The perimeter of square is ${perimeter}`)
        }
        function calculateArea(s){
            let area = Math.pow(s,2)
            console.log(`The area of square is ${area}`)
        }
        formSquare(s, calculatePerimeter)
        formSquare(s, calculateArea)
        break;
    default :
        alert("Enter valid option");
        break;
}


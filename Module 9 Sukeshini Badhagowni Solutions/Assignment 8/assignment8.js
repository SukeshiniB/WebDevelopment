// Subtask 1: create an array of objects  as per given object data.
// Subtask 2: Iterate over array of objects and add new property in each object which is a method having 
//             name as oneLineIntro which will be an arrow function and returns the string as shown in the 
//             sample output.
// Subtask 3: Iterate over an array of objects and call the method oneLineIntro for every object  
//             and print the string that method returns onto the console. 

let arr = [
    {
        name : "John",
        city : "Delhi"
    },
    {
        name : "Tony",
        city : "Mumbai"
    },
    {
        name : "Steve",
        city : "Bangalore"
    }
]
{
    for(const property in arr)
    {
        arr[property].oneLineIntro = () => {return `This is ${arr[property].name} from ${arr[property].city}`}
        console.log(arr[property].oneLineIntro())
    }
}
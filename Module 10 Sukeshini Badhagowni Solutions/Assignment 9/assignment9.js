// Convert the below array of objects to object iterable. 
// For example if array of objects is [{key: 1, value: 1}, {key: 2, value: 2}, {key: 3, value: 3} … 
// {key: 50, value: 50}] should be converted like this {1: {key: 1, value: 1}, 2: {key: 2, value: 2}, … 50: 
// {key: 50, value: 50}}.
// const myArray = [
//         { id: 1, name: "A" },
//         { id: 2, name: "B" },
//         { id: 3, name: "C" },
//         { id: 4, name: "D" },
//         { id: 5, name: "E" }

const myObject = {}
myArray.forEach((obj) => {
    myObject[obj.id] = obj
})
console.log(myObject)

// const myObject = {};
// myArray.forEach((obj, i) => {
//   console.log(i);
//   myObject[obj.id] = obj;
// });

// console.log(myObject);
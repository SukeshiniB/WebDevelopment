// Given an array of cars manufacturers whose values are given below. 
// The array doesn’t have uniformity in the values. Create a function that takes the manufacturers as a 
// single parameter returns an object having 2 keys ‘allLowerCase’ and ‘allUpperCase’ 
// whose values are processed values in lower case and upper case respectively.

// manufacturers = ['audi', 'BMw', 'ForD', 'mG', 'tata', 'MAHINDRA'];

let manufacturers = ['audi', 'BMw', 'ForD', 'mG', 'tata', 'MAHINDRA'];
function processManufacturers(x) {
    let lowerCase = [];
    let upperCase = [];
    for (let i = 0; i < x.length; i++) {
        lowerCase.push(x[i].toLowerCase());
        upperCase.push(x[i].toUpperCase());
}

let result = {
    allLowerCase: lowerCase.join(", "),
    allUpperCase: upperCase.join(", ")
    };
    
    return result;
    }
   console.log( processManufacturers(manufacturers))

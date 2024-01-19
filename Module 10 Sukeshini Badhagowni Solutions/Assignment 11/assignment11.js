// Given an array of superheroes. Create a function that takes an array as a parameter and 
// returns a new array with some details of the superheroes (index, character length), for instance, 
//  ‘Batman is present at 5 index and has a length of 6’. 
//  The list is ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor']

let heros = ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor']
let superheros = []

let heroDetails = (x) => {
    for(let i=0; i<x.length; i++)
    {
        let index = x.indexOf(x[i])
        let length = x[i].length
        let y = x[i] + " is present at " + index + " and has a length of " + length
        superheros.push(y)
        
    }
    return superheros
 }
 console.log(heroDetails(heros))
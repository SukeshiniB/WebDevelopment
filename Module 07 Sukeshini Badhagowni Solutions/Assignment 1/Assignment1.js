// Write a script for the website dedicated to coin collecting. The pride of every collector is the amount of counties where his coins were produced. 
// The program must request entering different countries, then sort them in an alphabetic order and print them along with the total amount.
// Note. You may use “0” to stop entering countries.

let countries = []
let names = ''
while(names !== "0")
{
    names = prompt("Enter a country name")
    countries.push(names)
}
countries.pop(0)
countries = countries.sort()
let counter = countries.length
console.log (`Wow! There are coins from ${counter} countries in this collection : \n ${countries}`)
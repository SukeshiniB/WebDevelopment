let string = "In the park, you can see a peacock, rabbit, squirrel and a parrot"
                
let bird1 = string.slice(27,34)
let animal1 = string.slice(36, 42)
let animal2 = string.slice(44,52 )
let bird2 = string.slice(59 , 65) 

let final = `${bird1}\n${animal1}\n${animal2}\n${bird2}`

console.log (final.toUpperCase())
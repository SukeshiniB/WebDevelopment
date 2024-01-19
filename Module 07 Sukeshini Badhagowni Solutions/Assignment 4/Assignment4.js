// Write a script that adapts movie recommendations for users under 18.
// The program has to work with the given list of movies: The Batman, Don’t Look Up, Against the Ice, Sing 2, Love Hard
// It requests an age and analyses it. If the age is under 18, it changes the list of recommendations and replaces some items:
// The Batman ➝ Coco
// Against the Ice ➝ Free Guy Finally, the program outputs the whole list of recommendations.

let movienames = ['The Batman', 'Don’t Look Up', 'Against the Ice', 'Sing 2', 'Love Hard']
let copy = Array.from(movienames)
let age = parseInt(prompt("Please enter your age"))

if (age < 18) {
    copy.splice(0, 1, "Coco")
    copy.splice(2, 1, "Free Guy")
    console.log(`Why wouldn’t you watch these movies: \n${copy}`)
}
else {
    console.log(`${movienames}`)
}
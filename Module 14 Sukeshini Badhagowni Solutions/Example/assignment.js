let inputElems = document.querySelectorAll("input")
inputElems.forEach((eachElem, id) =>{
    eachElem.addEventListener("keyup",(e) => {
        e.preventDefault()
        if(e.key === "Enter") {
            inputElems[ind+1].focus()
        }
    })
})

let formElem = document.querySelector(".container")
formElem.addEventListener("submit", (e) => {
    e.preventDefault()
    const formValues = {
        name: e.target[0].value,
        email: e.target[1].value,
        password :e.taget[2].value,

    }
})
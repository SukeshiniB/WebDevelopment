// let divElement = document.getElementById("con")
// console.log(divElement.style.color)
// divElement.style.color = "green"
// console.log(divElement.style.color)
// divElement.style.backgroundColor = "red"
// divElement.style.border = "10px solid red"

let divElement1 = document.getElementsByClassName("common")
for(let i=0; i<divElement1.length; i++)
{
    if(i%2==0){
        divElement1[i].style.color = "red"
    }
    else{
        divElement1[i].style.color = "green"
    }
}
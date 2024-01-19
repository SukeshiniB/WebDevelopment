// let firstElement = document.querySelector(".second")
// console.log(firstElement.textContent)
// let idElement = document.querySelector("#container")
// console.log(idElement)
// let orderList = document.querySelector("ol .third")
// console.log(orderList)

// Write a JavaScript function to change the text of a paragraph. 
// Initially, create a paragraph tag with "Hello World" content and a button.
//  After the button click, change the content to "Hello Everyone".

// function changeContent()
// {
//     document.getElementById("p").innerText = "Hello Everyone"
// }
// console.log(changeContent)

// function changeStyle()
// {
//     let test = document.getElementById("test")
//     test.style.fontSize = "25px"
//     test.style.color = "red"
// }

// const fruitList = ['apple', 'banana', 'tomato'];
// let liItems = "";
// let ulElement = document.getElementsByTagName('ul');
// for(let i = 0; i<fruitList.length; i++)
// {
//     liItems += `<li>${fruitList[i]}</li>`;
// }
// ulElement.innerHTML = liItems;
// console.log(ulElement)

// function updateRowsData()
// {
//     let update = document.querySelectorAll(" .cell-1")
//     for (let i =0; i<update.length; i++)
//     {
//         update[i].innerText = "Data changed"
//     }
   
// }

// function changeContent()
// {
//     let test = document.getElementsByTagName("p");
//     for(let i=0; i<test.length; i++)
//     {
//     test[i].style.color = "blue"
// }
// }

function changeContent()
{
    let test = document.getElementsByClassName("para")
    for (let i=0; i<test.length; i++)
    {
        if(i%2 == 0)
        {
            test[i].style.color = "red"
        }
        else
        {
            test[i].style.color = "green"
        }
    }
}
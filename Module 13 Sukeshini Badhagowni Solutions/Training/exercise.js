// const div = document.querySelector('.example-div');
// const btn = document.querySelector('#div-mover');

// btn.addEventListener('click',() => {
//     div.style.left = '300px';
//     div.style.backgroundColor = 'yellow';
// })

const div = document.querySelector('.d1');
const btn = document.querySelector ('#color-btn');
const btnremove = document.querySelector('#color-btn-remove');
const btnreplace = document.querySelector('#color-replace');
const btntoggle = document.querySelector('#div-toggle')

btn.addEventListner('click' , () =>{
div.classList.add('d2')
})
btnremove.addEventListener('click', () => {
div.classList.remove('d2');
})
btnreplace.addEventListener('click', () => {
div.classList.replace('d1', 'd2');
})
btntoggle.addEventListener('click', () => {
div.classList.toggle('hide');
})

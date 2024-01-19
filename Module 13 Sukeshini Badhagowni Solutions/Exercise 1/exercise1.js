const btn = document.querySelector('.move');

btn.addEventListener ('click', () => 
{
    btn.style.top = (Math.random() * 100+1) + 'px'
    btn.style.left = (Math.random() * 100+1) + 'px'
    
})
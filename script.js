const menu=document.querySelector('.menu');
const mobilelinks=document.querySelector('.mobileLinks');
const closeicon=document.querySelector('.close-icon');
menu.addEventListener('click', ()=> {
        mobilelinks.style.top="0";
        mobilelinks.classList.add('here');
    
})

closeicon.addEventListener('click', () => {
    if(mobilelinks.classList.contains('here')){
        mobilelinks.style.top='-100vh';
        mobilelinks.classList.remove('here');
    }
    
})
// variaveis 
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnCookie = document.querySelector('#btnCookie'); 
const btnReset = document.querySelector('#btnReset');

// Eventos
btnCookie.addEventListener('click', handleClickCookie);
btnReset.addEventListener('click', handleReset);

// funções
function handleClickCookie(){ 
    screen1.classList.add('hide'); 
    screen2.classList.remove('hide');
}

function handleReset(){
    location.reload();
  }
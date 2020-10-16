// document => DOM
const mainButton = document.getElementById('main-button');
// console.log('El botón es esto:', mainButton)

// Voy a enseñar el contenido que tiene dentro el botón
const buttonContent = mainButton.innerHTML;
console.log(buttonContent);

mainButton.innerHTML = '<b>Duck McRubber</b>';

// Vamos a buscar elementos por su className
const coloredDivs = document.getElementsByClassName('colored');

coloredDivs[1].style.color = 'black';

for (let i = 0; i < coloredDivs.length; i++) {
  coloredDivs[i].style.fontSize = '24px';
}

// Vamos a usar querySelector para cambiar el botón
const flexDiv = document.querySelector('#flex-div');
flexDiv.style.display = 'flex';

const flexColoredDivs = document.querySelectorAll('div > .colored');

for (let i = 0; i < flexColoredDivs.length; i++) {
  flexColoredDivs[i].style.padding = '1rem';
}

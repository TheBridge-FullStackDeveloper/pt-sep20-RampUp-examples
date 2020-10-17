function handleClick(clickedButton) {
  console.log('Clickado!');

  const mainP = document.querySelector('#main-p');
  mainP.innerText = 'Has clickado en el unicornio! 🔥';
  mainP.style.fontSize = '24px';
}

function handleKeyUp(target) {
  // Este promptInput es innecesario porque input viene desde el target
  // Esta es la FORMA MANUAL de llamar al input
  // const promptInput = document.querySelector('#prompt-input')

  const promptH3 = document.querySelector('#prompt');
  promptH3.innerText = target.value;
}

// Buscamos el botón de sumar y añadimos un evento con JS
function handleClickAddButton() {
  const counter = document.querySelector('#counter');
  // Transformamos el valor del counter a Number porque en HTML todo
  // lo que hay en el DOM es un STRING
  const counterValue = Number(counter.innerText);
  // Ahora cambio el valor del counter y le sumo 1 a lo que había antes
  counter.innerText = counterValue + 1;
}

const addButton = document.querySelector('#add-button');
// Esta sintaxis es siempre así, addEventListener('evento', función)
addButton.addEventListener('click', handleClickAddButton);

// Definimos el botón de resta
function handleClickSubstractButton() {
  const counter = document.querySelector('#counter');
  const counterValue = Number(counter.innerText);
  counter.innerText = counterValue - 1;
}

const substractButton = document.querySelector('#substract-button');
substractButton.addEventListener('click', handleClickSubstractButton);

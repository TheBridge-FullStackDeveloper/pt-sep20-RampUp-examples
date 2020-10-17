function handleSubmit(event) {
  // Prevenimos el comportamiento por defecto del EVENTO QUE OCURRE
  // En este caso, el formulario ya NO hará que la pádina SE REFRESQUE
  event.preventDefault();

  // Todos los elementos de tipo input, button, textarea....
  const formElements = event.target.elements;

  // Hemos sacado el pokemon usando el name del input
  const favoritePokemon = formElements['favorite-pokemon'].value;
  const pokemonLevel = formElements['pokemon-level'].value;

  const pokemonName = document.querySelector('#pokemon-name');
  pokemonName.innerText = `Tu pokemon es ${favoritePokemon} y es de nivel ${pokemonLevel}`;

  // Podemos sacar el input usando su name en formElements
  // const pokemonInputByName = formElements['favorite-pokemon']
  // console.log(pokemonInputByName)

  // Podemos recorrer todos los formElements y discriminar los que sean de tipo submit o button
  // for (let i = 0; i < formElements.length; i++) {
  // if (formElements[i].type !== 'submit' && formElements[i].type !== 'button') {
  // console.log(`Elemento en ${i}`, formElements[i], formElements[i].type)
  // }
  // }

  // const pokemonInput = document.querySelector('#pokemon-input')
  // const pokemonInputValue = pokemonInput.value

  // const pokemonName = document.querySelector('#pokemon-name')
  // pokemonName.innerText = pokemonInputValue
}

const pokemonForm = document.querySelector('#pokemon-form');
pokemonForm.addEventListener('submit', handleSubmit);

function handleClickMe(event) {
  // El event.target es el elemento que llama al evento
  console.log('EL BOTON', event.target);
}
const clickMeButton = document.querySelector('#click-me');
clickMeButton.addEventListener('click', handleClickMe);

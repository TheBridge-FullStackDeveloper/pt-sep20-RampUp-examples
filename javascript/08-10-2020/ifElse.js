// El otro día vimos if () {} en clase para comprobar condiciones y lanzar código si se cumplían
var isVegan = false;

if (isVegan === true) {
  console.log('Toma una lechuga 🥬');
}

if (isVegan === false) {
  console.log('Toma una burguer 🍔');
}

// Podemos usar if...else para hacer una sola pregunta y
// no tener que repetir varias veces la condición
isVegan = true;

if (isVegan === true) {
  console.log('Toma una lechuga 🥬');
} else {
  console.log('Toma una burguer 🍔');
}
// Usar else es como decir "Todo lo opuesto al if() que acabo de comprobar"

// Problema de código (Bono Metro)
var age = 50;

// Para encadenar varios if...else if...el podemos utilizar | else if() |
if (age <= 25) {
  console.log('Bono a 20€');
}

if (age > 25 && age < 65) {
  console.log('Bono a 54€');
}

if (age >= 65) {
  console.log('Bono gratis');
}

// Solución con if...else if...else
if (age <= 25) {
  console.log('Bono a 20€');
} else if (age >= 65) {
  console.log('Bono gratis');
} else {
  console.log('Bono a 54€');
}

// Ejercicio: Usamos nuestro carnet para entrar a un museo.
// Valores: 'Normal', 'Socio', 'Parado', 'Jubilado'
var ticket = 'Socio';

if (ticket === 'Normal') {
  console.log('Vale 16€');
} else if (ticket === 'Socio') {
  console.log('Vale 4€');
} else if (ticket === 'Parado') {
  console.log('Gratis');
} else if (ticket === 'Jubilado') {
  console.log('Vale 1€');
}

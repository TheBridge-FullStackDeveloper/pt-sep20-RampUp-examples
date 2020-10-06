// ¿Cuántos años tienes?
var age = 20;

// Con un if lanzamos el código de dentro SI SE CUMPLE la condición
if (age <= 25) {
  console.log('Tu bono metro vale 20€');
}

if (age >= 65) {
  console.log('Tu bono sale gratis');
}

// El doble Ampersand && siginifica AND o Y. Enlaza comprobaciones.
if (age > 25 && age < 65) {
  console.log('Tu bono metro vale 54€');
}

// EJERCICIO
// Nuestros superheroes se han perdido y no saben volver a casa. Haz una aplicación que les diga a que ciudad deben volver según su nombre.

// Batman => Gotham
// WonderWoman => Amazonas
// Hulk, Wolverine, Ironman => Sigue dando vueltas

// && AND - || OR

var superheroName = 'Hulk';

if (superheroName === 'Batman') {
  console.log('Vete a Gotham crack');
}

if (superheroName === 'WonderWoman') {
  console.log('Al Amazonas');
}

if (
  superheroName === 'Hulk' ||
  superheroName === 'Wolverine' ||
  superheroName === 'Ironman'
) {
  console.log('Sigue dando vueltas 🦄');
}

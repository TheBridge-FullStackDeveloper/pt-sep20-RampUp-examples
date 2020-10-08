// Crear un bucle que itere cuatro veces
// Imprimir por consola "Cumpleaños feliz" en la primera, segunda y cuarta iteración
// E imprima "Te deseamos" seguido del nombre del cumpleañero en la tercera iteración
var name = 'Cristian';

for (var i = 1; i < 5; i++) {
  if (i === 3) {
    console.log('Te deseamos', name);
  } else {
    console.log('Cumpleaños feliz');
  }
}

// //////////////////////////////
console.log('---------------------------');
var name2 = 'Isabel';
var i = 1;

while (i < 5) {
  if (i === 1 || i === 2 || i === 4) {
    console.log('Cumpleaños feliz');
  } else {
    console.log('Te deseamos', name2);
  }

  i += 1;
}

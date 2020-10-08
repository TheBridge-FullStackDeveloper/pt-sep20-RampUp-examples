// Para recorrer una colección de elementos usamos bucles.

// Primero veremos el bucle for() {}
var number = 0;

// Estas son 3 formas diferentes de sumarle 1 a un valor sobre su valor anterior
number = number + 1;
console.log(number);
number += 1;
console.log(number);
number++;
console.log(number);

// Comprobamos que number es más de 10
if (number > 10) {
}

// Creamos nuestro primer bucle for
// Para una variable i que empieza valiendo 0
// Siempre que la i valga menos que 11
// Y le sumemos +1 en cada bucle
// Haremos el siguiente código
// Separados por ;
for (var i = 0; i < 11; i++) {
  console.log(i);

  if (i % 2 === 0) {
    console.log(i, 'es par');
  }
}
// El i++ pasa cuando acaba de lanzar el código del bucle

// Vamos a sacar todos los números múltiplos de 3 contenidos entre 1 y 30
for (var i = 1; i < 31; i++) {
  if (i % 3 === 0) {
    console.log('El número', i, 'es múltiplo de 3');
  } else if (i % 2 === 0) {
    console.log('El número', i, 'es múltiplo de 2 y par');
  } else {
    console.log('No sabemos el múltiplo de', i);
  }
}

// También podemos hacer bucles usando while() {}
var i = 1;

while (i < 31) {
  // Aquí ocurre el código de mi bucle
  if (i % 3 === 0) {
    console.log('El número', i, 'es múltiplo de 3');
  } else if (i % 2 === 0) {
    console.log('El número', i, 'es múltiplo de 2 y par');
  } else {
    console.log('No sabemos el múltiplo de', i);
  }

  i += 1;
}

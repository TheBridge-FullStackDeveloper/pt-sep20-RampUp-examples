//El signo = dice que un valor está dentro de una variable
// El signo = ASIGNA un valor
var firstPerson = 'Sol';
var secondPerson = 'Dani';

// Para cambiar el valor de una variable, uso =
console.log(firstPerson);
firstPerson = 'Isabel';
console.log(firstPerson);

// Puedo cambiar el tipo de una variable sin problemas
firstPerson = 10;
console.log(firstPerson);

// No está nada recomendado cambiar el tipo de la variable ya
// que puedes causar problemas en la gestión del código y el proyecto

// IGUALDADES
var a = 4;
var b = 6;
var c = 6;
var d = '6';

var isTrue = 'true';
var isTrue2 = true;

// Podemos comparar variables con doble igual == para ver si valen lo mismo
console.log(a == b);
console.log(b == c);
// El doble igual pregunta si sus valores SON "SIMILARES"/"IGUALES"...
console.log(c == d);
// pero solo ocurre cuando los valores son números y no booleans...
console.log(isTrue == isTrue2);
// aunque también pasa con undefined y null...
console.log(undefined == null);
// por tanto, comprueba "más o menos" lo que vale una variable o valor
console.log(0 == false);

// Podemos comparar variables con triple === para ver si valen lo mismo y SON DEL MISMO TIPO
console.log(a === b);
console.log(c === d);
console.log(isTrue === isTrue2);
console.log(undefined === null);
console.log(0 === false);
// Por tanto, usaremos SIEMPRE QUE PODAMOS el triple igual ===

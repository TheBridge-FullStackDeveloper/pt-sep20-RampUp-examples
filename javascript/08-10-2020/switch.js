// Switch nos permite validar o lanzar código entre los valores posibles para una variable
var discountCode = 'meloinvento';
var price = 20;

if (discountCode === '20OT2020') {
  price = price * 0.8;
  // price *= 0.8; // Soy igual a mi mismo multiplicado por 0.8
  // Esta comparación ocurre porque tenemos otro posible código de descuento
} else if (discountCode === '30SU2020') {
  price *= 0.7;
} else {
  // Entro aquí si no se cumple ninguna de las otras condiciones
  console.log('Este código es inválido');
}

// Podemos sumar strings y numbers en JS, pero se pegan al mostrarse en consola
console.log('Tu precio final es' + price);
// Para solucionarlo, podemos añadir un espacio al final del string
console.log('Tu precio final es ' + price);
// Pero también, podemos separar los valores por coma y se añaden los espacios
console.log('Tu precio final es', price);

// Si tengo muchos else...if, es decir, muchos casos, puedo usar switch
discountCode = '20OT2020';
price = 20;

// El valor que introducimos en el switch es el que comprobamos en los case
switch (discountCode) {
  // Si el valor introducido "discountCode" vale lo que case diga, entra en ese código.
  case '20OT2020':
    price = price * 0.8;
    break;
  case '30SU2020':
    price = price * 0.7;
    break;
  // si no se cumple ningún case, lanzamos el deafult
  default:
    console.log('Este código es inválido');
}

console.log('Tu precio final es', price);

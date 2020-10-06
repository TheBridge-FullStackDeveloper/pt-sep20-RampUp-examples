// Vamos a crear una variable que se llame myNumber que sea igual a 3
// Queremos mostrar en consola el resultado (en una nueva variable) de haber multiplicado myNumber por 4, dividido por 2 y comprobado si es par o impar.
var myNumber = 5;
// Multiplicar myNumber por 4
var multiplied = myNumber * 4;
// Dividido entre 2
var divided = multiplied / 3;
// Comprobar si es par o impar
var rest = divided % 2;
console.log(rest === 0);

// Calcular si el resto del resultado de dividir entre 3 una variable llamada myOtherNumber que vale 6 elevada a 4 es igual a 10
var myOtherNumber = 6;
// Elevo a cuatro
var power = myOtherNumber ** 4;
// Divido entre 3
var dividedByThree = power % 3;
console.log(dividedByThree === 10);

var a = 5;
var b = 6;
var c = 6;
var d = '6';

// La comparación MENOR QUE se hace con <
console.log(a < b);
console.log(b < c);
// En este caso estamos diciendo MENOR O IGUAL QUE <=
console.log(b <= c);
console.log(c <= d);

// La comparación MAYOR QUE se hace con >
console.log(a > b);
console.log(b > c);
console.log(c > d);
// En este caso estamos diciendo MAYOR O IGUAL QUE >=
console.log(b >= c);
console.log(c >= '10');

// MATES
console.log(2 + 1);
console.log(2 - 1);
console.log(2 / 2);
console.log(2 * 2);

// El ELEVADO A lo hago con ** (num1 ** num2)
console.log(2 ** 5);
console.log(Math.pow(2, 4))

// El RESTO DE UNA DIVISION lo hago con % se llama MÓDULO
console.log(2 % 2)
console.log(3 % 2)

var num = 60
// ¿Es num dividido entre 3 par o impar? 
// Debe devolver TRUE o FALSE
var byThree = num / 3;
console.log(byThree)
var module = byThree % 2;
console.log(module)
// Resultado:
console.log(module === 0)
// Como sería en una LINEA: (no recomendado)
console.log(num / 3 % 2 === 0)
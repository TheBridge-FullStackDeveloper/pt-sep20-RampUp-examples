const person = {
  name: 'Duck',
  surname: 'McRubber',
};

// Saco el valor de una propiedad y lo asigno a una constante
const personName = person.name;
console.log(personName);

// No puedo reasignar una constante pero si su propiedad
// person = 'Pato'
person.name = 'Pato';
console.log(person.name);
console.log(personName);

// Similitud entre array y objetos para entrar a los valores
const arr = ['pepe', 'juan', 'jose'];
console.log(arr[1]);

// A los objetos puedo acceder con array y valor para poder
// mantener propiedades parecidas a los arrays
const obj = {
  0: 'pepe',
  1: 'juan',
  2: 'jose',
};
console.log(obj[1]);

// Seguimos con person
console.log(person);
console.log(person.name);
console.log(person['name']);

const dynamic = 'surname';

const hero = {
  name: 'Bruce',
  surname: 'Wayne',
};

// Acceder a un objeto se puede hacer de forma dinámica mediante
// constantes (o variables) que valgan lo mismo que una propiedad.
console.log(person[dynamic]);
console.log(hero[dynamic]);

// ////////////////////////////////////////////////
const myPerson = {
  name: 'Fran',
  surname: 'Molpe',
  age: '???',
  hungry: 1000,
  walk: function () {
    console.log('Estoy andando!');
  },
  jump: function () {
    console.log('Estoy saltando!');
  },
  eat: function () {
    console.log('Estoy comiendo!');
    this.hungry -= 500;
    console.log('Me he llenado un poco! ', this.hungry);
  },
  greetings: function () {
    return `Hola, soy ${this.name}!`;
  },
  time: function () {
    this.hungry += 10;
    console.log('Mi hambre: ', this.hungry);
  },
};

console.log(myPerson.name);
console.log(myPerson.greetings());

const dynamicHungry = 'hungry';
console.log(myPerson[dynamicHungry]);
// console.log(myPerson['hungry'])
// console.log(1000)

const dynamicRandom = 'random';
console.log(myPerson['random']);

// Valores que valen false para JS por dentro "falsy"
// 0 undefined null '' false

if (undefined) {
  console.log('ESTOY DENTRO DEL IF!!!! 🦄');
} else {
  console.log('NO HE ENTRADO AL IF, SOY EL ELSE');
}

// El argumento es lo que la función RECIBE cuando se INVOCA
const choose = (object, dynamicProperty) => {
  if (typeof object[dynamicProperty] === 'function') {
    return object[dynamicProperty]();
  } else {
    return object[dynamicProperty];
  }
};

console.log(choose(myPerson, 'hungry'));
console.log(choose(myPerson, 'greetings'));
console.log(choose(person, 'surname'));

/* 
    Operadores lógicos son operadores que permiten combinar expresiones booleanas y devolver un resultado booleano.
    Los operadores lógicos más comunes son:
    - && (AND): devuelve true si ambas expresiones son true.
    - || (OR): devuelve true si al menos una de las expresiones es true.
    - ! (NOT): invierte el valor de la expresión, si es true devuelve false y viceversa.
*/

let mayorDeEdad = false;
let suscrito = true;

console.log('operador AND:', mayorDeEdad && suscrito); // false
console.log('operador OR:', mayorDeEdad || suscrito); // true
console.log('operador NOT:', !mayorDeEdad); // true

let soloCatalogoInfantil = !mayorDeEdad; // esto confirma que si es menor de edad solo le mostrará el catálogo infantil
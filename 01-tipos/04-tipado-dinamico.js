/*
 Javascrips es tipado dinamico, es decir, no es necesario declarar el tipo de dato de una variable,
 ya que este se determina en tiempo de ejecucion. Por ejemplo:
*/

let numero = 42;
let nombre = "Juan";
let verdadero = true;
let undef;
let nulo = null;


console.log(typeof numero); // "number"
console.log(typeof nombre); // "string"
console.log(typeof verdadero); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof nulo); // "object" (esto es un error histórico en JavaScript, null debería ser de tipo "null")
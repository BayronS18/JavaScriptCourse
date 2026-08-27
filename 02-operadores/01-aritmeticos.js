/*
Los operadores aritméticos son los que nos permiten realizar operaciones matemáticas básicas como suma,
resta, multiplicación y división.
*/

let a = 5;
let b = 3;

console.log("Valor de a: " + a); // Valor de a: 5
console.log("Valor de b: " + b); // Valor de b: 2   
console.log("Suma: " + (a + b)); // Suma: 7
console.log("Resta: " + (a - b)); // Resta: 3
console.log("Multiplicación: " + (a * b)); // Multiplicación: 10
console.log("División: " + (a / b)); // División: 2.5
console.log("Módulo: " + (a % b)); // Módulo: 1 (es el residuo de la división de 5 entre 2)
console.log("Exponenciación: " + (a ** b)); // Exponenciación: 25 (potencia de 5 elevado a 2)

console.log("Incremento: " + (++a)); // Incremento: 6 (a se incrementa en 1 antes de la operación)
console.log("incremento: " + (a++)); // Incremento: 6 (a se incrementa en 1 después de la operación)
console.log("Valor de a después del incremento: " + a); // Valor de a después del incremento: 7

console.log("Decremento: " + (--b));
console.log("Decremento: " + (b--));
console.log("Valor de b después del decremento: " + b); // Valor de b después del decremento: 0


let i = 0;
let p = 0;

console.log(i++)//imprime 0 y luego incrementa i a 1
console.log(i)  // imprime 1 que es el valor actual de i

console.log(++p) //imprime 1 y luego incrementa p a 1
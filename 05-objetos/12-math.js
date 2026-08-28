/*
Math en JavaScript es un objeto integrado que contiene propiedades y métodos para realizar operaciones matemáticas básicas y complejas.
*/

console.log(
    Math.PI, // 3.14
    Math.abs(-25), // 25 (devuelve su valor absoluto(si es negativo le quita signo si es positivo lo deja igual))
    Math.round(15.4), // 15 redondea un numero 
    Math.floor(14.9), // 14 redondeara hacia abajo sin importar el decimal
    Math.ceil(14.1), // 15 redondea hacia arriba sin importar el decimal
    Math.pow(5,2), // 25 Devuelve la potencia de un numero
    Math.sqrt(9) // 3 devuelve la raiz cuadrada de un numero

); 

console.log(Math.random(1)); //me devolvera siempre un numero random

function getRandom(min,max){
    return Math.random() * (max - min) + min
}
let random = getRandom(0,100)
console.log(`el random es: ${random}`)
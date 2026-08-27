
/*
Una Funcion es un bloque de código que se puede reutilizar y ejecutar en cualquier momento.
Se puede declarar utilizando la palabra clave "function" seguida del nombre de la función y paréntesis. 
Dentro de los paréntesis se pueden incluir parámetros que permiten pasar valores a la función. 
Las funciones pueden devolver un valor utilizando la palabra clave "return".
*/

let nombre = "Bayron";

function saludar(nombre) {
    return "Hola " + nombre;
}

let resultado = saludar(nombre); // Llamando a la función y pasando el valor de la variable nombre como argumento
console.log(resultado); // Imprime "Hola Bayron" en la consola

function sumar(a, b) {
    return a + b;
}
let resultadoSuma = sumar(5, 10); // Llamando a la función y pasando los valores 5 y 10 como argumentos
console.log(resultadoSuma); // Imprime 15 en la consola

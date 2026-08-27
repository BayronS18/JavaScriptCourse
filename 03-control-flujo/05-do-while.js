/* 
Un do while es una estructura de control en programación que ejecuta un bloque de código al menos una vez antes de evaluar una condición.
En pocas palabras se ejecuta primero y despues ve la condicion
*/

let i = 0;

do {
    if(i % 2 === 0){
        console.log('estos son los numeros par: ' , i)
    }
    i++
} while (i < 10);
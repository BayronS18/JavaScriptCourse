/*
short-circuiting: Es un comportamiento de los operadores lógicos (&& y ||) en JavaScript, 
donde la evaluación de una expresión se detiene tan pronto como se determina el resultado final. 
Esto significa que si el primer operando de un operador lógico determina el resultado,
el segundo operando no se evalúa.

Falsy es un valor que se considera falso en un contexto booleano. En JavaScript, los valores falsy incluyen:
- false
- 0
- ''
- "" (cadena vacía)
- null
- undefined
- NaN
*/

let nombre = '';
let username = nombre || 'anonimo'; //devuelve el primer true, si nombre tiene valor lo devuelve, sino deja anonimo
console.log(username);

function fn1(){
    console.log('Soy funcion 1:');
    return false;
}

function fn2(){
    console.log('Soy funcion 2:')
    return true
}

// 1. Con el operador OR (||):
// Busca el PRIMER 'true'. 
// Ejecuta fn1() -> retorna false. Como aún no encuentra un true, pasa a ejecutar fn2().
// let p = fn1() || fn2();
// console.log('Soy P', p)
// Se ejecutan AMBAS funciones (fn1 y fn2). 
// 'p' guarda el valor true (el resultado de fn2).


// 2. Con el operador AND (&&):
// Busca el PRIMER 'false' para detenerse.
// Ejecuta fn1() -> retorna false. Como ya encontró un false, la condición FALLA de inmediato.
let x = fn1() && fn2();
console.log('soy x', x) 
// Solo se ejecuta fn1(). fn2() NUNCA se llega a llamar.
// 'x' guarda el valor false (el resultado de fn1).
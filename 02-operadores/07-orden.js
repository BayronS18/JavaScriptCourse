/*
El orden de operadores en JavaScript es la regla que decide qué parte de una cuenta se hace primero.
Por ejemplo, la multiplicación y la división se calculan antes que la suma y la resta, 
a menos que uses paréntesis para cambiar ese orden.

Reglas principalesParéntesis 
(): Mandan siempre. Lo que está dentro se hace primero.
Multiplicación * y división /: Van antes que sumar o restar.
Suma + y resta -: Se calculan al final.
De izquierda a derecha: Si los operadores son iguales, se resuelven en ese orden.
*/
let resultado = 8/2*(2+2);
let resultado2 = 8/(2*(2+2));
console.log(resultado, resultado2)
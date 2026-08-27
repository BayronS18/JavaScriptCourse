/*
La asignacion es un operador que permite asignar un valor a una variable. El operador de asignación más común es el signo igual (=),
que asigna el valor de la expresión de la derecha a la variable de la izquierda.
Existen otros operadores de asignación que combinan la asignación con una operación aritmética, como +=, -=, *=, /=, %= y **=.
*/

let a = 5;
a = a + 5; // a ahora es 10

a += 5; // a ahora es 15 (equivalente a: a = a + 5)
a -= 5; // a ahora es 10 (equivalente a: a = a - 5)
a *= 2; // a ahora es 20 (equivalente a: a = a * 2)
a /= 4; // a ahora es 5 (equivalente a: a = a / 4)
console.log("Valor de a: " + a); // Valor de a: 5 
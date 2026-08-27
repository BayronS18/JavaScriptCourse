/*
Operador de comparación que permiten comparar dos valores y devuelve un resultado booleano (true o false).
 Los operadores de comparación más comunes son:
 - == (igual)
 - != (distinto)
 - < (menor)
 - > (mayor)
 - <= (menor o igual)
 - >= (mayor o igual)
 */

 let a = 10;
 //operadores relacionales:
 console.log(a > 5); // true
 console.log(a < 5); // false
 console.log(a >= 10); // true
 console.log(a <= 10); // true

//operadores de igualdad:
 console.log(a == 10);  // true
 console.log(a != 10); // false

 console.log(a == "10"); // true (el operador == compara el valor, no el tipo)

 //recomendado usarlo siempre que se pueda para evitar errores de tipo:
 console.log(a === "10"); // false (el operador === compara el valor y el tipo)
 console.log(a !== "10"); // true (el operador !== compara el valor y el tipo) 
/* 
 Una constante es un tipo de variable que no puede cambiar su valor una vez que ha sido asignado. 
 Se declara utilizando la palabra clave "const".
 const no permite cambiar el valor de la variable, es decir, es inmutable
 let Utilizar let cuando se quiere cambiar el valor de la variable, es decir, es mutable.
 */

const nombre = "Hola";
nombre = "Chanchito feliz"; // Esto causaría un error porque estamos intentando cambiar el valor de una constante

console.log(nombre);
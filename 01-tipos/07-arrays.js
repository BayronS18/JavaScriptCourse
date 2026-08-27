/*
 Un array es una colección (Lista) de elementos, y cada elemento puede ser de cualquier tipo de dato.
*/

let numeros = [1, 2, 3, 4, 5]; // un array (Lista) de números
let nombres = ["Bayron", "Juan", "Pedro"]; // un array (Lista) de strings

console.log(numeros);
console.log(nombres);
console.log(numeros[0]); // Imprime el primer elemento del array
console.log(numeros[2]); // Imprime el tercer elemento del array    

nombres[2] = "Carlos"; // Modificar el tercer elemento del array
console.log(nombres); // Imprime el array nombres después de modificar el tercer elemento

console.log(nombres.length); // Imprime la longitud del array nombres
console.log(typeof nombres); // Imprime el tipo de dato del array nombres (object)

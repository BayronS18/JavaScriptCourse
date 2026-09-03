//combinando arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinado = array1.concat(array2); // [1, 2, 3, 4, 5, 6] //concatena los dos arrays y devuelve un nuevo array
console.log(`array1`, array1);
console.log(`array2`, array2);
console.log(`combinado`, combinado);

//para dividir un array en varios arrays, se puede usar el método slice
const array3 = [1, 2, 3, 4, 5, 6];
const dividido = array3.slice(0, 3);

// [1, 2, 3] //devuelve un nuevo array con los elementos desde el índice 0 hasta el índice 3 (sin incluir el índice 3)
console.log(`dividido`, dividido); 

// [3, 4, 5, 6] //devuelve un nuevo array con los elementos desde el índice 2 hasta el final del array
const dividido2 = array3.slice(2);
console.log(`dividido2`, dividido2); 

//hacer copias de arrays, se puede usar el método slice sin argumentos
const copia = array3.slice(); // [1, 2, 3, 4, 5, 6] //devuelve un nuevo array con todos los elementos del array original
console.log(`copia`, copia);
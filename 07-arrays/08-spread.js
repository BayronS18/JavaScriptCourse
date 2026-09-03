//spread sirve para combinar arrays y objetos, y para hacer copias de arrays y objetos
//combinando arrays
const array1 = [1, 2];
const array2 = [5, 6];


//copia de array1
const copia = [...array1];
console.log(`copia`, copia); // [1, 2] //devuelve un nuevo array con los elementos del array1

//copia de array1 + agregando elementos al final del array
const copia2 = [...array1, 3, 4]; // [1, 2, 3, 4] //devuelve un nuevo array con los elementos del array1 y los elementos agregados
console.log(`copia2`, copia2);

//combinando arrays
// [1, 2, 3, 4, 5, 6] devuelve un nuevo array con los elementos del array1, los elementos agregados y los elementos del array2
const combinado = [0 , ...array1, 3, 4, ...array2, 7, 8]; 
console.log(`combinado`, combinado);

const copiaCombinado = [...combinado]; // [0, 1, 2, 3, 4, 5, 6, 7, 8] devuelve un nuevo array con los elementos del combinado
console.log(`copiaCombinado`, copiaCombinado);

copiaCombinado.pop()
console.log(`copiaCombinado usando pop`, copiaCombinado); // [0, 1, 2, 3, 4, 5, 6, 7] devuelve un nuevo array con los elementos del combinado sin el último elemento

console.log(`copiaCombinado`, copiaCombinado); //sigue sin ser afectado el array combinado, ya que se hizo una copia del mismo
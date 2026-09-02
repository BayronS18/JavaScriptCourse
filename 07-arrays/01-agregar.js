//agregar elementos a un array

const letras = ['a','b'];

//de esta manera se agrega un elemento al final del array
letras.push('c','d');

//agregar 2 elementos al inicio del array
letras.unshift('y','z');

//Agregar un elemento en una posicion especifica del array
//el primer parametro es la posicion donde se va a agregar, el segundo parametro es cuantos elementos se van a eliminar, 
// y el tercer parametro es el elemento que se va a agregar

letras.splice(3, 0, 1,2); 


console.log(letras)



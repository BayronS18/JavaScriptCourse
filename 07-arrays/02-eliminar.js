//eliminar un elemento del array
const letras = ['a','b','c','d'];

//elimina el ultimo elemento del array
letras.pop(); 

//elimina el ultimo elemento del array y lo guarda en una variable
const final = letras.pop();

//elimina el primer elemento del array
letras.shift(); 

//elimina el primer elemento del array y lo guarda en una variable
const comienzo = letras.shift();

//eliminar un elemento en una posicion especifica del array
//el primer parametro es la posicion donde se va a eliminar, 
// el segundo parametro es cuantos elementos se van a eliminar,
letras.splice(3, 1);

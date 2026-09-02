//buscar elementos primitivos en un array

const letras = ['a','b', 1,'c','d', 1, 1];

//buscar un elemento en un array, retorna la posicion del elemento en el array, si no lo encuentra retorna -1
console.log(letras.indexOf('c'));

//buscar un elemento en un array a partir de una posicion especifica, 
// retorna la posicion del elemento en el array, si no lo encuentra retorna -1
console.log(letras.indexOf(1, 2));

//retorna la ultima posicion del elemento en el array, si no lo encuentra retorna -1
console.log(letras.lastIndexOf(1)); 

//antigua manera de buscar un elemento en un array es con el metodo indexOf,
//retorna true si el elemento se encuentra en el array, de lo contrario retorna false
console.log(letras.indexOf(1) !== -1); 

//mejor manera de buscar un elemento en un array es con el metodo includes, ya que es mas legible y no hay que hacer comparaciones
//retorna true si el elemento se encuentra en el array, de lo contrario retorna false.
console.log(letras.includes(1)); 
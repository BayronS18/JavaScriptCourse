//buscar referencia
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Pedro' },
    { id: 3, nombre: 'Maria' },
];

//El metodo indexOf busca un elemento en un array y devuelve el indice del primer elemento que coincida con el valor buscado.
//Si no encuentra el elemento, devuelve -1
//en este caso, como es de referencia, no encuentra el objeto, ya que no es el mismo objeto que se encuentra en el array,
//  aunque tenga los mismos valores.
const resultado = usuarios.indexOf({ id: 2, nombre: 'Pedro' });
console.log(resultado); // -1

//El metodo find busca un elemento en un array y devuelve el primer elemento que coincida con la condicion especificada
//en la funcion de callback. idealmente tiene q ser una propiedad unica, como un id, para que no se repita el resultado.
//Ya que devide devolver un solo elemento, si hay mas de uno que cumpla la condicion, devuelve el primero que encuentre.
//Predicate function: una funcion que devuelve un valor booleano, true o false, dependiendo de si el elemento cumple con
//la condicion especificada.
const resultado1 = usuarios.find(function(usuario) {
    return usuario.id === 1;
});
console.log(resultado1);

//version con arrow function
const resultado2 = usuarios.find(usuario => usuario.nombre === 'Maria');
console.log(resultado2);

//El metodo findIndex busca un elemento en un array y devuelve el indice del primer elemento que coincida con la condicion especificada
const resultado3 = usuarios.findIndex(usuario => usuario.id === 3);
console.log(resultado3);

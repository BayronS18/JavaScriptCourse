//filter sirve para filtrar elementos de un array, es decir, crear un nuevo array con los elementos
//que cumplan una condición.

const usuarios = [
    {edad: 20, nombre: 'Felipe'},
    {edad: 18, nombre: 'Carlos'},
    {edad: 23, nombre: 'Miguel'},
    {edad: 15, nombre: 'Juan'},
    {edad: 30, nombre: 'Pedro'}
];

const mayores = usuarios.filter(usuario => usuario.edad >= 18);
console.log(`Mayores de edad:`, mayores)

const menores = usuarios.filter(usuario => usuario.edad < 18);
console.log(`Mayores de edad:`, menores)
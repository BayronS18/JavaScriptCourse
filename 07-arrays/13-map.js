//map sirve para transformar un array en otro array, es decir, que a partir de un array original podemos 
//crear otro array con los elementos transformados. este recorre el array original y devuelve un nuevo array
//con los elementos transformados. ¿Es un loop? no, es un método que devuelve un nuevo array.

const usuarios = [
    {edad: 20, nombre: 'Felipe'},
    {edad: 18, nombre: 'Carlos'},
    {edad: 23, nombre: 'Miguel'},
    {edad: 15, nombre: 'Juan'},
    {edad: 30, nombre: 'Pedro'}
];

const lista = usuarios
    .filter(usuario => usuario.edad > 17)
    .map((usuario) => `<li>${usuario.nombre}</li>`);
    
const html = `<ol>${lista.join('')}</ol>`

console.log(`map: `, lista);
console.log(`html: `, html);

const mapped = usuarios.map( usuario => ({...usuario, mayor: usuario.edad > 17,}))
console.log(mapped);
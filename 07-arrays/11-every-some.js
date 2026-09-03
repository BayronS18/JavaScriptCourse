//every some es un metodo que nos permite verificar si todos los elementos de un array cumplen con una condicion
//o si al menos uno cumple con la condicion

let usuarios = [
    {id: 1, activo: false, nombre: 'Felipe'},
    {id: 2, activo: false, nombre: 'Carlos'},
    {id: 3, activo: true, nombre: 'Miguel'},
];

//every verifica si todos los elementos cumplen con la condicion, si es asi devuelve true, sino devuelve false
const todosActivos = usuarios.every(u => {
    console.log('todos activos', u.id);
    return u.activo;
})

console.log(todosActivos);

//some verifica si al menos uno de los elementos cumple con la condicion, si es asi devuelve true, sino devuelve false
const algunoActivo = usuarios.some(u => {
    console.log('Almenos uno:', u.id);
    return u.activo
})
console.log(algunoActivo);
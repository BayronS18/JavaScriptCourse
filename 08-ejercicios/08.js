//Ejercicio 8 
// Obtener los usuarios de pago, 
// Ordenar de mayor a menor edad, 
// Devolver el nombre del usuario,
// Crear una plantilla HTML,
// luego imprimarla en consola

/**
 * <ul>
 * <li>Paola</li>
 * <li>Bayron</li>
 * </ul>
 */

const usuarios = [
    {edad: 17, nombre: 'Bayron', plan: 'premium'},//
    {edad: 13, nombre: 'Miguel', plan: 'free'},
    {edad: 25, nombre: 'Paola', plan: 'gold'},
    {edad: 32, nombre: 'Felipe', plan: 'free'},
];

function crearLista(users){
    return users.filter((user) => user.plan !== 'free')
    .sort((a, b) => b.edad - a.edad)
    .map((user) => `<li>${user.nombre}</li>`)
    .join('\n');
 
}

const pagos = crearLista(usuarios);
// console.log(pagos);
console.log(`<ul>${pagos}</ul>`);











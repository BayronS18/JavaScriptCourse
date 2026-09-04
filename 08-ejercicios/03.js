//ejercicio 3 filtrar la lista para obtener únicamente a los usuarios que pagan una suscripción.

const usuarios = [
    {edad: 17, nombre: 'Bayron', plan: 'premium'},
    {edad: 13, nombre: 'Miguel', plan: 'free'},
    {edad: 32, nombre: 'Paola', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

function getPaidUsers(users){
    return users.filter(user => user.plan !== 'free')

}
console.log(getPaidUsers(usuarios))
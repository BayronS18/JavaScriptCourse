//ejercicio 5 devolver al mayor de un array

const usuarios = [
    {edad: 17, nombre: 'Bayron', plan: 'premium'},
    {edad: 13, nombre: 'Miguel', plan: 'premium'},
    {edad: 32, nombre: 'Paola', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

//con reduce

function getMayor(users){
   return users.reduce((mayor, user) => user.edad > mayor.edad ? user : mayor);
}

//con for of

// function getMayor(users){
//    let usuarioMayor = users[0];
//    for(let usuario of users){
//     usuarioMayor = usuario.edad > usuarioMayor.edad ? usuario : usuarioMayor;
//    }
//    return usuarioMayor;
// }

const mayor = getMayor(usuarios);
console.log(mayor);
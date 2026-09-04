//ejercicio 4 crear 2 funciones uno que me devuelva cuanta gente es premium y otra para saber cuantos mayores
const usuarios = [
    {edad: 17, nombre: 'Bayron', plan: 'premium'},
    {edad: 13, nombre: 'Miguel', plan: 'premium'},
    {edad: 32, nombre: 'Paola', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

//opcion reduce:

function cuantosPremium(users){
    return users.reduce((acumulador, elemento)=> {
        return elemento.plan !== 'free' ? acumulador + 1 : acumulador}, 0)
}

function cuantosMayores(users){
    return users.reduce((acumulador, elemento) => {return elemento.edad >= 18 ? acumulador + 1 : acumulador}, 0)
}

//opcion filter

// function cuantosPremium(users){
//     return users.filter(user => user.plan !== 'free').length;
// }

// function cuantosMayores(users){
//     return users.filter(user => user.edad >= 18).length;
// }

console.log(cuantosPremium(usuarios));//3
console.log(cuantosMayores(usuarios));//2
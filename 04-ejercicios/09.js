//crea un algoritmo que devuelva un array de objetos en base a pares


// let array = [{
//     id: 1,
//     nombre: 'Bayron',
// },{
//     id: 2,
//     nombre: 'Millaray',
// },{
//     id: 3,
//     nombre: 'Miguel',
// }
// ]

let pair = [
    [1,{nombre: 'Bayron'}],
    [2,{nombre: 'Millaray'}],
    [3,{nombre: 'Miguel'}]
]

function getArray(par){
    let array = [];
    for(let [id, nombre] of par){
        let objeto = nombre;
        objeto.id = id;
        console.log
        array.push(objeto);
    }
    return array;

}

let resultado = getArray(pair);

console.log(`este es el resultado:`,resultado);

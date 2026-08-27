// crea un algoritmo que tome un array de objetos y devuelva un array de pares
// let pares = [
//     [1,{id: 1 ,nombre: 'Bayron'}]
//     [2,{id: 2 ,nombre: 'Millaray'}]
//     [3,{id: 3 ,nombre: 'Miguel'}]
// ]
let array = [{
    id: 1,
    nombre: 'Bayron',
},{
    id: 2,
    nombre: 'Millaray',
},{
    id: 3,
    nombre: 'Miguel',
}
]
//utilizando push opcion recomendada

function getArrayPair(arr){
    let pair = [];
    for(let elemento of arr){
        pair.push([elemento.id, elemento])
    }
    return pair;
}



// function getArrayPair(arr){
//     let pair = [];
//     for(let idx in arr){
//         let elemento = arr[idx];
//         pair[idx] = [elemento.id, elemento]
//     }
//     return pair;
// }


let resultadoPair = getArrayPair(array);
console.log(`Aqui estan los array de pares`,resultadoPair);
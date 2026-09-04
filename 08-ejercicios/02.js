//ejercicio 2 crear una funcion que divida por el tipo de datos
// numeros, strings, objetos

const array = [
    "Hola",
    12,
    "Mundo",
    {},
    {id: 15},
    ['lala']
];

//opcion mia
// function dividirPorTipo(arr){
//     if(!Array.isArray(arr) || arr.length === 0) return [];
//     let resultado = {
//         numeros: [],
//         strings: [],
//         objetos: []
//     }
//     for( let elemento of arr){
//         if(typeof elemento === 'number'){
//             resultado.numeros.push(elemento);
//         }else if(typeof elemento === 'string'){
//             resultado.strings.push(elemento);
//         }else if(typeof elemento === 'object'){
//             resultado.objetos.push(elemento);

//         }
//     }
//     return resultado
// }

//opcion profe (echa por mi)
function dividirPorTipo(arr){
    if(!Array.isArray(arr) || arr.length === 0) return [];
    return {
        numeros: arr.filter(elemento => typeof elemento === 'number'),
        strings: arr.filter(elemento => typeof elemento === 'string'),
        objetos: arr.filter(elemento => typeof elemento === 'object')
    }
}

const nuevoArray = dividirPorTipo(array);
console.log(nuevoArray);
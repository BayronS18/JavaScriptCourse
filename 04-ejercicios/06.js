//crea un algoritmo que devuelva la cantidad de numeros positivo de un array

let array = [23, 45, -23, 2, -31, -2, -21, 39, 43, 40];

function getPositivos(arr){
    let contador = 0;
    for(let numero of arr){
        if(numero > 0){
            contador++;
        }
    }
    return contador;

}

//utilizando metodo:
// function getPositivos(arr){
//     return arr.filter(numero => numero > 0).length;
// }

let resultado = getPositivos(array);

console.log(`total numero positivos: ${resultado}`);
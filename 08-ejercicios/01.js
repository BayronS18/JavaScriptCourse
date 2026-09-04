//ejercicio 1 devolver los numeros absolutos de uuna lista:

const array = [-2, 3, 5, -15];

//opcion 1 recomendada con map y Math
function numeroAbsolutos(arr){
    return arr.map( (numero) => {return Math.abs(numero)});
    //opcion recortada:
    // return arr.map( numero => Math.abs(numero));

}
//opcion 2 sin utilizar Math

// function numeroAbsolutos(arr){
//     if(arr.length <= 0) return [];
//     let absolutos = [];
//     for(let numero of arr){
//         if(numero < 0){
//             numero *= -1;
//             absolutos.push(numero);
//         }else{
//             absolutos.push(numero);
//         }
//     }
//     return absolutos;

// }

//opcion 3 con  Math

// function numeroAbsolutos(arr){
//     if(arr.length <= 0) return [];
//     let absolutos = [];
//     for(let numero of arr){
//         absolutos.push(Math.abs(numero));
//     }
//     return absolutos;

// }

const absolutos = numeroAbsolutos(array);
console.log(absolutos)

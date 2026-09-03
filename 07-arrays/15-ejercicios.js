//Ejercicio 1 calcular el promedio
console.log(`-------------------Ejecicio 1-------------------`);

const precios = [100, 200, 300, 400, 500];

//opcion 1 con reduce:
function calcularPromedio(arr){
    if (arr.length === 0) return 0;
    //version corta:
    let suma = arr.reduce((suma, precio) => suma + precio, 0);
    //version larga:
    // let suma = arr.reduce((suma, precio) => {
    //     return suma + precio;
    // },0);
    return suma/arr.length;
}

//opcion 2 con for of:
// function calcularPromedio(arr){
//     if (arr.length === 0) return 0;
//     let suma = 0;
//     for(let precio of arr){
//         suma += precio;
//     }
//     return suma/arr.length;
// }


const promedio = calcularPromedio(precios);
console.log(`El promedio es: ${promedio}`)


//Ejercicio 2 invertir array
console.log(`-------------------Ejecicio 2-------------------`);

let numeros = [10, 20, 30, 40, 50];

function invertirArray(arr){
    let arrayInverso = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arrayInverso.push(arr[i]);
    }
    return arrayInverso;
}

let arrayInvertido = invertirArray(numeros);
console.log(`array invertido:`, arrayInvertido)


//Ejercicio 3 combinar y ordenar arrays
console.log(`-------------------Ejecicio 3-------------------`);

let array1 = [10, 5, 8];
let array2 = [2, 7, 3];

//opcion echa por mi:
function combinarArrays(arr1, arr2){
 
    const arrCombinado = arr1.concat(arr2).sort((a,b) => a - b);
    return arrCombinado;
}

//opcion echa por profe:
// function combinarArrays(arr1, arr2){
//     const combinar = [...arr1, ...arr2]
//     combinar.sort((a,b) => a - b);
//     return combinar;
    
// }

let resultadoArray = combinarArrays(array1,array2);
console.log(resultadoArray);



//Ejercicio 4 Eliminar duplicados
console.log(`-------------------Ejecicio 4-------------------`);

let duplicados = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// version mia :
function eliminarDuplicados(arr){
    let nuevoArray = [];
    for(let numero of arr){
        if(!nuevoArray.includes(numero)){
            nuevoArray.push(numero);
        }
    }
    return nuevoArray;
}

//version profe:
// function eliminarDuplicados(arr){
//     let nuevoArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!nuevoArray.includes(arr[i])){
//             nuevoArray.push(arr[i]);
//         }
//     }
//     return nuevoArray;
// }

let eliminados = eliminarDuplicados(duplicados);
console.log(eliminados);

//Ejercicio 5 reorganizar array
console.log(`-------------------Ejecicio 5-------------------`);

let reorganizar = [ 0, 1, 0, 3, 12, 0, 5];

//opcion mia 
function reorganizarArray(arr){
    if(!Array.isArray(arr) || arr.length === 0) return [];
        let sinCeros = [];
        let ceros = [];
        for(let numero of arr){
            if(numero !== 0){
                sinCeros.push(numero);
            }else{
                ceros.push(numero);
            }
        }
        return [...sinCeros, ...ceros];
}
// opcion profe 

// function reorganizarArray(arr){
//     return arr.sort((a,b) => (a === 0 ? 1 : b === 0 ? -1 : 0));
// }

let reorganizado = reorganizarArray(reorganizar);
console.log(reorganizado);

//Ejercicio 6  Aplicación para registrar boletos
console.log(`-------------------Ejecicio 6-------------------`);
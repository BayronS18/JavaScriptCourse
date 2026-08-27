//ejercicio 3
//indice validar que no sea menor a cero y que el elemento exista en ell array


function getById(arr,idx){
    if(idx < 0 || idx  >= arr.length){
        return null;
    }
    return arr[idx];
}

let array = [32, 65, 54, 70, 20];
let indice = 4;

let resultado = getById(array,indice);

if(resultado != null){
    console.log(`El elemento del indice ${indice} es : ${resultado}.`);
}else{
    console.log(`Numero de indice invalido`);
}
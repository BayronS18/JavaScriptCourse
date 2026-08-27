//crea un algoritmo que devuelva el numero menor y mayor de un array

let array = [23, 405, 64, 65, 3, -55, 3004, 22];

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for(let numero of arr){
        // if(numero < menor){
        //     menor = numero
        // }
        // if(numero > mayor){
        //     mayor = numero
        // }
        menor =  (numero < menor) ? numero : menor;
        mayor =  (numero > mayor) ? numero : mayor;
    }
    return [menor, mayor]
}

let resultado = getMenorMayor(array);
console.log(`El numero menor y mayor son: ` ,resultado);
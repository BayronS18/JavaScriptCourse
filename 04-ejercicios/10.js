//ejercicio 10 crear array de longitud N, y que sus elmentos sean 
// numeros de 1 hasta N

let longitud = 7;

function largoArray(n){
    if(n <= 0) return [];
    let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    // for(let i = 0; i < n; i++){
    //     arr[i] = i + 1;
    // }
    return arr;
}

let resultado = largoArray(longitud);

console.log(`Este es el array:`, resultado)

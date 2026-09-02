//Ejercicio 3 ver si los objetos son similare ssi tienen las mismas propiedades y valores

//opcion 1(Mejor):

function similares(obj1, obj2){
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false;
    }

    for(let llave in obj1){
        if(obj1[llave] !== obj2[llave]){
         return false;
        }
    }
    return true

}

let resultado = similares(
    {name: 'Bayron', id: 1},
    {name: 'Bayron', id: 1}
)
console.log(resultado);

//opcion 2:

function similar(obj1, obj2){
    let distintos = false;
    for(let llave in obj1){
        if(obj1[llave] !== obj2[llave]){
            distinto = true;
        }
    }
    return !distintos;

}
let resultado2 = similares(
    {name: 'Bayron', id: 1},
    {name: 'Bayron', id: 1}
)
console.log(resultado2);


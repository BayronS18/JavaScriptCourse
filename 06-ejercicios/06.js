//ejercicio 6 Crear una copia de un objeto sin utilizar "..." ni "Object.assing":

let obj1 = {
    id: 1,
    name: 'Bayron'
}

//opcion 1: con Object.Keys recomendado
function createCopyObj(obj){
    const copy = {};
    let props = Object.keys(obj);
    for(let prop of props){
        copy[prop] = obj[prop];
    }
    return copy;
}


// opcion 2 con for in:
// function createCopyObj(obj){
//     const copy = {};
//     for(let prop in obj){
//         copy[prop] = obj[prop];
//     }
//     return copy
// }




let obj2 = createCopyObj(obj1);

let obj3 = {...obj1};

console.log('obj1:',obj1);
console.log('obj2:',obj2);
console.log('obj3:',obj3);


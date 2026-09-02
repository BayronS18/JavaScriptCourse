//ejercicio 7 Tomar un objeto y agregarle una propiedad por ejemplo ID

let objeto = {name: 'Bayron'};

//opcion 1: 
// function createProp(obj){
//     if(typeof obj !== 'object' || obj === null){
//       return obj
//     }
//     let copy = {};
//     for(let prop of Object.keys(obj)){
//         copy[prop] = obj[prop];
//     }
//      copy.id = Math.random();
//     return copy;
// }

//opcion 2: 
function createProp(obj){
    if(typeof obj !== 'object' || obj === null){
      return obj
    }
    let copy = {...obj};
    copy.id = Math.random();
    
    return copy;
}

let copy = createProp(objeto);
console.log(objeto)
console.log(copy);


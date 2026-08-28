/*
En JavaScript, la clonación es el proceso de crear una copia independiente de un objeto o un array.
*/

const punto = {
    x: 10,
    y:15,
};

// Con el operador object.assign
// Object.assign(punto,{z: 20});
let referencia = Object.assign(punto,{z: 20, x: 1});
let clonacionPunto = Object.assign({},punto,{z: 20, x: 1});
// console.log(punto,clonacionPunto);
console.log(referencia);

let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto);


// Con el operador Spread (...) OPCION RECOMENDADA:
//  El 90% del tiempo (Ideal para React)
let copia3 = {...punto,email:'bayron@gmail.com'};
// copia3.email =  'bayron@gmail.com';

console.log(`Este es spread`,punto, copia3)

//Con structuredClone() (Copia profunda / Deep Copy para objetos anidados):
//Para objetos complejos con objetos o arreglos anidados dentro.
let copia4 = structuredClone(punto);
copia4.email = 'bayron@gmail.com';
console.log(`Este es structuredClone`,punto,copia4);

// con for (metodo antiguo no recomendado)
let copia5 = {};

for(let llave in punto){
    copia5[llave] = punto[llave];
}
copia5.email = 'bayron@gmail.com';
console.log(`Esto es con for`,punto,copia5)
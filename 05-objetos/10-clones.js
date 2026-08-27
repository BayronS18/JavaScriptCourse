/*
En JavaScript, la clonación es el proceso de crear una copia independiente de un objeto o un array.
*/

const punto = {
    x: 10,
    y:15,
};

// Object.assign(punto,{z: 20});
let clonacionPunto = Object.assign({},punto,{z: 20});
console.log(punto,clonacionPunto);
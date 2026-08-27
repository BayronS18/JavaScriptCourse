/*
Un "atajo constructor" (o constructor shorthand) en JavaScript es una forma simplificada de crear 
e inicializar objetos rápidamente a partir de los parámetros de una función o clase.
*/
// esto es lo mismo
// let objeto = {};
// let obj = new Objeto();

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true
 */

function User(){
    this.name = 'Bayron';
    this.email = 'bayron@gmail.com';
}
let user = new User();
console.log(user.constructor);

const s1= "1 + 1";
const s2= new String("1 + 1");
console.log(s1,s2);
console.log(eval(s1),eval(s2))
console.log(s1,`  `,s2.valueOf())
/*
Una función constructora en JavaScript es una plantilla reutilizable para crear y configurar 
múltiples objetos que comparten las mismas propiedades y métodos.

Ese bloque de código demuestra algo fundamental en JavaScript: las funciones son objetos de primera clase (First-Class Functions).
Esto significa que las funciones no son solo bloques de código para ejecutar, sino que pueden guardarse en variables,
pasarse como argumentos y ser retornadas por otras funciones.
*/

function Usuario(nombre){
    this.nombre = nombre;
}
console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Bayron');

console.log(user);

//se puede pasar una funcion  a otra como argumento
function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1)

//tambien se puede retornar dentro de otras funciones

function returned(){
    return function(){ //funcion anonima
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo()
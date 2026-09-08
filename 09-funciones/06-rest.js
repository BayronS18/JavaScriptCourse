// funcion rest es una forma de representar un número indefinido de argumentos como un array

//rest siempre debe ser el ultimo parametro
function suma(a, b , ...rest) {
    console.log(rest);
}

suma(1, 2, 3, 4, 5, 6);

//con fat arrow function

const resta = (...rest) =>{
    return rest.reduce((acc, numero) => {return acc - numero})
}

console.log(resta(1, 2, 3, 4, 5, 6));

const logMsg = (desc, ...msgs) => {
    for(let msg of msgs){
        console.log(desc,msg)
    }
}

// logMsg('Servidor:', 'Error 1', 'Peticion Aceptada', 'Socket activo');

let mensajes = ['Error 1', 'Peticion Aceptada', 'Socket activo'];
logMsg('Cliente Movil:', ...mensajes, 'Otro error');
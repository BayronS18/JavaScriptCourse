//arguments de una funcion es un objeto que contiene todos los argumentos pasados a la función.

function suma (a, b) {
    return Array.from(arguments).reduce((acumulador, numero) => acumulador + numero);
    // let total = 0;
    // for(let numero of arguments){
    //     total += numero;
    // }
    // return total;
}

// console.log(suma(1, 2)); // Imprime: 3

//NaN es un valor especial que significa "Not a Number" (No es un número).
//Se produce cuando se intenta realizar una operación matemática con un valor que no es un número, 
//como sumar un número con undefined o con una cadena de texto.

// console.log(suma(1)); // Imprime: NaN porque falta un argumento e intenta sumar un número con undefined
// console.log(suma()); // Imprime: NaN porque faltan 2 argumentos y intenta sumar undefined con undefined

console.log(suma(1, 2, 3, 4, 5, 6)); // Imprime: 3 porque la función solo toma los dos primeros argumentos y los demas los ignora
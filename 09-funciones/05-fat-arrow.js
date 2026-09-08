//fat arrow function son una sintaxis más corta para escribir funciones en JavaScript+


//fat arrow function no tienen la variable arguments
//tampoco cuentan con super ni this
const suma = (a, b) => {
    return Array.from(arguments).reduce((acumulador, numero) => acumulador + numero);
    // let total = 0;
    // for(let numero of arguments){
    //     total += numero;
    // }
    // return total;
}

suma(1, 2, 3, 4, 5, 6);
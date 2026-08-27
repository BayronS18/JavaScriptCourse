/*
 Los argumentos son valores que se pasan a una función cuando se llama. 
 Estos valores pueden ser de cualquier tipo de dato, como números, cadenas de texto, objetos, etc. 
 Los argumentos se definen en la declaración de la función y se utilizan dentro de la función para realizar
 operaciones o cálculos.
*/
/*
 Los Parametros son variables que se definen en la declaración de la función y se utilizan
 para recibir los valores de los argumentos cuando se llama a la función. Los parámetros actúan
 como marcadores de posición para los valores que se pasarán a la función.
*/
function suma(a,b){
    return a + b;
}

let resultadoSuma = suma(5,10);
console.log(resultadoSuma); // Imprime 15

let iva = 0.19;
let precioCalcular = 1000;

function calcularIva(precio, porcentajeIva){
    return{
        Total: precio + precio * porcentajeIva
    }
}

let totalConIva = calcularIva(precioCalcular, iva);
console.log(totalConIva); 

console.log(typeof calcularIva); // Imprime "function"
//Ejercicio 4

function suma(fn, ...rest) {
    const total = rest.reduce((acc, numero) => acc + numero, 0);
    fn(total)
}

suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4);
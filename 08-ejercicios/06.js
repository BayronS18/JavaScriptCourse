//ejercicio 6 divide por tipos utilizando reduce
// numeros  strings objetos
const array = [
    "Hola",
    12,
    true,
    {},
    "Mundo",
    {id: 15},
    ['lala']
];


function dividePorTipo(arr){
    return arr.reduce((acumulador, elemento) =>{
        let tipoDato = typeof elemento;
        acumulador[tipoDato] = acumulador[tipoDato] ? acumulador[tipoDato] : [];
        acumulador[tipoDato].push(elemento);
        return acumulador;
    },{})
}

let arr = dividePorTipo(array);
console.log(arr);


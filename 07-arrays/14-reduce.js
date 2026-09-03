//reduce es un metodo que nos permite reducir un array a un solo valor, es decir, podemos sumar todos los elementos de un array,
//multiplicarlos, etc.

const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acumulador,elemento)=> {
    return acumulador + elemento;

}, 0); //el acumulador tendra valor inicial de 0 <--

console.log(`suma`, suma)

//para planar este array y quede [1,2,3,4,5]
const anidado = [[1,2], 3, [4,5]]

const aplanado = anidado
    .reduce((acumulador, elemento) => 
    acumulador.concat(elemento)
,[])

console.log(`Aplanado: `,aplanado)


//para cuando trabajajemos con un array demasiadon pero demasiado grande:

const usuarios = [
    {edad: 20, nombre: 'Felipe'},
    {edad: 18, nombre: 'Carlos'},
    {edad: 23, nombre: 'Miguel'},
    {edad: 15, nombre: 'Juan'},
    {edad: 30, nombre: 'Pedro'}
];

const indexado = usuarios.reduce((acumulador, elemento) => ({
    ...acumulador,
    [elemento.nombre]: elemento,
}),{});

console.log(indexado);
// //ejercicio 7 esta funcion ya existe en Object.groupBy

const usuarios = [
    {edad: 17, nombre: 'Bayron', plan: 'premium'},//
    {edad: 13, nombre: 'Miguel', plan: 'free'},
    {edad: 25, nombre: 'Paola', plan: 'gold'},
    {edad: 32, nombre: 'Felipe', plan: 'free'},
];

const agruparPor = 'plan';

function groupBy(arr, agrupar){
    return arr.reduce((acumulador, usuario) => {
        //la llave almancenara el valor de plan(premium, free etc)
        let llave = usuario[agrupar];
        //verificamos si el contenedor existe (premium,etc, si existe dejalo como esta, sino creame un contenedor vacio con el nombre de la llave
        acumulador[llave] = acumulador[llave] ? acumulador[llave] : [];
        //insertamos en el contenedor el objeto completo (usuario);
        acumulador[llave].push(usuario);
        //retornamos el acumulador para que vuelva a repetir su ciclo con  el siguiente objeto
        return acumulador;


    }, {});
}

const agrupados = groupBy(usuarios, agruparPor);

console.log({agrupados});



//ejercicio 2
const productos = [
  { nombre: 'Teclado Mecánico', precio: 80, categoria: 'perifericos' },
  { nombre: 'Monitor 4K', precio: 350, categoria: 'pantallas' },
  { nombre: 'Mouse Gamer', precio: 50, categoria: 'perifericos' },
  { nombre: 'Laptop I7', precio: 1200, categoria: 'computadores' },
  { nombre: 'Monitor Portable', precio: 180, categoria: 'pantallas' },
];

const agruparPor2 = 'categoria';


function agruparProductos (products, grupo){
    return products.reduce((acumulador, producto) => {
        let llave = producto[grupo];
        acumulador[llave] = acumulador[llave] ? acumulador[llave] : [];
        acumulador[llave].push(producto);
        return acumulador;
    }, {})

}

let agrupados2 = agruparProductos(productos, agruparPor2);
console.log({agrupados2});
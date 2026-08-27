//crea un algoritmo que devielve el precio del producto + impuesto

let precioProducto = 20000;
let ivaProducto = 0.19; //

function calcularPrecioIva(precio, iva){
    let total = 0;
    total = precio + precio * iva;
    return total;
}
//Cómo se vería esto con una Función Flecha (Arrow Function)

// const calcularPrecioIva = (precio, iva) => precio + (precio * iva);

let totalConIva = calcularPrecioIva(precioProducto, ivaProducto);


console.log(`${totalConIva}`);

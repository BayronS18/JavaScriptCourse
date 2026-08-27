/*
este codigo nos sirve para extender objetos y para poder extender funciones
El objetivo de este archivo es mostrarte dos cosas muy importantes en JavaScript: cómo cambiar el contexto (this) 
de una función usando .call(), y cómo JavaScript crea las funciones por dentro (su constructor interno).
*/

//por defento la funcion constructora utiliza this para crear un objeto
function Punto(x,y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...')}
}


let punto = {z:7};
Punto.call(punto,1,2); // se dividen por coma es lo mimo que apply
// Punto.apply(punto,[1,2]); // se dividen por [] es lo mismo que call
console.log(punto);

//tratar de nunca utilizar esto, solo lo muestra por si en un futuro encuentras un codigo asi
//ya sabes como funciona

// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() {console.log('Dibujando...');}
// `);

// const p = new Point(1,2);
// console.log(p);
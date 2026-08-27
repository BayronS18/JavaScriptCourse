/*
===================================================================
1. TIPOS PRIMITIVOS (Paso por Valor)
   Tipos: number, string, boolean, undefined, null, symbol, bigint.
===================================================================
*/

let a = 1; // 1. Se reserva espacio en memoria para 'a' y se le asigna el número 1.
let b = a; // 2. Se crea 'b' y se halla una FOTOCOPIA DEL VALOR (el número 1).
           //    'a' y 'b' están en casilleros completamente ajenos e independientes.

b++;       // 3. Incrementamos 'b' en 1. 'b' pasa a ser 2.
           //    'a' no se entera de este cambio porque vive en su propio casillero.

console.log(a, b); // Imprime: 1 2


/*
===================================================================
2. TIPOS DE REFERENCIA (Paso por Referencia)
   Tipos: Objetos {}, Arrays [], Funciones.
===================================================================
*/

// 1. Se crea el objeto en una ubicación de memoria (ej. 'Dirección #001').
//    La variable 'c' NO guarda los datos, guarda la dirección '#001'.
let c = { id: 1, nombre: 'bayron' };

// 2. Se copia la variable 'c' en 'd'.
//    NO se fotocopia el objeto, se fotocopia LA DIRECCIÓN ('#001').
let d = c; 

// 3. 'd' usa su dirección ('#001') para ir al objeto y le añade la propiedad 'apellido'.
d.apellido = 'saavedra'; 

// 4. Como 'c' también apunta a la dirección '#001', al leer 'c' vemos la modificación.
console.log(c, d); 
// Ambos imprimen: { id: 1, nombre: 'bayron', apellido: 'saavedra' }


/*
===================================================================
3. PASO DE PARÁMETROS EN FUNCIONES: PRIMITIVOS (Por Valor)
===================================================================
*/

let f = 1; // Se crea 'f' con el valor 1.

function suma(n) {
    // Al llamar suma(f), el parámetro 'n' recibe una FOTOCOPIA de 'f'.
    // 'n' es una variable local independiente que nace dentro de la función.
    n++; // Solo modifica 'n' (la copia).
}

suma(f);
console.log(f); // Imprime: 1 ('f' original nunca cambió)


/*
===================================================================
4. PASO DE PARÁMETROS EN FUNCIONES: OBJETOS (Por Referencia)
===================================================================
*/

let g = { prop: 1 }; // 'g' guarda la dirección de memoria (ej. 'Dirección #002').

function suma1(n) {
    // Al llamar suma1(g), 'n' recibe una copia DE LA DIRECCIÓN ('#002').
    // 'n' y 'g' ahora apuntan exactamente al mismo objeto en memoria.
    n.prop++; // Entra al objeto mediante la dirección y modifica la propiedad 'prop'.
}

suma1(g);
console.log(g); // Imprime: { prop: 2 } (el objeto original SÍ cambió)

/**
 * ¿Cómo "romper" la referencia si necesitas clonar un objeto?
 * A veces querrás copiar un objeto o arreglo sin que modifique al original. 
 * Hay dos formas modernas de hacer una copia superficial (shallow copy):
 */


// Con el operador Spread (...):

let h = { id: 1, nombre: 'bayron' };
let i = { ...h }; // Crea un objeto NUEVO con los mismos datos
i.apellido = 'saavedra'; // Solo modifica 'i'
console.log(h,i);


//Con structuredClone() (Copia profunda / Deep Copy para objetos anidados):

let j = structuredClone(h);
j.email = 'bayron@gmail.com';
console.log(h,j);
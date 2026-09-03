//join es un metodo que nos permite unir los elementos de un array en un string, podemos definir el separador 
// que queremos usar para unir los elementos, si no definimos un separador, por defecto se usara una coma

//creamos un array de strings
const array1 = ['Nicolas', 'Juan', 'Pedro', 'Maria'];

//para unirlos con un espacio, el separador es opcional, si no lo definimos, por defecto se usara una coma
const mensaje = array1.join(' '); // 'Nicolas Juan Pedro Maria' devuelve un string con los elementos del array unidos por un espacio
console.log(`mensaje`, mensaje);

//para separarlos utilizando split, el separador es obligatorio, si no lo definimos, por defecto se usara una coma
const saludo = 'Hola mundo! desde Chile';
// ['Hola', 'mundo!', 'desde', 'Chile'] devuelve un array con los elementos del string separados por un espacio
const dividido = saludo.split(' '); 
console.log(`dividido`, dividido);

//lo volvemos a juntar con join, pero esta vez usando un guion como separador
//'Hola-mundo!-desde-Chile' devuelve un string con los elementos del array unidos por un guion
console.log(`dividido.join('-')`, dividido.join('-')); 
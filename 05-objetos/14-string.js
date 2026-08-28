/*
Un string en JavaScript es un texto. Es una secuencia de caracteres utilizada 
para representar y manipular datos de texto.
*/



const saludo = "Hola Mundo!";
//              012345

const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo. length) ; //11 devuelve el largo del string
console.log(saludo.indexOf("und")); //devuelve el indice de lo que busques si no exite devuelve -1
console.log(saludo.includes("und")); //devuelve true o false para saber si existe o no

let saludo2 = saludo.replace("Mundo", "Planeta"); //si queremos capturar lo de remplazo
console.log(saludo.replace("Mundo", "Planeta")); //remplaza lo seleccionado solo en el console log, no modifica el original
console.log(saludo2, saludo);
console.log(saludo.toLocaleLowerCase()); //todo a minuscula
console.log(saludo.toLocaleUpperCase()); //todo a mayuscula
console.log(saludo.substring(0, 4)); //Devuelve las palabras de un indice minimo a maximo
console.log(saludo.substr(2, 4)); //para trabajar con la longitud que nosotros queremos ESTA DESCONTINUADO NO USAR
const espacios = '  Hola    Mundo!  ';
console.log(espacios.trim()) //quita espacio izquierda y derecha
console.log(espacios.trimStart()) //quita espacio del inicio
console.log(espacios.trimEnd()) //quita espacio del fin

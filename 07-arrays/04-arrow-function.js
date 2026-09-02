//arrow function es una forma mas corta de escribir funciones anonimas, es decir, funciones que no tienen nombre.
//Se utilizan mucho en los metodos de los arrays, como map, filter y reduce.

//la sintaxis de una arrow function es la siguiente: 

//es mejor utilizar la explicita cuando se tiene mas de una linea de codigo, ya que es mas legible y facil de entender.
const hola = (mensaje) => {
    return 'Hola mundo explicito';

}
//return es opcional si la funcion tiene una sola linea de codigo, en ese caso se puede escribir asi:
//return implicito es mejor utilizarlo cuando se tiene una sola linea de codigo, ya que es mas legible y facil de entender.
//se puede omitir los parentesis si la funcion tiene un solo parametro, en ese caso se puede escribir asi:
const hola2 = mensaje => mensaje + 'Hola mundo implicito';

//ejemplo con 2 parametros,}+
const hola3 = (mensaje1, mensaje2) => mensaje1 + ' ' + mensaje2 + 'Hola mundo implicito';


const resultado = hola();
const resultado2 = hola2('Chanchito feliz' , 'Chanchito triste');
const resultado3 = hola3('Chanchito feliz', 'Chanchito triste');
console.log(resultado);
console.log(resultado2);
console.log(resultado3);
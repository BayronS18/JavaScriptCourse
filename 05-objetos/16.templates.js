/*
Un template string (o plantilla de cadena) es una forma moderna de crear textos en JavaScript que permite interpolar variables y crear textos multilínea de forma sencilla.
*/

const saludo = "Hola \\mundo!\n Bienvenidos a\t la \"ultimate JavaScripts\" :)"
// console.log(saludo)

const nombre = 'Bayron';
const apellido = 'Saavedra';
const nombreCompleto = nombre + ' ' +apellido;
const plantilla = `Hola mundo!
Bienvenidos a "Ultimate Javascripts" :)

Cariños ${nombre} ${apellido}  $.
`
function plantilla2(nombre,apellido){
 return `Hola mundo!
Bienvenidos a "Ultimate Javascripts" :)

Cariños ${nombre} ${apellido}  $.
`
}


console.log(plantilla); //mejor usar este
console.log(`funcion`,plantilla2(nombre,apellido)); //mejor usar este
console.log(nombreCompleto);
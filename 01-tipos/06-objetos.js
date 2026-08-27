/*
 Un objeto es una colección de propiedades, y una propiedad 
 es una asociación entre un nombre (o clave) y un valor.
 Un objeto se define con llaves {} y dentro de ellas 
 se definen las propiedades con la sintaxis clave: valor.
*/

const persona = {
    nombre: "Bayron",
    edad: 30,
    ciudad: "Santiago de Chile "
};

console.log(persona.nombre); // Acceder a la propiedad nombre
console.log(persona["nombre"]); // Acceder a la propiedad nombre usando notación de corchetes   
console.log(persona.edad); // Acceder a la propiedad edad
console.log(persona.ciudad); // Acceder a la propiedad ciudad
console.log(persona); // Imprimir todo el objeto persona

persona.edad = 31; // Modificar la propiedad edad
console.log(persona.edad); // Imprimir la propiedad edad modificada

delete persona.ciudad; // Eliminar la propiedad ciudad
console.log(persona); // Imprimir todo el objeto persona después de eliminar la propiedad ciudad
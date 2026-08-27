/*
En JavaScript, un objeto dinámico es un objeto cuya estructura se puede modificar en tiempo de ejecución.
A diferencia de otros lenguajes rígidos, en JavaScript puedes hacer lo siguiente de forma libre
-Añadir propiedades nuevas en cualquier momento.
-Modificar el valor o tipo de las propiedades existentes.
-Eliminar propiedades utilizando la palabra clave delete.
***no se puede cambiar el valor pero si sus propiedades***
*/

const user = {
    id: 1,
    email: 'bayron@gmail.com',
};

user.name = 'Bayron';
user.guardar= function (){
    console.log(`Guardando ${user.name}`)
};

user.guardar();

delete user.email;
delete user.guardar;
// console.log(user);

//no permite cambiarlo con freeze
// const user2 = Object.freeze({id: 1});
//Utilizar seal para poder cambiarle el valor a la propiedad, pero no permite agregar ni quitar
const user2 = Object.seal({id: 1});
user2.name = 'Miguel';
user2.id = 2;
delete user2.id
console.log(user2);
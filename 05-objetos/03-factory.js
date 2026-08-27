/*
Una factory function (función fábrica) es una función normal que crea y retorna un nuevo 
objeto sin necesidad de usar la palabra clave new ni clases.
*/

function crearUser(name, email){
    return{
    email,
    name,
    activo: true,
    recuperarClave: function () {
        console.log(`recuperando Clave...`);
    }, //Funcion anonima programacion orientada a objetos
    };
}

let user1 = crearUser('Bayron', 'bayron@gmail.com');
let user2 = crearUser('Miguel', 'miguel@gmail.com');
console.log(user1);
console.log(user2);
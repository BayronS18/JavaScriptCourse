/*
Un objeto en JavaScript es una colección de datos agrupados en pares 
de clave y valor que representan una entidad del mundo real.
*/
let user ={
    id: 1,
    email: 'bayron@hotmail.com',
    name: 'Bayron',
    direccion: {
        calle: 'los sauces',
        numero: 23,
    },
    activo: true,
    recuperarClave: function () {
        console.log(`recuperando Clave...`);
    }, //Funcion anonima proramaion orientada a objetos
};
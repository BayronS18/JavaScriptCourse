//ejercicio 2

const obj = {
    nombre: 'Bayron',
};

//opcion 1: 

// function extender(usuario) {
//     usuario.login = () => {
//         console.log(`Logeando usuario ${usuario.nombre}`);
//     }
//     usuario.logout= () => {
//         console.log(`Cerrando sesion usuario ${usuario.nombre}`);
//     }
//     return usuario;
// }

// opcion 2
function extender(usuario) {
   const metodos = {
     login(){
        console.log(`Logeando usuario ${usuario.nombre}`);
     },
     logout(){
        console.log(`Cerrando sesion usuario ${usuario.nombre}`);
     },
   };
//    return Object.assign(usuario, metodos);
   return {...usuario, ...metodos}
}


const usuario = extender(obj);

console.log(usuario);

usuario.login();
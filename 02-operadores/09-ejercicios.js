//Ejercicio 1:
console.log('-----------------------Ejercicio 1-----------------------')
let precioTiendaA = 150;
let precioTiendaB = 130

let resultado1 = precioTiendaA > precioTiendaB;
console.log(resultado1);
console.log(precioTiendaA > precioTiendaB)

let resultado2 = precioTiendaA == precioTiendaB;
console.log(resultado2);
console.log(precioTiendaA == precioTiendaB);

//Ejercicio 2:
console.log('-----------------------Ejercicio 2-----------------------')

let rolUser1 = 'moderador';
let rolUser2 = 'usuario';
let rolUser3 = 'propietario';


let accesoUser1 = rolUser1 === 'propietario' || rolUser1 === 'moderador';
console.log('Usuario 1: ',accesoUser1);
console.log(rolUser1 === 'moderador' || rolUser1 === 'propietario' ? 'Acceso permitido' : 'Acceso denegado');

let accesoUser2 = rolUser2 === 'propietario' || rolUser2 === 'moderador';
console.log('Usuario 2: ',accesoUser2);
console.log(rolUser2 === 'moderador' || rolUser2 === 'propietario' ? 'Acceso permitido' : 'Acceso denegado');

let accesoUser3 = rolUser3 === 'propietario' || rolUser3 === 'moderador';
console.log('Usuario 3: ',accesoUser3);
console.log(rolUser3 === 'moderador' || rolUser3 === 'propietario' ? 'Acceso permitido' : 'Acceso denegado');


//Ejercicio 3:
console.log('-----------------------Ejercicio 3-----------------------')

let planUsuario1 = 'free';


let tienePlanpago = planUsuario1 !== 'free';
console.log(tienePlanpago);

let tienePlanGratuito =  planUsuario1 === 'free';
console.log(tienePlanGratuito);


//Ejercicio 4:
console.log('-----------------------Ejercicio 4-----------------------')

let largo = 4;
let ancho = 3.8;

let metrosCuadrados = largo * ancho

let evaluacion1 = metrosCuadrados < 15;

let evaluacion2 = metrosCuadrados >= 15 && metrosCuadrados < 25;

let evaluacion3 = metrosCuadrados >= 25 && metrosCuadrados <= 30;

console.log('la dimencion es de: ' + metrosCuadrados + 'Metros cuadrados');


console.log('es adecuado para 1 tonelada: ' + evaluacion1)
console.log('es adecuado para 1.5 tonelada: ' + evaluacion2)
console.log('es adecuado para 2.0 tonelada: ' + evaluacion3)

//Ejercicio 5:
console.log('-----------------------Ejercicio 5-----------------------')

// los paquetes pueden ser "no registrado","free","Nacional","LATAM", "EUR", "AllAccess"
let paqueteUsuario = 'LATAM';


let contenidoLibre =  true;
let contenidoGratis =  paqueteUsuario !== 'no registrado';
let contenidoEuropa =  paqueteUsuario === 'EUR'|| paqueteUsuario === 'AllAccess';
let contenidoNacional =  paqueteUsuario === 'Nacional'|| paqueteUsuario === 'LATAM' ||paqueteUsuario === 'AllAccess';
let contenidoLatam =  paqueteUsuario === 'LATAM' || paqueteUsuario === 'AllAccess';

console.log('Paquete del usuario: '+ paqueteUsuario)

console.log('Puede ver el contenido Libre: '+ contenidoLibre)
console.log('Puede ver el contenido Gratis: '+ contenidoGratis)
console.log('Puede ver el contenido Europa: '+ contenidoEuropa)
console.log('Puede ver el contenido Nacional: '+ contenidoNacional)
console.log('Puede ver el contenido Latam: '+ contenidoLatam)


//Ejercicio 6:
console.log('-----------------------Ejercicio 6-----------------------')

let estaEncendido =  true;
let tieneContenedor = true;


let puedeEncender = estaEncendido === true && tieneContenedor === true;

console.log('¿La cafetera puede encenderse? :' + puedeEncender);
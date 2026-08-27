/*
Ultimate JavaScript – Ejercicios de Programación – Sección: Tipos básicos.
Ejercicio 1: Datos de identificación
*/

let nombre = "Bayron";
let apellido = "Saavedra";
let nacimiento = "18 Septiembre 1999";
let direccion = "Calle Falsa 123";
let edad = 26;
const paisNacimiento = "Chile";
const suscripcionActiva = true;

console.log("Carta de identificación:");
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Fecha de Nacimiento:", nacimiento);
console.log("Dirección:", direccion);
console.log("Edad:", edad);
console.log("País de Nacimiento:", paisNacimiento);
console.log("Suscripción Activa:", suscripcionActiva);
console.log("-------------------------------------");

/*
Ejercicio 2: Datos de un jugador
*/

let pasesJugador = null;
console.log("Pases del jugador:", pasesJugador);

pasesJugador = 18;
console.log("Pases del jugador:", pasesJugador);

paseJugardor = "87%";
console.log("efectividad de pases del jugador:", paseJugardor);

/*
ejercicio 3: Crear Listas
*/

let listaDeCompras = ["Leche", "Pan", "Huevos", "Frutas", "Verduras"];
let listaDePagos= ["Agua", "luz", "Internet"];
let listaDePendientes = ["Regar plantas", "hacer limpieza"];7


console.log("Lista de Compras:", listaDeCompras);
console.log("Lista de Pagos:", listaDePagos);
console.log("Lista de Pendientes:", listaDePendientes);


/*
Ejercicio 4 Lista de Stock con valores nulos
*/

let listaStock = ["Leche", "Pan", null, "Aceite", null];

console.log(listaStock);


/*
Ejercicio 5 crear objeto de usuario 
*/

let usuario = {
    nombre: "Bayron",
    apellido: "Saavedra",
    fechaNacimiento: "18 Septiembre 1999",
    direccion: "Calle Falsa 123",
    edad: 26,
    paisNacimiento: "Chile",
    suscripcionActiva: true
};

console.log(usuario)
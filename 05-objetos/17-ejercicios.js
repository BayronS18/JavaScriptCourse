/*
Ultimate JavaScript – Ejercicios de Programación – Sección: objetos.
*/

//Ejercicio 1: Usuarios.
console.log(`----------------- Ejercicio 1 -----------------`);

function User(nombre, apellido, fechaNacimiento, direccion, edad, pais, suscripcion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.edad = edad;
    this.pais = pais;
    this.suscripcion = suscripcion;
}

let user1 = new User(
    'Bayron',
    'Saavedra',
    '10 de abril de 1992',
    'Av. Siempre Viva 742',
    26,
    'Chile',
    true,
);
let user2 = new User(
    'Chanchito',
    'Triste',
    '10 de abril de 1992',
    'Av. Siempre Viva 742',
    31,
    'Peru',
    false,
);
let user3 = new User(
    'Chris',
    'Feliz',
    '10 de abril de 1992',
    'Av. Siempre Viva 742',
    31,
    'Argentina',
    true,
);
console.log(user1);
console.log(user2);
console.log(user3);

//Ejercicio 2: editar propiedades o elimina Usuarios.
console.log(`----------------- Ejercicio 2 -----------------`);

function User(nombre, apellido, fechaNacimiento, direccion, edad, pais, suscripcion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.edad = edad;
    this.pais = pais;
    this.suscripcion = suscripcion;
}

let user = new User(
    'Bayron',
    'Saavedra',
    '10 de abril de 1992',
    'Av. Siempre Viva 742',
    26,
    'Chile',
    true,
);



if ('suscripcion' in user) {
    user.suscripcion = !user.suscripcion

}
if ('direccion' in user) {
    delete user.direccion;
}
console.log(user);

//Ejercicio 3: App para vender boletos
console.log(`----------------- Ejercicio 3 -----------------`);


// function Boletos(nombre,duracion,boletosDisponible){
//     this.nombreEvento = nombre;
//     this.duracionEvento = duracion;
//     this.boletosDisponible = boletosDisponible;
//     this.stockMaximo = boletosDisponible;

//     this.mostrarProgramacion = function(){
//         console.log(`-----------------Información------------------`);
//         console.log(`Evento: ${this.nombreEvento}`);
//         console.log(`Duración: ${this.duracionEvento} horas`);
//         console.log(`Boletos Disponible: ${this.boletosDisponible} entradas`);
//         console.log(`-----------------------------------------------`);
//     };

//     this.comprar = function(cantidad){
//         if(cantidad <= 0 ) return console.log('Elija una cantidad valida');
//         if(cantidad > this.boletosDisponible) return console.log(`lo siento, solo quedan ${this.boletosDisponible}`);
//         this.boletosDisponible -= cantidad;
//         console.log(`Boletos comprado con exito, stock actual:${this.boletosDisponible}`);

//     };
//     this.cancelar= function(cantidad){
//         if(cantidad <= 0 ) return console.log('Elija una cantidad valida');
//         if((this.boletosDisponible + cantidad) > this.stockMaximo) return console.log('estas vendiendo mas que el stock principal');
//         this.boletosDisponible += cantidad;
//         console.log(`Boletos cancelado con exito, ahora hay ${this.boletosDisponible}`);
//     };
// }

// let concierto = new Boletos('Demolicion de autos', 2, 50);
// concierto.mostrarProgramacion();
// concierto.comprar(3);
// concierto.mostrarProgramacion();
// concierto.comprar(6);
// concierto.mostrarProgramacion();
// concierto.cancelar(2);
// concierto.mostrarProgramacion();

//Ejercicio 4: App para vender boletos
console.log(`----------------- Ejercicio 4 -----------------`);

function Boletos(nombre, duracion, boletosDisponibles) {
    this.nombreEvento = nombre;
    this.duracionEvento = duracion;
    let boletosDisponible = boletosDisponibles;
    let stockMaximo = boletosDisponible;

    this.mostrarProgramacion = function () {
        console.log(`-----------------Información------------------`);
        console.log(`Evento: ${this.nombreEvento}`);
        console.log(`Duración: ${this.duracionEvento} horas`);
        console.log(`Boletos Disponible: ${boletosDisponible} entradas`);
        console.log(`-----------------------------------------------`);
    };

    this.comprar = function (cantidad) {
        if (cantidad <= 0) return console.log('Elija una cantidad valida');
        if (cantidad > boletosDisponible) return console.log(`lo siento, solo quedan ${boletosDisponible}`);
        boletosDisponible -= cantidad;
        console.log(`Boletos comprado con exito, stock actual:${boletosDisponible}`);

    };
    this.cancelar = function (cantidad) {
        if (cantidad <= 0) return console.log('Elija una cantidad valida');
        if ((boletosDisponible + cantidad) > stockMaximo) return console.log('estas vendiendo mas que el stock principal');
        boletosDisponible += cantidad;
        console.log(`Boletos cancelado con exito, ahora hay ${boletosDisponible}`);
    };
}

let concierto = new Boletos('Demolicion de autos', 2, 50);
concierto.mostrarProgramacion();
concierto.comprar(3);
concierto.mostrarProgramacion();
concierto.boletosDisponible = 100;
concierto.mostrarProgramacion();
concierto.cancelar(1);
concierto.mostrarProgramacion();

//Ejercicio 5: estandarizar biblioteca
console.log(`----------------- Ejercicio 5 -----------------`);

// Lista de libros original (con datos incompletos)
const listaLibros = [
  { titulo: 'Harry Potter', autor: 'Bayron', categoria: 'Historia' },
  { titulo: 'Señor de los Anillos', autor: 'Millaray', anoPublicacion: 2024, numeroPagina: 600 },
  { titulo: 'Los Dragones', categoria: 'Fantasía', numeroPagina: 450 }
];

function estandarizarBiblioteca(libros){
    let moldeLibro = ['titulo','autor', 'categoria', 'anoPublicacion', 'numeroPagina'];
    for(const libro of libros){
        for(const prop of moldeLibro){
            if(!(prop in libro)){
                libro[prop] = null;
            }
        }

    }
    
}
estandarizarBiblioteca(listaLibros);
console.log(listaLibros)

// const listaProductos = [
//   { nombre: 'Teclado Mecánico', precio: 45, categoria: 'Periféricos' },
//   { nombre: 'Monitor 24"', marca: 'LG', stock: 12 },
//   { nombre: 'Mouse Pad', precio: 15, marca: 'Razer', categoria: 'Accesorios', stock: 50 }
// ];

// function estadarizarProductos(productos){
//     let moldeProducto = ['nombre', 'precio', 'categoria','marca','stock'];
//     for(const producto of productos){
//         for(const prop of moldeProducto){
//         if(!(prop in producto)){
//             producto[prop] = null;
//         }
//         }
//     }
// }

// estadarizarProductos(listaProductos)
// console.log(listaProductos)



//Ejercicio 6: Juego de cartas
console.log(`----------------- Ejercicio 6 -----------------`);


function Carta(nombre, puntosVida, tipo, ataques, debilidades){
    let nombreCarta = nombre;
    this.puntosVidaCarta = puntosVida;
    this.tipoCarta = tipo;
    this.ataquesCarta = ataques;
    let energiaCarta = 0;
    this.debilidadesCarta = debilidades;

    this.anadirEnergia = function(cantidad){
        energiaCarta += cantidad;
        console.log(`${nombreCarta} ha ganado ${cantidad} de energía,  Energía actual: ${energiaCarta}`);
    };
    this.recibirDano = function(puntosAtaque){
        if (this.puntosVidaCarta <= 0) {
            console.log("Esta carta ha sido derrotada, no tiene puntos de vida, el ataque no se realizó.");
            return
        }
        this.puntosVidaCarta -= puntosAtaque;
        console.log(`${nombreCarta} ha recibido ${puntosAtaque} de daño, vida restante: ${this.puntosVidaCarta}`)
        if (this.puntosVidaCarta <= 0) {
        console.log(`${nombreCarta} ha sido derrotado.`);
        }

    };
    this.atacar = function(objetivo, indiceAtaque){
        let ataqueSeleccionado = this.ataquesCarta[indiceAtaque];
        if(indiceAtaque < 0 || indiceAtaque >= this.ataquesCarta.length){
            console.log(`Lo siento, el ataque no es valido`);
        }
        if(energiaCarta >= ataqueSeleccionado.energia){
            console.log(`${nombreCarta} ataca con ${ataqueSeleccionado.nombre} causando ${ataqueSeleccionado.dano} de daño...`);
            objetivo.recibirDano(ataqueSeleccionado.dano);
            energiaCarta -= ataqueSeleccionado.energia
        }else{
            console.log(` ${nombreCarta} no  tiene suficiente energia...`);
        }
    };

}


let carta1 = new Carta('Dragón de Fuego', 100, 'Fuego', [
    { nombre: 'Llamarada', dano: 30, energia: 2 },
    { nombre: 'Golpe Ígneo', dano: 50, energia: 3 },
], 'Agua');
let carta2 = new Carta('Serpiente Acuática', 120, 'Agua', [
    { nombre: 'Tsunami', dano: 40, energia: 2 },
],'Eléctrico');

carta1.anadirEnergia(2);
carta1.atacar(carta2, 0);
carta2.anadirEnergia(3);
carta2.atacar(carta1, 0);
carta1.atacar(carta2, 1);
carta1.anadirEnergia(3);
carta1.atacar(carta2, 1)
carta1.anadirEnergia(3);
carta1.atacar(carta2, 1);
carta1.anadirEnergia(2);
carta1.atacar(carta2, 0);
//Ejercicio 1 Tamaño maximo de carga

console.log('-----------------Ejercicio 1-----------------')

let tamanoImagen = 5.1;
let tamanoMinimo = 0;
let tamanoMaximo = 5;

if( tamanoImagen <= tamanoMinimo){
    console.log('Lo siento, no has subido ningun archivo')
    
}else if(tamanoImagen <= tamanoMaximo){
    console.log('Archivo subido con exito')

}else{
    console.log('Lo siento el tamaño de tu archivo es de : ', tamanoImagen, ' MB');
    console.log('El tamaño maximo permitido es de 5 MB.')

}

//Ejercicio 2 Contraseña mas segura

console.log('-----------------Ejercicio 2-----------------')

let password = '12345678900';
let caracterMinimo = 12;


if(password.length >= caracterMinimo){
    console.log('Contraseña guardada con exito');
}else {
    console.log('Lo siento tu contraseña tiene menos de 12 caracteres')
}


//Ejercicio 3 hervidor electrico

console.log('-----------------Ejercicio 3-----------------')

let contieneAgua = true;
let estaEncendido= false
let temperaturaActual = 0;
let temperaturaMax = 100;


if(!contieneAgua){
    console.log('No se puede enceder ya que no contiene agua.')
}else{
    estaEncendido = true;
    console.log('El hervidor esta encendido:');
    while(temperaturaActual < temperaturaMax){
        console.log('Calentando agua... La temperatura del agua es: ',temperaturaActual, 'Grados.');
        temperaturaActual += 25;
    }
    estaEncendido = false;
    console.log(`El hervidor se ha apagado. La temperatura del agua es:  ${temperaturaActual} Grados.`);
}

//Ejercicio 4 bateria portatil

console.log('-----------------Ejercicio 4-----------------')

// dispositivos disponibles: telefono, macbook, lampara , otro


let dispositivo = 'telefono';
let potencia = 0;

//version if (en este caso no es tan recomendable ya q if es mas recomendable cuando comparas varias variables
//como cuando utilizas && o ||)
if(dispositivo === 'telefono'){
    potencia = 25;
}else if(dispositivo === 'macbook'){
    potencia = 65;
}else if(dispositivo === 'lampara'){
    potencia = 5;
}else{
    potencia = 0;
}

if(potencia > 0 ){
    console.log(`Dando ${potencia} watts de potencia...`);
}else{
    console.log(`No reconocido, ${potencia} watts disponibles.`)
}
// version switch (en este caso es mejor usar esta opcion ya que solo es una variable la que compararemos
//puede tener diferentes valores)

switch(dispositivo){
    case 'telefono':
        potencia = 25;
        break;
    case 'macbook':
        potencia = 65;
        break;
    case 'lampara':
        potencia = 5;
        break;
    default:
        potencia = 0;
        break;
}

if(potencia > 0){
    console.log(`Entregando ${potencia} watts al dispositivo: ${dispositivo}.`);
} else{
    console.log(`Dispositivo no reconocido, No se esta entregando energia... ${potencia} watts ...`);
}

//Ejercicio 5 Molino Cafe

console.log('-----------------Ejercicio 5-----------------')

let tieneContenedor = true;
const cantidadTazas = 10; //que necesitamos
let tiempoFuncionamiento = 60; //en segundos

if(!tieneContenedor){
    console.log(`Lo siento no tienes contenedor de cafe no se puede encender...`);
}else if(cantidadTazas <= 0){
    console.log(`No has seleccionado las cantidades de tasas, porfavor seleccionar:`);
}else{
    let tiempoTotal = tiempoFuncionamiento * cantidadTazas;
    let tiempoTotalminutos = tiempoTotal/60
    console.log(`El numero de tazas seleccionado es:  ${cantidadTazas} y el tiempo que tomara es : ${tiempoTotal} segundos (${tiempoTotalminutos} minutos)`);
}

//ejercicio 6

console.log('-----------------Ejercicio 6-----------------')

let tieneCuenta = true; //con nuestro banco
let puntajeCredito = 500;
let tasaInteres;

if(puntajeCredito >= 750){
    tasaInteres = 10;
}else if(puntajeCredito >= 700){
    tasaInteres = 15;
}else if(puntajeCredito >= 650){
    tasaInteres = 20;
}else {
    console.log(`Lo siento no tienes creditos disponibles`);
    tasaInteres = null;
}

if(tieneCuenta && tasaInteres >= 15){
    tasaInteres *= 0.9;
    console.log(`ahora tienes 10% de descuento en interes por ser cliente :)`);
}

if(tasaInteres != null){
    console.log(`Tu credito ha sido aprobado :)`);
    console.log(`Tu tasa de interes es del: ${tasaInteres}%.`);
}

//ejercicio 7 Alimentador mascota

console.log('-----------------Ejercicio 7-----------------')

// tipos de mascota: gato, perro
let tipoMascota = 'gato'
let pesoMascota = 6;
let cantidadComida = null;
// hecho con if:
if(tipoMascota === 'perro'){
    if( pesoMascota >= 20){
        cantidadComida = 400;
    }else if(pesoMascota >= 10){
        cantidadComida = 300;
    }else if(pesoMascota >= 5){
        cantidadComida = 200;
    }else if(pesoMascota < 5){
        cantidadComida = 100;
    }
}else if (tipoMascota === 'gato'){
    if(pesoMascota >= 6){
        cantidadComida = 150;
    }else if(pesoMascota >= 3){
        cantidadComida = 100;
    }else if(pesoMascota < 3){
        cantidadComida = 50;
    }
}
if(cantidadComida != null){
    console.log(`Tu mascota (${tipoMascota}), pesa ${pesoMascota} kilos, entonces debe comer ${cantidadComida} gramos.`);

}else{
    console.log(`Mascota no reconocido`);
}
//hecho con case:

switch(tipoMascota){
    case('perro'):
        if(pesoMascota >= 20) cantidadComida = 400;
        else if(pesoMascota >= 10) cantidadComida = 300;
        else if(pesoMascota >= 5) cantidadComida = 200;
        else if(pesoMascota < 5) cantidadComida = 100;
        break;
    case('gato'):
        if(pesoMascota >= 6) cantidadComida = 150;
        else if(pesoMascota >= 3) cantidadComida = 100;
        else if(pesoMascota < 3) cantidadComida = 50;
        break;
    default:
        cantidadComida = null;
        break;
}
if(cantidadComida != null){
    console.log(`Tu mascota (${tipoMascota}), pesa ${pesoMascota} kilos, entonces debe comer ${cantidadComida} gramos.`);

}else{
    console.log(`Mascota no reconocido`);
}
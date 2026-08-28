/*
Date en JavaScript es un objeto integrado que se utiliza para trabajar con fechas y horas.
Permite crear, manipular, formatear y comparar momentos específicos en el tiempo.
*/

const ahora = new Date(); //hora local de mi computadora
console.log(` ahora: ${ahora}`);

const fecha = new Date('December 11 2026 15:00 '); //comillas, Formato EEUU mm-dd-aa
console.log(` fecha: ${fecha}`);

const fecha2 = new Date(2026, 8, 18, 14, 15); //sin comillas Formato aa-mm-dd
console.log(` fecha: ${fecha2}`);

console.log(`Date string:`, fecha2.toDateString()); //para mostrar un formato mas corto

//recomendado utilizar este formato de fechas para enviar al servidor
console.log(`ISO string:`, fecha2.toISOString());

console.log(`ISO string:`, fecha2.toTimeString()); //solo pa ver hora

//Para obtener solo una cosa en especifica
console.log(`Solo dia semana : ${fecha2.getDay()}`) //lunes martes...
console.log(`Solo dia mes: ${fecha2.getDate()}`)  
console.log(`Solo mes: ${fecha2.getMonth()}`)
console.log(`Solo año: ${fecha2.getFullYear()}`)
console.log(`Solo hora: ${fecha2.getHours()}`)
console.log(`Solo minutos: ${fecha2.getMinutes()}`)

//Para resetear una cosa especifica

console.log(`Solo año: ${fecha2.setFullYear(1999)}`)

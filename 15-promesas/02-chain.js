// 💡 CADENA DE PROMESAS (PROMISE CHAINING)
// Sirve para ejecutar tareas asíncronas en secuencia (una después de otra).
// Cada .then() recibe el resultado del .then() anterior.

// 1. Definimos las promesas iniciales
const promesa1 = new Promise((resolve) => {
  resolve(12); // Resuelve inmediatamente con valor 12
});

const promesa2 = new Promise((resolve) => {
  resolve(15); // Resuelve inmediatamente con valor 15
});

// 2. Encadenamiento
promesa1
  .then((valor) => {
    console.log("Paso 1 - Resultado de promesa1:", valor); // 12

    // REGLA CLAVE: Si retornas una PROMESA dentro de un .then(),
    // el SIGUIENTE .then() esperará a que esta promesa termine.
    if (valor > 10) {
      return promesa2; // Retornamos la promesa2
    } else {
      return "Valor muy bajo"; // Si retornas un valor simple, pasa directo
    }
  })
  .then((valor2) => {
    // valor2 recibe la respuesta de promesa2 (el número 15)
    console.log("Paso 2 - Resultado encadenado:", valor2); // 15
    
    // Podemos seguir transformando el dato y retornándolo
    return valor2 * 2; 
  })
  .then((resultadoFinal) => {
    // Recibe el resultado del paso anterior (15 * 2)
    console.log("Paso 3 - Resultado final:", resultadoFinal); // 30
  });
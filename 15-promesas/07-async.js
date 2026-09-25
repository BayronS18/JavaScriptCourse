// 💡 ASYNC / AWAIT: Azúcar sintáctico sobre Promesas
// Permite escribir código asíncrono con una sintaxis secuencial y limpia.

// 1. Promesas envueltas en funciones (como en la Clase 07)
const promesa1 = (user) => new Promise((resolve, reject) => {
  // Simulamos que procesamos el usuario
  resolve(`Usuario procesado: ${user}`);
});

const promesa2 = (param2) => new Promise((resolve, reject) => {
  // Recibe el resultado previo y le agrega información
  resolve(`${param2} -> Registro completado`);
});

// 2. Función principal asíncrona
async function main() {
  try {
    // 'await' detiene la ejecución dentro de 'main' hasta que la promesa se resuelva
    const a = await Promise.resolve("Primer valor"); // 'Primer valor'
    const b = await promesa1(a);                     // 'Usuario procesado: Primer valor'
    const c = await promesa2(b);                     // 'Usuario procesado: Primer valor -> Registro completado'

    console.log("Resultado final:", c);

  } catch (error) {
    // Si cualquiera de los 'await' falla (reject / throw), el flujo salta aquí de inmediato
    console.log("Error capturado:", error.message || error);
  } finally {
    // Opcional: Se ejecuta SIEMPRE al terminar el flujo
    console.log("Limpieza o cierre de proceso");
  }
}

// Ejecutamos la función asíncrona
main();
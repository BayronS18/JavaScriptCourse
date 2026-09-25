// Función que simula una consulta a un servidor
function consultarServidor(exito) {
  return new Promise((resolve, reject) => {
    console.log("1. Estado: PENDING (Esperando la respuesta del servidor...)");

    setTimeout(() => {
      if (exito) {
        resolve("2. Estado: FULFILLED -> ¡Datos recibidos correctamente!");
      } else {
        reject("2. Estado: REJECTED -> Error 500: Falló la conexión.");
      }
    }, 2000); // Espera 2 segundos
  });
}

// --- CASO 1: Cuando la promesa se RESUELVE (Fulfilled) ---
// console.log("--- PROBANDO ÉXITO ---");
// consultarServidor(true)
//   .then((respuesta) => {
//     console.log(respuesta);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// --- CASO 2: Cuando la promesa FALLA (Rejected) ---
// (Descomenta estas líneas para probar el error)

console.log("--- PROBANDO ERROR ---");
consultarServidor(false)
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.error(error);
  });

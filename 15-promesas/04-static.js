// 💡 MÉTODOS ESTÁTICOS: Promise.resolve() y Promise.reject()
// Son atajos para crear promesas ya resueltas o rechazadas al instante.

// --- 1. La equivalencia ---
// Esto:
const larga = new Promise((resolve) => resolve(555));

// Es EXACTAMENTE lo mismo que esto (pero más corto y limpio):
const corta = Promise.resolve(555);


// --- 2. Ejemplo práctico en una cadena ---
const promesa1 = new Promise((resolve) => {
  resolve(5); // Inicia con 5
});

const promesa2 = new Promise((resolve) => {
  resolve(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2; // Retorna otra promesa asíncrona
    }

    // Opciones para controlar el flujo:
    
    // OPCIÓN A: Si queremos forzar un error y romper la cadena -> salta al .catch()
    // return Promise.reject("El valor es menor a 10");

    // OPCIÓN B: Retornar un valor resuelto de inmediato
    return Promise.resolve(555); 
  })
  .then((valor2) => {
    // Si se ejecutó la OPCIÓN B, valor2 recibe 555
    console.log("Segunda promesa:", valor2);
    return valor2;
  })
  .catch((e) => {
    // Captura si se usó Promise.reject() o si ocurrió otro error
    console.log("Error en:", e);
  })
  .finally(() => {
    console.log("Proceso finalizado (finally)");
  });
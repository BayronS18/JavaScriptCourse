// 💡 CATCH Y FINALLY EN PROMESAS
// .catch() maneja ERRORES en la cadena.
// .finally() ejecuta código SIN IMPORTAR si hubo éxito o error.

// 1. Creamos las promesas de prueba
const promesa1 = new Promise((resolve, reject) => {
  reject(12); // Simula un error inmediato con valor 12
});

const promesa2 = new Promise((resolve) => {
  resolve(15);
});

// 2. Cadena con control de errores
promesa1
  .then((valor) => {
    // Si promesa1 hubiera sido exitosa, entraría aquí
    if (valor > 10) {
      return promesa2;
    }
  })
  .then((valor2) => {
    // Este .then() solo se ejecuta si el anterior terminó bien
    console.log("Segunda promesa exitosa");
    return valor2;
  })
  .catch((error) => {
    // 🛡️ REGLA: Si CUALQUIER promesa previa falla, salta directo aquí.
    // Atrapa tanto rejects intencionales como errores imprevistos de código.
    console.log("Error capturado en:", error);
  })
  .finally(() => {
    // 🏁 REGLA: Se ejecuta SIEMPRE al final de la operación.
    // Uso típico: Desactivar botones, ocultar animaciones de carga (spinners).
    console.log("Proceso asíncrono finalizado (limpieza).");
  });
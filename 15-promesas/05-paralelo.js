// 💡 PROMESAS EN PARALELO: Promise.all(), Promise.race(), Promise.any() y Promise.allSettled()
// Sirven para ejecutar múltiples tareas asíncronas simultáneamente.

// 1. Definimos las promesas/valores de prueba
const p1 = Promise.resolve(3); // Se resuelve al instante con valor 3
const p2 = 42;                 // Valor directo (se autorresuelve al instante)
const p3 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "foo"); // Tarda 1 segundo en resolver 'foo'
});

// --- 2. Promise.all() ---
// • Espera a que TODAS las promesas sean exitosas.
// • Retorna un Array con todos los valores en el mismo orden de la lista.
// • Si AL MENOS UNA falla, cancela todo y salta inmediatamente al .catch().
Promise.all([p1, p2, p3])
  .then((valores) => console.log("Promise.all exitoso:", valores)) // [3, 42, 'foo']
  .catch((e) => console.log("Error en Promise.all:", e));

// --- 3. Promise.race() ---
// • "La carrera": Retorna SOLO el resultado de la primera promesa que termine (éxito o error).
// • Quien responda más rápido (sea resolve o reject) gana la carrera.
Promise.race([p1, p2, p3])
  .then((valorGanador) => console.log("Promise.race ganador:", valorGanador)) // 3
  .catch((e) => console.log("Error en Promise.race:", e));

// --- 4. Promise.any() ---
// • Busca el PRIMER ÉXITO: Retorna la primera promesa que resuelva correctamente.
// • Ignora los errores en el camino. Solo salta al .catch() si TODAS las promesas fallan.
Promise.any([p1, p2, p3])
  .then((primerExito) => console.log("Promise.any primer éxito:", primerExito)) // 3
  .catch((e) => console.log("Error en Promise.any (todas fallaron):", e));

// --- 5. Promise.allSettled() ---
// • El "informe completo": Espera a que TODAS las promesas finalicen, no importa si con éxito o error.
// • NUNCA cae en el .catch(). Devuelve un array de objetos con el formato:
//   - Si tuvo éxito: { status: 'fulfilled', value: resultado }
//   - Si falló:      { status: 'rejected', reason: error }
Promise.allSettled([p1, p2, p3])
  .then((informeCompleto) => console.log("Promise.allSettled informe:", informeCompleto));
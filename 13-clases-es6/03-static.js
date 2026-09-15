// ===================================================
// APUNTES: Métodos Estáticos (static)
// ===================================================

class Restaurants {
  constructor(name) {
    this.name = name;
  }

  // 🔹 MÉTODO DE INSTANCIA (Normal)
  // Pertenece a UN restaurante concreto (necesita 'new Restaurants()')
  getTimetable() {
    console.log(`Horario del restaurante ${this.name}: 09:00 a 22:00 hrs.`);
  }

  // 🔹 MÉTODO ESTÁTICO (static)
  // Pertenece a LA CLASE (la fábrica). No necesita 'new' para ejecutarse.
  // Sirve como "método fábrica" o buscador de utilidades.
  static getRestaurant(id) {
    console.log(`Buscando en la Base de Datos el restaurante con ID: ${id}...`);
    // Retorna una nueva instancia creada
    return new Restaurants('Completos Don Pepe');
  }
}

// ---------------------------------------------------
// 1. USO DE MÉTODO DE INSTANCIA
// ---------------------------------------------------
const restaurante1 = new Restaurants('El Barón');
restaurante1.getTimetable(); // ✅ Funciona en la instancia

// ❌ restaurante1.getRestaurant(12); 
// ERROR: TypeError: restaurante1.getRestaurant is not a function
// Los métodos estáticos NO existen dentro de las instancias.

// ---------------------------------------------------
// 2. USO DE MÉTODO ESTÁTICO
// ---------------------------------------------------
// Se llama DIRECTAMENTE desde el nombre de la Clase (en mayúscula):
const restaurante2 = Restaurants.getRestaurant(12);

console.log(restaurante1); // Restaurants { name: 'El Barón' }
console.log(restaurante2); // Restaurants { name: 'Completos Don Pepe' }

// ---------------------------------------------------
// 3. EJEMPLOS DEL MUNDO REAL EN JAVASCRIPT NATIVO
// ---------------------------------------------------
// JavaScript usa métodos estáticos todo el tiempo:

Array.isArray([1, 2, 3]); // ✅ static method de Array
Object.assign({}, { a: 1 }); // ✅ static method de Object
Math.random(); // ✅ static method del objeto Math
Date.now(); // ✅ static method de Date
// ===================================================
// APUNTES: Sobrescritura de Métodos (Method Override)
// ===================================================

// 1. CLASE PADRE (Superclase)
class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }

  // Método base en la clase padre
  save() {
    console.log(`💾 Guardando desde Entidad (Lógica base de BD)...`);
  }
}

// 2. CLASE HIJA (Subclase)
class User extends Entidad {
  constructor(name) {
    // Invocamos al constructor del padre asignando un ID estático (1)
    super(1);
    this.name = name;
  }

  // 🔹 SOBRESCRITURA DE MÉTODO (Method Override)
  // Redefinimos 'save' para personalizar el comportamiento en User
  save() {
    // A) Ejecuta primero la lógica heredada del padre
    super.save();

    // B) Añade la lógica específica para la entidad User
    console.log(`👤 Guardando desde User (Lógica específica de '${this.name}')...`);
  }
}

// ---------------------------------------------------
// EJECUCIÓN Y PRUEBAS
// ---------------------------------------------------

const usuario1 = new User('Bayron');

console.log(usuario1);
// Salida: User { id: 1, created_at: Date, name: 'Bayron' }

// Al llamar a save(), se ejecutan ambos bloques en orden por el uso de super.save()
usuario1.save();
// Salida en consola:
// 1. 💾 Guardando desde Entidad (Lógica base de BD)...
// 2. 👤 Guardando desde User (Lógica específica de 'Bayron')...
// ===================================================
// APUNTES: Mixins en JavaScript (Composición)
// ===================================================

// 1. DEFINICIÓN DE MIXINS (Objetos con comportamientos/métodos reutilizables)
// Nota: Un Mixin suele definirse como un objeto plano con métodos agrupados por responsabilidad.

const EntidadMixin = {
  save() {
    console.log(`💾 Guardando registro en Base de Datos...`);
  }
};

const ActualizarMixin = {
  update() {
    console.log(`🔄 Actualizando datos del registro...`);
  }
};

// 2. CLASE PRINCIPAL
class User {
  constructor(name) {
    this.name = name;
  }

  // Si User define su propio 'save()', tendrá prioridad sobre el Mixin
  save() {
    console.log(`👤 Guardando usuario '${this.name}'...`);
  }
}

// 3. APLICACIÓN DEL MIXIN (Inyección de habilidades)
// Copiamos los métodos de EntidadMixin y ActualizarMixin al prototipo de User.
// De esta forma, TODAS las instancias de User ganan estos métodos.
Object.assign(User.prototype, EntidadMixin, ActualizarMixin);

// ---------------------------------------------------
// USO Y VERIFICACIÓN
// ---------------------------------------------------

const usuario = new User('Bayron');

console.log(usuario);

// Executa el save() propio de User (Sobrescritura)
usuario.save(); // "👤 Guardando usuario 'Bayron'..."

// Executa el update() heredado del Mixin
usuario.update(); // "🔄 Actualizando datos del registro..."
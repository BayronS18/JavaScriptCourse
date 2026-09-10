// ==========================================
// APUNTES: Method Override (Sobrescritura)
// ==========================================

function getProto(u) {
  return Object.getPrototypeOf(u);
}

// 1. CONSTRUCTOR PADRE
function Entidad() {}

Entidad.prototype.save = function () {
  console.log('Guardando desde Entidad...');
};

// 2. CONSTRUCTOR HIJO
function User() {}

// Conectamos la cadena: User.prototype hereda de Entidad.prototype
Object.setPrototypeOf(User.prototype, Entidad.prototype);

// 3. OVERRIDE (Sobrescribimos el método save para User)
User.prototype.save = function () {
  // Opcional: Si quisiéramos ejecutar la lógica del padre dentro del hijo:
  // Entidad.prototype.save.call(this);
  
  console.log('Guardando desde Usuario...');
};

// ==========================================
// PRUEBAS Y COMPORTAMIENTO
// ==========================================
const usuario = new User();

// Ejecuta el método propio de User (Override)
usuario.save(); // Salida: "Guardando desde Usuario..."

// Acceso explícito al método del Padre (saltándonos el override)
getProto(getProto(usuario)).save(); // Salida: "Guardando desde Entidad..."
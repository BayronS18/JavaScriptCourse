// ==========================================
// APUNTES: Llamar al constructor Padre (.call)
// ==========================================

// 1. CONSTRUCTOR PADRE
function Entidad(entidad) {
  // Asigna un ID único y el tipo de entidad
  this.id = Math.random().toString(20);
  this.entidad = entidad;
}

// 2. CONSTRUCTOR HIJO
function User() {
  // 🔑 'call' ejecuta Entidad asignándole el 'this' de User
  // Esto copia 'id' y 'entidad' dentro de cada usuario
  Entidad.call(this, 'user');

  this.atributos = {
    nombre: 'Bayron',
    apellido: 'Saavedra',
    email: 'bayron@gmail.com',
    pais: 'Chile',
  };
}

// 3. PRUEBA DE EJECUCIÓN
const usuario = new User();

console.log(usuario);
// Resultado esperado: 
// Contiene tanto 'id' y 'entidad' (de Entidad) como 'atributos' (de User)
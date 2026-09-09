// ==========================================
// LOS 4 PRINCIPIOS DE LA POO CON PROTOTIPOS
// ==========================================

// 1. ENCAPSULACIÓN
// Agrupa datos y funciones. El estado interno se protege usando variables locales 
// dentro de la función constructora que no se exponen en el objeto.

function Usuario(nombre, apellido, password) {
  // Propiedades públicas
  this.nombre = nombre;
  this.apellido = apellido;

  // Variable privada (Encapsulada dentro del closure de la función)
  let _password = password; 

  // Método público para interactuar con la variable privada
  this.validarPassword = function(passIngresado) {
    return _password === passIngresado;
  };
}

// Método agregado al Prototipo para no duplicarlo en cada instancia
Usuario.prototype.getNombreCompleto = function() {
  return `${this.nombre} ${this.apellido}`;
};

const usuario1 = new Usuario('Juan', 'Pérez', 'secret123');
console.log(usuario1.getNombreCompleto()); // "Juan Pérez"
console.log(usuario1._password); // undefined (No se puede acceder directamente)


// 2. ABSTRACCIÓN
// Oculta la complejidad interna. El usuario solo ejecuta .save() y no necesita
// saber la lógica interna de cómo se procesa o conecta.

function UsuarioConGuardado(nombre) {
  this.nombre = nombre;
}

// Función interna simulada (oculta los detalles de implementación)
function conectarBaseDatos() {
  console.log('Estableciendo conexión a la base de datos...');
}

UsuarioConGuardado.prototype.save = function() {
  conectarBaseDatos(); // Proceso interno oculto
  console.log(`Usuario ${this.nombre} guardado exitosamente.`);
};

const usuario2 = new UsuarioConGuardado('María');
usuario2.save(); 
// Imprime:
// "Estableciendo conexión a la base de datos..."
// "Usuario María guardado exitosamente."


// 3. HERENCIA (Herencia Prototipal)
// Un objeto hijo vincula su prototipo al prototipo del padre para reutilizar métodos.

// Constructora Padre
function Entidad(id) {
  this.id = id;
}

Entidad.prototype.save = function() {
  console.log(`Entidad con ID ${this.id} guardada en la base de datos.`);
};

// Constructora Hijo
function User(id, nombre) {
  // Heredamos las propiedades ejecutando el constructor Padre con .call()
  Entidad.call(this, id); 
  this.nombre = nombre;
}

// Establecemos la Herencia Prototipal (User hereda los métodos de Entidad.prototype)
User.prototype = Object.create(Entidad.prototype);
User.prototype.constructor = User; // Restablecemos la referencia del constructor

const cliente = new User(101, 'Carlos');
cliente.save(); // "Entidad con ID 101 guardada en la base de datos."


// 4. POLIMORFISMO
// Dadas dos constructoras que heredan de la misma base, cada una puede redefinir
// (sobrescribir) el método del prototipo padre a su propia manera.

function Motocicleta(id) {
  Entidad.call(this, id);
}

Motocicleta.prototype = Object.create(Entidad.prototype);
Motocicleta.prototype.constructor = Motocicleta;

// Sobrescribimos el método save en el prototipo de Motocicleta
Motocicleta.prototype.save = function() {
  console.log(`Guardando motocicleta con ID ${this.id} en el garaje digital...`);
};

// Función polimórfica: Recibe cualquier objeto y ejecuta .save()
function validarYGuardarEntidad(entidad) {
  entidad.save();
}

const moto = new Motocicleta(202);

validarYGuardarEntidad(cliente); // "Entidad con ID 101 guardada en la base de datos."
validarYGuardarEntidad(moto);    // "Guardando motocicleta con ID 202 en el garaje digital..."
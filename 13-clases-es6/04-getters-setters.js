// ===================================================
// APUNTES: Getters (get) y Setters (set) en ES6
// ===================================================

class Restaurants {
  // 🔒 Campo privado para guardar el dato real
  #timetable;

  constructor(name) {
    this.name = name;
  }

  // -------------------------------------------------
  // 🔹 GETTER: Se ejecuta al LEER 'restaurant.timetable'
  // -------------------------------------------------
  // Se comporta como una propiedad, NO lleva paréntesis al llamarlo.
  get timetable() {
    if (!this.#timetable) {
      return 'Horario no configurado';
    }
    // Retornamos la fecha formateada en formato legible
    return this.#timetable.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  // -------------------------------------------------
  // 🔹 SETTER: Se ejecuta al ASIGNAR 'restaurant.timetable = valor'
  // -------------------------------------------------
  // Funciona como filtro/validador antes de modificar la variable privada.
  set timetable(value) {
    const date = new Date(value);
    const time = date.getTime();

    // Validamos si la fecha ingresada es válida
    if (Number.isNaN(time)) {
      throw new Error('❌ Fecha o formato de horario inválido');
    }

    // Si pasa la validación, guardamos en la variable privada
    this.#timetable = date;
  }
}

// ---------------------------------------------------
// PRUEBAS Y USO
// ---------------------------------------------------

const restaurant = new Restaurants('BBQ');

// 1. Lectura antes de asignar (usando el Getter)
console.log(restaurant.timetable); // "Horario no configurado"

// 2. Asignación correcta (dispara el Setter)
restaurant.timetable = '1 Apr 1923';

// 3. Lectura después de asignar (dispara el Getter)
console.log(restaurant.timetable); // "1 de abril de 1923"

// 4. Actualizamos con otra fecha válida (dispara el Setter)
restaurant.timetable = '18 sep 1999';
console.log(restaurant.timetable); // "18 de septiembre de 1999"

// 5. Intentar asignar un dato inválido
try {
  restaurant.timetable = 'lalala'; // 💥 Lanza excepción
} catch (error) {
  console.error(error.message); // "❌ Fecha o formato de horario inválido"
}

// ⚠️ NOTA DE SINTAXIS:
// ❌ restaurant.setTimetable('1 feb 1986'); -> TypeError: restaurant.setTimetable is not a function
// Los get y set NO son funciones tradicionales, se usan con la sintaxis de asignación directa '='.


//ejemplo 2 
console.log(`------------------------------Ejemplo 2------------------------------`)

class BankAccount {
  #balance = 0; // Propiedad privada con saldo inicial

  constructor(owner) {
    this.owner = owner;
  }

  // 🔹 GETTER: Lee el saldo y lo devuelve con formato de moneda
  get balance() {
    return `$${this.#balance.toLocaleString('es-CL')}`;
  }

  // 🔹 SETTER: Valida el depósito antes de modificar el saldo privado
  set balance(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.error('❌ Error: El monto a depositar debe ser un número positivo.');
      return;
    }
    this.#balance += amount; // Suma el nuevo depósito al saldo actual
    console.log(`✅ Depósito exitoso. Nuevo saldo registrado.`);
  }
}

// ---------------------------------------------------
// USO PRÁCTICO
// ---------------------------------------------------

const miCuenta = new BankAccount('Bayron');
console.log(miCuenta)

// 1. Invocamos el GETTER
console.log(miCuenta.balance); // "$0"

// 2. Invocamos el SETTER (Intento de dato inválido)
miCuenta.balance = -500; // ❌ Error: El monto a depositar debe ser un número positivo.

// 3. Invocamos el SETTER (Depósito válido)
miCuenta.balance = 15000; // ✅ Depósito exitoso.

// 4. Invocamos el GETTER para revisar el saldo actualizado
console.log(miCuenta.balance); // "$15.000"

miCuenta.balance();
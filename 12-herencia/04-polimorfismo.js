// ==========================================
// APUNTES: Polimorfismo en JavaScript
// ==========================================

// 1. CONSTRUCTOR 1: Select
function Select() {}

Select.prototype.render = function () {
  console.log('Renderizando un elemento <select>...');
};

// 2. CONSTRUCTOR 2: CheckBox
function CheckBox() {}

CheckBox.prototype.render = function () {
  console.log('Renderizando un elemento <input type="checkbox">...');
};

// 3. CONSTRUCTOR 3: InputText (Agregamos uno más para ver la escalabilidad)
function InputText() {}

InputText.prototype.render = function () {
  console.log('Renderizando un elemento <input type="text">...');
};

// ==========================================
// APLICACIÓN DEL POLIMORFISMO
// ==========================================
// Colección heterogénea de componentes
const componentes = [
  new Select(),
  new CheckBox(),
  new InputText(),
];

// 🔑 POLIMORFISMO EN ACCIÓN:
// Iteramos sobre la lista ejecutando la misma interfaz/método (.render())
// Cada objeto reacciona a su manera única.
componentes.forEach((componente) => {
  componente.render();
});

// Salida en consola:
// "Renderizando un elemento <select>..."
// "Renderizando un elemento <input type="checkbox">..."
// "Renderizando un elemento <input type="text">..."
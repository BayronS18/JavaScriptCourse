// ===================================================
// APUNTES: Guía Rápida de Eventos en el DOM
// ===================================================

// 1. CREACIÓN DEL FORMULARIO Y SUS ELEMENTOS
const form = document.createElement('form');
form.id = 'mi-formulario';

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Escribe algo...');

const btn = document.createElement('button');
btn.textContent = 'Enviar';

// Insertar elementos en el DOM
form.append(input, btn);
document.body.append(form);


// ---------------------------------------------------
// 2. EVENTOS DEL RATÓN (MOUSE)
// ---------------------------------------------------

// ONMOUSEENTER: Se dispara en el instante preciso en que el puntero del mouse
// ENTRA dentro de la superficie o límites del elemento.
form.onmouseenter = (evento) => {
  console.log('Entra el mouse al formulario', evento);
};

// ONMOUSELEAVE: Se dispara en el instante en que el puntero del mouse
// SALE de la superficie o límites del elemento.
form.onmouseleave = (evento) => {
  console.log('Sale el mouse del formulario', evento);
};


// ---------------------------------------------------
// 3. EVENTOS DE INPUT / FOCO
// ---------------------------------------------------

// ONFOCUS: Se activa cuando el elemento RECIBE la atención del usuario
// (por ejemplo: al hacer clic dentro del input o llegar a él usando la tecla TAB).
input.onfocus = (e) => {
  console.log('Input con focus (el usuario entró a escribir)');
};

// ONBLUR: Se activa cuando el elemento PIERDE la atención del usuario
// (por ejemplo: cuando el usuario hace clic afuera del input para irse a otro lado).
input.onblur = (e) => {
  console.log('Input perdió el focus (el usuario hizo clic afuera)');
};

// ONCHANGE: Se dispara cuando el valor del campo CAMBIÓ respecto a su valor inicial,
// pero ÚNICAMENTE se ejecuta una vez que el usuario confirma el cambio y sale del input (después del blur).
input.onchange = (e) => {
  console.log('Valor cambia y se confirma al salir:', e.target.value);
};


// ---------------------------------------------------
// 4. EVENTOS DE CLIC Y FORMULARIO
// ---------------------------------------------------

// ONCLICK: Asigna la función directamente a la propiedad 'click'.
// ⚠️ Desventaja: Si defines otro 'onclick' más abajo, SOBREESCRIBE al anterior.
btn.onclick = (e) => {
  e.preventDefault(); // Detiene el comportamiento por defecto (evita recargar la página)
  console.log('Boton apretado (usando la propiedad onclick)');
};

// ADDEVENTLISTENER: Es el estándar profesional. REGISTRA un "escuchador".
// ✅ Ventaja: Permite agregar múltiples funciones al mismo evento sin que se pisen.
btn.addEventListener('click', (e) => {
  e.preventDefault(); // PREVENTDEFAULT: Cancela la acción nativa del navegador (como enviar/recargar el formulario).
  console.log('Boton clickeado (usando addEventListener)');
});
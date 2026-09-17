// ===================================================
// APUNTES: Arquitectura de Formularios (Estado, Validación y Render)
// ===================================================

// 1. FUNCIÓN DE VALIDACIÓN
// Recibe un objeto con los datos y retorna un objeto con los errores encontrados.
const validate = (data) => {
  const errors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = 'Campo obligatorio';
  }
  if (!data.lastname || !data.lastname.trim()) {
    errors.lastname = 'Campo obligatorio';
  }

  return errors;
};

// 2. ESTADO INICIAL DE DATOS
const initialValues = {
  name: '',
  lastname: '',
};

// 3. FUNCIÓN DE RENDERIZADO
// Devuelve el string HTML inyectando valores y mensajes de error
const render = ({ data, errors }) => {
  return `
    <div>
      <label>Nombre:</label>
      <input name="name" value="${data.name}" placeholder="Tu nombre" />
      <span style="color: red;">${errors.name || ''}</span>
    </div> 
    <div>
      <label>Apellido:</label>
      <input name="lastname" value="${data.lastname}" placeholder="Tu apellido" />
      <span style="color: red;">${errors.lastname || ''}</span>
    </div> 
    <div>
      <button type="submit">Enviar</button>
    </div>
  `;
};

// 4. MONTAJE EN EL DOM
const form = document.createElement('form');
form.innerHTML = render({ data: initialValues, errors: {} });
document.body.append(form);


// 5. MANEJO DEL SUBMIT
form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  // ✅ FORMA MODERNA: Extrae pares clave-valor de todos los inputs con 'name'
  const data = Object.fromEntries(new FormData(evento.target));

  // Validar los datos recolectados
  const errors = validate(data);

  // Si hay errores (el objeto no está vacío), re-renderizamos el formulario con los errores
  if (Object.keys(errors).length > 0) {
    form.innerHTML = render({ errors, data }); // Corregido: innerHTML en mayúscula
    return; // Detenemos la ejecución para no enviar nada
  }

  // Si pasa la validación, procesamos o enviamos al backend
  console.log('Datos listos para enviar al servidor:', data);
});
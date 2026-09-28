// 💡 MINI PROYECTO: CONSUMO DE API Y MANEJO DE USUARIOS

// --- HELPER: Convierte los inputs del formulario en un Objeto JS ---
let serialize = (target) => {
  return Array.from(target.elements).reduce((acc, el) => {
    if (!el.name) return acc;
    acc[el.name] = el.value;
    return acc;
  }, {});
};

class User {
  // Propiedades privadas de la clase
  static #url = 'https://jsonplaceholder.typicode.com/users';
  static #users = [];
  static #ul = document.createElement('ul');
  static #form = document.createElement('form');
  static #initialValues = { name: '', email: '' };

  constructor(data) {
    this.name = data.name;
    this.email = data.email;
  }

  // 1. PETICIÓN GET: Trae los usuarios del backend
  static async getAll() {
    try {
      const response = await fetch(this.#url);
      if (!response.ok) throw response;
      this.#users = await response.json();
      return this.#users;
    } catch (e) {
      console.log(`Hubo un error: ${e}`);
    }
  }

  // 2. PETICIÓN POST: Guarda el nuevo usuario en el backend
  static async save(user) {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      // Muestra el nuevo usuario arriba en la lista de la interfaz
      this.#users.unshift(data);
      this.#ul.prepend(this.renderUser(data));

    } catch (e) {
      console.log(`Hubo un error: ${e}`);
    }
  }

  // Método de instancia para invocar la guardada
  save() {
    return User.save(this);
  }

  // 3. VALIDACIÓN: Comprueba que los campos no estén vacíos
  validate() {
    let errors = {};
    if (!this.name) errors.name = "El Nombre es obligatorio";
    if (!this.email) errors.email = "El Email es obligatorio";
    return errors;
  }

  // --- RENDERIZADO DOM (Manipulación de la pantalla) ---

  static renderUser(u) {
    let li = document.createElement('li');
    li.innerText = u.name;
    return li;
  }

  static render() {
    let users = this.#users;
    users.forEach(u => this.#ul.appendChild(this.renderUser(u)));
    return this.#ul;
  }

  static formHTML({ data, errors }) {
    return `
      <div>
        <label>Nombre:</label>
        <input name="name" value="${data.name}" />
        <span style="color:red">${errors.name || ''}</span>
      </div>
      <div>
        <label>Correo:</label>
        <input name="email" value="${data.email}" />
        <span style="color:red">${errors.email || ''}</span>
      </div>
      <input type="submit" value="Enviar" />
    `;
  }

  // Manejador del submit del formulario
  static onsubmit(e) {
    e.preventDefault(); // Evita que la página se recargue
    let data = serialize(e.target);
    let user = new User(data);
    
    // Si hay errores de validación, volvemos a pintar el formulario con los mensajes
    const errors = user.validate();
    if (Object.keys(errors).length > 0) {
      this.#form.innerHTML = this.formHTML({ data, errors });
      return;
    }

    // Si todo está ok, enviamos a la API
    user.save();
  }

  static renderForm() {
    this.#form.onsubmit = this.onsubmit.bind(this);
    this.#form.innerHTML = this.formHTML({
      data: this.#initialValues,
      errors: {},
    });
    return this.#form;
  }
}

// --- FUNCIÓN PRINCIPAL DE ARRANQUE ---
async function main() {
  await User.getAll();
  const template = User.render();
  const form = User.renderForm();

  // Inserción en el documento
  document.body.insertAdjacentElement('afterbegin', template);
  document.body.insertAdjacentElement('afterbegin', form);
}

main();
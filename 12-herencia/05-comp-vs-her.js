// ==========================================
// APUNTES: Composición vs Herencia (Mixins)
// ==========================================

// 1. DEFINICIÓN DE MIXINS (Habilidades / Comportamientos aislados)
const vuela = {
  volar() {
    console.log(`${this.constructor.name} está volando...`);
  },
};

const nada = {
  nadar() {
    console.log(`${this.constructor.name} está nadando...`);
  },
};

const camina = {
  caminar() {
    console.log(`${this.constructor.name} está caminando...`);
  },
};

const vaAlBano = {
  irAlBano() {
    console.log(`${this.constructor.name} está yendo al baño...`);
  },
};

// 2. CONSTRUCTORES BASE
function Pato() {}
function Perro() {}
function Pez() {}
function Avion() {}

// 3. COMPOSICIÓN USANDO Object.assign()
// Le asignamos a cada prototipo ÚNICAMENTE las habilidades que necesita:

// Pato: vuela, nada, camina, va al baño
Object.assign(Pato.prototype, vuela, nada, camina, vaAlBano);

// Perro: nada, camina, va al baño
Object.assign(Perro.prototype, nada, camina, vaAlBano);

// Pez: nada, va al baño
Object.assign(Pez.prototype, nada, vaAlBano);

// Avión: vuela solamente
Object.assign(Avion.prototype, vuela);

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

const donald = new Pato();
const firulais = new Perro();
const nemo = new Pez();
const boeing = new Avion();

// Pato tiene todas las habilidades
donald.volar();
donald.irAlBano();

// Perro camina pero no vuela
firulais.caminar();
firulais.irAlBano();
// firulais.volar(); // ❌ TypeError: firulais.volar is not a function

// Avión vuela pero no va al baño ni nada
boeing.volar();
// boeing.irAlBano(); // ❌ TypeError: boeing.irAlBano is not a function
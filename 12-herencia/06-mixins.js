// mixins.js

// Función Helper para abstraer la inyección de mixins
function mixin(Constructor, ...mixins) {
  Object.assign(Constructor.prototype, ...mixins);
}

// 1. DEFINICIÓN DE MIXINS (Comportamientos)
const vuela = {
  vuela() {
    console.log(`${this.nombre} está volando...`);
  },
};

const nada = {
  nada() {
    console.log(`${this.nombre} está nadando...`);
  },
};

const irAlBano = {
  irAlBano() {
    console.log(`${this.nombre} va al baño...`);
  },
};

const camina = {
  camina() {
    console.log(`${this.nombre} está caminando...`);
  },
};

// 2. CONSTRUCTORES
function Pato(nombre) {
  this.nombre = nombre;
}

function Perro(nombre) {
  this.nombre = nombre;
}

function Pez(nombre) {
  this.nombre = nombre;
}

function Avion(nombre) {
  this.nombre = nombre;
}

// 3. APLICACIÓN DE COMPOSICIÓN (MIXINS)
mixin(Avion, vuela);
mixin(Pez, nada, irAlBano);
mixin(Perro, nada, irAlBano, camina);
mixin(Pato, vuela, nada, irAlBano, camina);

// 4. INSTANCIAS Y PRUEBAS
const avion1 = new Avion('Boeing 777');
console.log(avion1);
avion1.vuela();

const pez1 = new Pez('Pececito');
console.log(pez1);
pez1.nada();
pez1.irAlBano();

const perro1 = new Perro('Firulais');
console.log(perro1);
perro1.nada();
perro1.irAlBano();
perro1.camina();

const pato1 = new Pato('Donald');
console.log(pato1);
pato1.vuela();
pato1.nada();
pato1.irAlBano();
pato1.camina();
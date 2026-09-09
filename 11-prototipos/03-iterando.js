//iterando prototipos

function User(nombre){
    this.name = nombre;
    
}

User.prototype.login = function (){
        console.log('Iniciando sesion', this.name)

    }
let user = new User('Bayron')

// El bucle for...in recorre las propiedades enumerables propias del objeto
// Y TAMBIÉN sube a buscar en los prototipos de la cadena.
// En este caso, imprime 'name' (propiedad propia) y 'login' (del prototipo User.prototype).
for(let prop in user){
    console.log(prop);
}

//metodo hasOwn (RECOMENDADO)
for(let prop in user){
    if (Object.hasOwn(user, prop)) {
        console.log(prop); // 'name'
    }
}

//metodo hasOwnProperty se encargahasOwnProperty() en JavaScript se encarga de verificar si un objeto contiene una
//propiedad específica como una propiedad directa o propia, devolviendo un valor booleano (true o false)
for(let prop in user){
    if(user.hasOwnProperty(prop)){ //para obetener solo las del prorotype la negamos !user.hasOwnProperty(prop)
        console.log(prop);
    };
}

//para obtener un array de solo del objecto de la misma instancia 
console.log(Object.keys(user));

/*
Comportamiento de for...in con Prototipos:

No se limita solo a la instancia: El bucle for...in no solo lee las propiedades creadas dentro de la función
constructora (como this.name), sino que sube por la cadena de prototipos buscando todas las propiedades
y métodos enumerables.

Recorrido en cadena: Primero revisa el objeto (user), luego su prototipo directo (User.prototype),
y continuará subiendo nivel por nivel hasta el final de la cadena (Object.prototype).

Filtro de métodos nativos: No imprime métodos como toString() o hasOwnProperty() porque JavaScript los marca internamente
como no enumerables, ignorándolos durante la iteración.

user ('name') ──[Sube al Prototipo]──> User.prototype ('login') ──[Sube al Prototipo]──> Object.prototype (Métodos ocultos/no enumerables)
*/


//Un experimento rápido para probarlo en tu consola:
//Puedes usar el método nativo Object.defineProperty para crear tu propia propiedad no enumerable
//y ver cómo la consola la vuelve tenue y el for...in la ignora:
const usuario = { nombre: 'Bayron' };

// Definimos una propiedad 'secreta' manualmente como NO ENUMERABLE
Object.defineProperty(usuario, 'idOculto', {
  value: 12345,
  enumerable: false // <-- Esto hace la magia
});

console.log(usuario); 
// En consola 'nombre' aparecerá con color normal y 'idOculto' tenue/gris

for (let prop in usuario) {
  console.log(prop); // Solo imprimirá: 'nombre'
}
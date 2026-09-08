// HOISTING: Proceso donde el motor de JS lee todo el código antes de ejecutarlo
// y guarda en memoria las declaraciones de funciones y variables.
//
// 1. Funciones: Se guardan completas en memoria desde el inicio, por lo que 
//    se pueden ejecutar antes de la línea donde se escribieron.
// 2. var: Se declara al inicio pero se inicializa como 'undefined' hasta llegar a su línea.
//    No se recomienda usar 'var' porque genera errores silenciosos y confusiones.
// 3. let y const: También sufren hoisting y se guardan en memoria, pero NO se inicializan.
//    Quedan bloqueadas y dan un error si intentas usarlas antes de su línea.



console.log(vieja); // Imprime: undefined
console.log(hola);  // Error: Cannot access 'hola' before initialization
console.log(chao);  // Error: Cannot access 'chao' before initialization

function render() {}
let hola = 'Hola';
const chao = 'Chao';
var vieja = 'Ya no debes usar esto';

console.log(window);
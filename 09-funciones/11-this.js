// Caso 1: Dentro de un objeto: this hace referencia a un objeto 
// Caso 2: En una funcion this hace referencia al objeto window, global
// Caso 3: Si se usa new hace referencia al objeto que sera creado


//Caso 1: referencia a un objeto
const user = {
    nombre: 'bayron',
    login() {
        console.log(this);
    }
};

user.logout = function logout(){
    console.log(this);
}

user.login();
user.logout();

//Caso 2: referencia a Objeto windows

function log(){
    console.log(this);
}

log()


//Caso 3:
/**
 * Cuando se usa new pasa las siguiente 4 acciones:
 * Se crea un objeto literal
 * Se vincula este objeto a this
 * Se vincula el prototipo
 * Si no retorna nada entonces retorna this
 */
function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola Mundo')
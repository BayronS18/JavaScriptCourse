/*
Un function constructor (constructor de funciones) en JavaScript es una función 
normal que se usa con el operador new para crear e inicializar múltiples objetos
con la misma estructura y comportamiento.
*/
//normalmente se hace en UpperCamelCase(primera letra mayuscula)
function Usuario(){
    this.id = 1;
    //un metodo es una funcion que fue asignada a una propiedad de un objeto
    this.recuperarClave = function(){
        console.log('recuperando clave...')
    }
}

//hay que agregar new para ejecutar el constructor
let usuario = new Usuario();
console.log(usuario);

//cuando usamos new pasan 4 cosas:
//-se crea un objeto literal del aire {}
//-se vincula el prototipo de la funcion con el objeto que se acaba de crear
//se le asigna a this el objeto vacio que se acaba de crear {}
//y si la funcion no retorna nada retorna this
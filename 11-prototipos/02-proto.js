//Prototipo vs instancias

function User(nombre){
    this.name = nombre;
    this.logger = function(){
        console.log('loggeando por favor espere...')
        //metodo de instancia
        this.login();
    }
}

const user1 = new User('Bayron');
const user2 = new User('Elias');

//metodo de prototipo
User.prototype.login = function (){
        console.log('Iniciando sesion', this.name)

    }
console.log(User.prototype);

user1.logger()
user2.logger()

User.prototype.toString = function () {
    console.log('Usuario:', this.name)
}
user1.toString();
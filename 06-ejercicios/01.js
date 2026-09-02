//Ejercicio 1 Crear usuario con Contructor function
function User(name){
    this.id = Math.random();
    this.nameUser = name;
}

let user1 = new User('Bayron');
let user2 = new User('Kevin');

console.log(user1,user2);


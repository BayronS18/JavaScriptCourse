//Ejercicio 2 Crear usuario con factory function

//Opcion 1 recomendada
function createUser(name){
    return{
        id: Math.random(),
        nameUser: name

    }
}

let user1 = createUser('Bayron');
let user2 = createUser('Kevin');

console.log(user1,user2);

//Opcion 2 recomendada si vas a relizar ejercicios matematicos antes de retornar
function crearUser(nombre){
    const id = Math.random();
    const name = nombre;
    return {id, name}
}

let user3 = crearUser('Chris');
let user4 = crearUser('Luis');

console.log(user3,user4);
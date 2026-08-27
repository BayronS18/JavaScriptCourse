/*
Un bucle for in es una estructura de programación que sirve para recorrer los elementos de una colección
uno por uno de forma automática.
*/

let user ={
    id: 1,
    name: 'Chanchito Feliz',
    age: 26
};

for(let prop in user){
    console.log(prop, ':', user[prop]);
}


//MEJOR UTILIZAR FOR-OF PARA ACCEDER A LOS VALORES DE UNARRAY, COMO ESTOS QUE VIENEN A CONTINUACION:
let animales = ['Perro', 'Gato', 'Gallina', 'Oso']

for(let indice in animales){
    console.log(indice, animales[indice])
}
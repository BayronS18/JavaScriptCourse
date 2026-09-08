console.log(suma); //hoisting -> Izar o levantar
console.log(resta); //hoisting -> Izar o levantar (Da error)
//declaracion de funciones: Function Declaration


//Funcion nombrada -> Named function
function suma(){
    console.log(`sumando...`);
}

//Funcion anonima -> anonymous function
//se utiliza cuando se va a usar de inmediato

// function (){
//     console.log(`Funcion anonima..`);
// }


//Expresión de funciones -> function expression
//Expresión de funcion anonima
let resta = function (){
    console.log(`Expresion de funciones restando`);
}


//Expresion de funcion nombrada -> named function expression
let multiplicar = function multi(){
    console.log(`Expresion de funciones restando`);
}

//expresion de funcion con arrow function
//siempre va a ser anonima
const divide = () =>{
        console.log(`dividiendo`);
}
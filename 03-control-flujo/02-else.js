/*
En programación, "else" (que significa "si no" en inglés) es una estructura condicional que indica qué 
código ejecutar si la condición principal de un comando if (si) resulta ser falsa.
*/

let edad = 18;

if(edad >= 18){
    console.log('eres mayor de edad, tienes :'+ edad + ' años.')
}else if (edad >= 14 ){
    console.log('Si puedes ver la pelicula, pero acompañado de tus padres con: ' + edad +' años.')
}else{
    console.log('Lo siento, eres menor de edad con: '+ edad + ' Años.')
}
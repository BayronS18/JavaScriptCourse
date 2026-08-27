/*
El bucle for...of es una estructura de control en programación que permite recorrer los valores 
de un objeto iterable, como arreglos (arrays) o cadenas de texto. Recorre los valores.
*/

let animales = ['Perro', 'Gato', 'Gallina', 'Oso']

for(let animal of animales){
    console.log(animal)
}




let array = [ 23, -2, 244, 45, 93, -18, 32];

function getMenorMayor(arr){
    menor = arr[0];
    mayor = arr[0];
    for(numero of arr){
        if(numero < menor){
            menor = numero
        }
        if(numero > mayor){
            mayor = numero
        }
    }
    return [menor,mayor]

}

let resultado = getMenorMayor(array);
console.log(resultado)
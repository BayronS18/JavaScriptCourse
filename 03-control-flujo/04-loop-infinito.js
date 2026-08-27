/* 
Un bucle infinito (o loop infinito) es un error de programación donde un bloque de código
se repite sin detenerse jamás porque su condición de salida nunca se cumple.
*/
let i = 0;

while (i <= 10){
    if(i % 2 === 0){
        console.log('estos son los numeros par: ' , i)
    }
    // i++
}
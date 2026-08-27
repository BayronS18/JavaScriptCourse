/*
Break y continue son palabras clave que sirven para controlar y cambiar el flujo de los bucles
(ciclos de repetición) en la programación.
Break (Romper)
-Qué hace: Detiene y apaga el bucle por completo de forma inmediata.
-Cuándo se usa: Cuando encuentras lo que buscabas y ya no necesitas seguir repitiendo el ciclo.
-Resultado: El programa sale del bucle y continúa con el código que está después de este.

Continue (Continuar)
-Qué hace: Salta únicamente la repetición (iteración) actual del bucle.
-Cuándo se usa: Cuando quieres ignorar un caso específico sin apagar todo el ciclo.
-Resultado: El programa ignora el resto del código de esta vuelta y avanza directo a la siguiente 
 repetición del bucle.

 SE PUEDE UTILIZAR PARA FOR FOR-IN FOR-OF WHILE -DO-WHILE
*/

let i = 0;

while(i <= 10){
    i++;
    if(i === 2){
        console.log('se encontro el 2')
        continue
    }
    console.log(i)
    if(i === 5){
        console.log('se encontro el 5 terminando el loop')
        break
    }
}
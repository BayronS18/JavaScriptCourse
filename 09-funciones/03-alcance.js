//El alcance de una funcion es el contexto en el que se define y se ejecuta. En JavaScript, 
//existen dos tipos principales de alcance: global y local.

let afuera = 'estoy afuera'; //variable global

function alcance(){
    console.log(afuera); // Imprime: estoy afuera
    afuera = 'estoy adentro'; //modifica la variable global
    function saludo() {} //funcion local
    var vieja = 'Ya no debes usar esto'; //variable local
    let varible = 'Hola mundo'; //variable local
    const constante = 'Chao mundo'; //variable local
}

console.log(afuera); // Imprime: estoy afuera

alcance();

console.log(afuera); // Imprime: estoy adentro porque ya se ejecutó la función alcance y se modificó la variable global afuera.
//Ejercicio 5

//opcion mia
function ordenar(texto, fn){
    const ordenado = texto
    .split('')
    .filter(caracter => caracter.trim() !== '')
    .sort((a, b) => {
        const letraA = a.toLowerCase();
        const letraB = b.toLowerCase();

        if (letraA < letraB) return -1; // 'a' va antes que 'b'
        if (letraA > letraB) return 1;  // 'b' va antes que 'a'
        return 0;                       // son iguales
    })
    .join('');

  fn(ordenado);
}

ordenar('hola mundo', console.log)

// opcion profe


function ordenar2(texto, fn){
    const ordenado = texto.toLowerCase().split('').filter( letra => letra !== ' ').sort().join('');
    fn(ordenado);
}

ordenar2('hola mundo', console.log);
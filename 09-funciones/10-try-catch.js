//Un try...catch en JavaScript es una estructura de control que sirve para manejar errores de
//forma segura sin que la aplicación se detenga por completo

function sumaTodo(arr){
    if (!Array.isArray(arr)){
        throw new Error(`ERROR: El parametro no es un Array.`);
    }
    
    return arr.reduce((acc, numero) =>  {
        if(typeof numero !== 'number' || Number.isNaN(numero)) {
            throw new Error(`Error: La propiedad "${numero}" no es numerica.`)
        }
        return acc + numero});

}


try{
    console.log(sumaTodo([1, 2, 4, 5]));

}catch(error) {
    console.log(error.message);
}

console.log(`Despues del try catch`);
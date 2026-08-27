/*
estructura de control condicional que permite ejecutar diferentes bloques de código según el valor exacto 
de una variable o expresión. Funciona como una alternativa limpia y ordenada a múltiples
condiciones if-else anidadas
*/
let accion = 'Guardar';

switch (accion){
    case 'Listar':
        console.log('Listando switch');
        break
    case 'Guardar':
        console.log('Guardando switch')
        break
    default:
        console.log('Accion no reconocida switch')
};

//ejemplo de esto con if
if(accion === 'Listar'){
    console.log('Listando if')
}else if(accion === 'Guardar') {
    console.log('Guardando if')
}else{
    console.log('Accion no reconocida if')
}
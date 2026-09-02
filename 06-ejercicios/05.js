//ejercicio 5 evaluar con una funcion si un objeto tiene una propiedad en particular
let objeto = {
    id: 1,
    name: 'Bayron',
    login: function () {},
    logout: function () {},
}

function evaluar(obj, propiedad){
    let props = Object.keys(obj);
    for(let prop of props){
        if(propiedad === prop){
            console.log(`Propiedad "${propiedad}" encontrada :)`);
            return true;
        }
    }
    console.log(`Propiedad "${propiedad}" no encontrada :(`);
    return false;

}


let propiedad = 'login';
let resultado = evaluar(objeto, propiedad);

console.log(resultado);
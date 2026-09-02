//ejercicio 4 crear una funcion que nos permita determinar cuales propiedades de un objeto son metodos

let objeto = {
    id: 1,
    name: 'Bayron',
    login: function () {},
    logout: function () {},
}

//opcion 1
function cualesMetodos(obj){
    let listaPropiedades = Object.keys(obj);
    for(let prop of listaPropiedades){
        if(typeof obj[prop] === 'function'){
            console.log(prop)
        }
    }
}

cualesMetodos(objeto)


//opcion 2
// function cualesMetodos(obj){
//     for(let llave in obj){
//         if(typeof obj[llave] === 'function' ){
//             console.log(llave)

//         }
//     }


// }

// cualesMetodos(objeto)

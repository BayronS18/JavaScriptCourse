/*
Este código ilustra cómo funcionan los miembros públicos y privados en JavaScript utilizando el concepto de Scope (Alcance) y Closures (Clasuras) dentro de una función constructora.

*/

function Usuario() {
    let id = 1; //let la declara privada(no la pueden utilizar fuera den constructor)


    this.name = 'Bayron';  //this las declara publica, si se puede acceder a ellas

    let log = function(){ //let la declara privada(no la pueden utilizar fuera den constructor)
        console.log('Logging...')
        id = 20;   //pero una propiedad publica si puede editar o llamar a una privada
        console.log(`este es el id ${id}`) //pero una propiedad publica si puede editar o llamar a una privada
    }

    this.guardar = function () {
        log()
        console.log ('guardando ... ');
    }
}
const usuario = new Usuario();
usuario.guardar();

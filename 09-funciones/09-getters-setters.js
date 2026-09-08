//Un getter y un setter en JavaScript son métodos especiales que sirven para acceder (leer) y modificar (escribir) el valor de las 
//propiedades de un objeto de forma controlada.

const usuario = {
    nombre: 'Bayron',
    apellido: 'Saavedra',
    get nombreCompleto(){
        return `${usuario.nombre} ${usuario.apellido}`
    },
    set nombreCompleto(valor){
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};


console.log(usuario.nombreCompleto);
usuario.nombreCompleto = 'Mateo Vergara';
console.log(usuario.nombreCompleto);
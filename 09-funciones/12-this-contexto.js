
//se usa una fat arrow function pq no tiene contexto de this, la forma mas nueva
const usuario = {
    nombre: 'Bayron',
    ciudadanias: ['Chilena', 'Española'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(ciudadania => console.log(`${this.nombre} : ${ciudadania}`));
    }
};

usuario.mostrarCiudadanias();
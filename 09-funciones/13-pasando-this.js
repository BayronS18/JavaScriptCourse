//cambiar o pasar el contexto de this.

(function saludar(...rest){
    console.log(this, rest);
}).bind({ propiedad : 'hola mundo'})(1, 5)

// saludar.call({ propiedad : 'hola mundo'}, 1, 5);
// saludar.apply({ propiedad : 'hola mundo'}, [1, 5]);
// saludar.bind({ propiedad : 'hola mundo'})(1,5) //Crea una nueva funcion

//forma 1
const usuario = {
    nombre: 'Bayron',
    ciudadanias: ['Chilena', 'Española'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(function(ciudadania) { 
            console.log(`${this.nombre} : ${ciudadania}`);
        }.bind(this));
    }
};

usuario.mostrarCiudadanias();

//forma 2
const usuario2 = {
    nombre: 'Bayron',
    ciudadanias: ['Chilena', 'Española'],
    mostrarCiudadanias(){
        let self = this;
        this.ciudadanias.forEach(function(ciudadania) { 
            console.log(`${self.nombre} : ${ciudadania}`);
        });
    }
};

usuario2.mostrarCiudadanias();

//forma 3
const usuario3 = {
    nombre: 'Bayron',
    ciudadanias: ['Chilena', 'Española'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(function(ciudadania) { 
            console.log(`${this.nombre} : ${ciudadania}`);
        }, this);
    }
};

usuario3.mostrarCiudadanias();
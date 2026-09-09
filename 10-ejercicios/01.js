//ejercicio 1 crear una funcion constructora vamos a cambiar el contexto de this utilizando call

const obj = {
    nombre: 'Bayron',
};

function Extender(){

    this.login = () => {
        console.log(`Logeando usuario ${this.nombre}`);
    }
    this.logout = () => {
        console.log(`Cerrando sesion usuario ${this.nombre}`);
    }
}

Extender.call(obj);
console.log(obj);
obj.login();
obj.logout();

// otro ejercicio
const miAuto = {
  marca: 'Mitsubishi',
  modelo: 'Lancer',
  anio: 2017
};

function AgregarMantenimiento(){
    this.cambioAceite = () => {
        console.log(`Cambiando aceite al ${this.marca} ${this.modelo} año ${this.anio}.`);
    }
    this.revisarFrenos = () => {
        console.log(`Frenos revisados para el ${this.marca} ${this.modelo} año ${this.anio}.`)
    }
    
}

AgregarMantenimiento.call(miAuto);
console.log(miAuto);
miAuto.cambioAceite();
miAuto.revisarFrenos();


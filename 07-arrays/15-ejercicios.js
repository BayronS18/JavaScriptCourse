//Ejercicio 1 calcular el promedio
console.log(`-------------------Ejecicio 1-------------------`);

const precios = [100, 200, 300, 400, 500];

//opcion 1 con reduce:
function calcularPromedio(arr){
    if (arr.length === 0) return 0;
    //version corta:
    let suma = arr.reduce((suma, precio) => suma + precio, 0);
    //version larga:
    // let suma = arr.reduce((suma, precio) => {
    //     return suma + precio;
    // },0);
    return suma/arr.length;
}

//opcion 2 con for of:
// function calcularPromedio(arr){
//     if (arr.length === 0) return 0;
//     let suma = 0;
//     for(let precio of arr){
//         suma += precio;
//     }
//     return suma/arr.length;
// }


const promedio = calcularPromedio(precios);
console.log(`El promedio es: ${promedio}`)


//Ejercicio 2 invertir array
console.log(`-------------------Ejecicio 2-------------------`);

let numeros = [10, 20, 30, 40, 50];

function invertirArray(arr){
    let arrayInverso = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arrayInverso.push(arr[i]);
    }
    return arrayInverso;
}

let arrayInvertido = invertirArray(numeros);
console.log(`array invertido:`, arrayInvertido)


//Ejercicio 3 combinar y ordenar arrays
console.log(`-------------------Ejecicio 3-------------------`);

let array1 = [10, 5, 8];
let array2 = [2, 7, 3];

//opcion echa por mi:
function combinarArrays(arr1, arr2){
 
    const arrCombinado = arr1.concat(arr2).sort((a,b) => a - b);
    return arrCombinado;
}

//opcion echa por profe:
// function combinarArrays(arr1, arr2){
//     const combinar = [...arr1, ...arr2]
//     combinar.sort((a,b) => a - b);
//     return combinar;
    
// }

let resultadoArray = combinarArrays(array1,array2);
console.log(resultadoArray);



//Ejercicio 4 Eliminar duplicados
console.log(`-------------------Ejecicio 4-------------------`);

let duplicados = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// version mia :
function eliminarDuplicados(arr){
    let nuevoArray = [];
    for(let numero of arr){
        if(!nuevoArray.includes(numero)){
            nuevoArray.push(numero);
        }
    }
    return nuevoArray;
}

//version profe:
// function eliminarDuplicados(arr){
//     let nuevoArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!nuevoArray.includes(arr[i])){
//             nuevoArray.push(arr[i]);
//         }
//     }
//     return nuevoArray;
// }

let eliminados = eliminarDuplicados(duplicados);
console.log(eliminados);

//Ejercicio 5 reorganizar array
console.log(`-------------------Ejecicio 5-------------------`);

let reorganizar = [ 0, 1, 0, 3, 12, 0, 5];

//opcion mia 
function reorganizarArray(arr){
    if(!Array.isArray(arr) || arr.length === 0) return [];
        let sinCeros = [];
        let ceros = [];
        for(let numero of arr){
            if(numero !== 0){
                sinCeros.push(numero);
            }else{
                ceros.push(numero);
            }
        }
        return [...sinCeros, ...ceros];
}
// opcion profe 

// function reorganizarArray(arr){
//     return arr.sort((a,b) => (a === 0 ? 1 : b === 0 ? -1 : 0));
// }

let reorganizado = reorganizarArray(reorganizar);
console.log(reorganizado);

//Ejercicio 6  Aplicación para registrar boletos
console.log(`-------------------Ejecicio 6-------------------`);

let boletos = [1, 2, 3, 4, 5];

function Concierto(nombre, duracion, boletosDisponibles){
    this.nombreConcierto = nombre;
    this.duracionConcierto = duracion;
    this.boletosDisponibles = boletosDisponibles;
    this.boletosRegistrados = [];
    this.mostrarInformacion = function() {
        console.log(`--------------Gran Concierto--------------`);
        console.log(`El gran "${this.nombreConcierto}".`);
        console.log(`Duracion de ${this.duracionConcierto} horas.`);
        console.log(`${this.boletosDisponibles.length} boletos disponibles.`);
        console.log(`${this.boletosRegistrados.length} boletos vendidos.`);
        console.log(`------------------------------------------`);
    }
    this.registrarBoleto = function(boleto) {
        if(this.boletosDisponibles.includes(boleto)){
            console.log(`Boleto registrado: ${boleto}.`)
            let idx = this.boletosDisponibles.indexOf(boleto);
            this.boletosDisponibles.splice(idx, 1);
            this.boletosRegistrados.push(boleto);

        }else if(this.boletosRegistrados.includes(boleto)){
            console.log(`Este boleto "${boleto}" ya ha sido registrado.`);
        }else{
            console.log(`Boleto inválido o inexistente`);
        }
      
    }
    this.regresarBoleto = function(boleto) {
        if(this.boletosRegistrados.includes(boleto)){
            console.log(`Boleto regresado: ${boleto}.`)
            let idx = this.boletosRegistrados.indexOf(boleto);
            this.boletosRegistrados.splice(idx, 1);
            this.boletosDisponibles.push(boleto);

        }else if(this.boletosDisponibles.includes(boleto)){
            console.log(`Este boleto no está registrado.`);
        }else{
            console.log(`Boleto inválido o inexistente`);
        }
    }
}

let concierto = new Concierto("Concierto de Paul McCartney", 3, boletos);

// Mostrar información inicial
concierto.mostrarInformacion();

// 1. Registrar boletos válidos
concierto.registrarBoleto(2); // Boleto registrado: 2
concierto.registrarBoleto(3); // Boleto registrado: 3

// 2. Intentar registrar un boleto ya usado y uno que no existe
concierto.registrarBoleto(2); // Este boleto "2" ya ha sido registrado.
concierto.registrarBoleto(6); // Boleto inválido o inexistente

// Mostrar información tras el registro
concierto.mostrarInformacion();

// 3. Regresar un boleto válido que sí ingresó
concierto.regresarBoleto(2); // Boleto regresado: 2

// Mostrar información tras regresar el boleto
concierto.mostrarInformacion();

// 4. Intentar regresar un boleto no registrado (está disponible, pero nadie lo ha usado)
concierto.regresarBoleto(2); // Este boleto no está registrado.

// 5. Intentar regresar un boleto inexistente (nunca existió en el concierto)
concierto.regresarBoleto(6); // Boleto inválido o inexistente
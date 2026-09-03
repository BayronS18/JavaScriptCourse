//ordenando arrays

const numeros = [15, 10, -3];
console.log(`numeros`, numeros); // [15, 10, -3]

//ordenar de menor a mayor
//sort es un metodo que nos permite ordenar los elementos de un array, por defecto ordena de menor a mayor
//si queremos ordenar de mayor a menor, debemos pasarle una funcion como parametro
//la funcion debe recibir dos parametros, a y b, y debe devolver un numero negativo si a es menor que b, 
//un numero positivo si a es mayor que b, y 0 si son iguales

//menor a mayor
numeros.sort();
console.log(`numeros.sort()`, numeros); // [-3, 10, 15]

//mayor a menor
numeros.sort((a, b) => b - a);
console.log(`numeros.sort((a, b) => b - a)`, numeros); // [15, 10, -3]


//Esto tambien se puede utilizar con letras
const letras = ["b", "c", "a"];
console.log(`letras`, letras); // ["b", "c", "a"]

letras.sort();
console.log(`Letras ordenadas sort()`,letras);

//trae las mayusculas primero ya que los ordena por el numero de orden de los caracteres
const conMayusculas = ['B', 'c', 'a'];
conMayusculas.sort();
console.log(`con mayuscula`,conMayusculas);

//Para ordenarlos por el orden de caracteres y no por el numero que ya contienen.
const conMayusculas2 = ['B', 'c', 'a'];
conMayusculas2.sort((a,b) => {
    /**
     * a antes que b => -1
     * b antes que a => 1
     * si son iguales => 0
     */
    const alower = a.toLowerCase();
    const blower = b.toLowerCase();
    if(alower < blower){
        return -1;
    }
    if( alower > blower){
        return 1;
    }
    return 0;
});
console.log(`con mayuscula 2`,conMayusculas2);

//con usuarios tambien se puede utilizar:

const usuarios = [
    {edad: 20, nombre: 'Felipe'},
    {edad: 18, nombre: 'Carlos'},
    {edad: 23, nombre: 'Miguel'},
]

usuarios.sort((a,b) =>{
    if(a.edad < b.edad) return -1
    if(a.edad > b.edad) return 1
    return 0
})
console.log(`Usuarios ordenados por edad:`,usuarios)
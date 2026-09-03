// Vaciar un array

let arr= [1, 2];

//1° opcion para vaciar un array
arr= [];
console.log(`array 1`, arr);


//asignarlo de esta manera genera un problema, ya que si se tiene otra variable que hace referencia a ese array, 
// esa variable no se verá afectada por el cambio de valor de la primera variable.
//usarla solo si no se tiene otra variable que haga referencia al array original.
let arr2 = [1, 2];
let arr3= arr2;
arr2 = []
console.log(`array 2`, arr2);
console.log(`array 3`, arr3);

//2° opcion para vaciar un array
let arr4 = [1, 2];
let arr5 = arr4;
arr4.length= 0;
console.log(`array 4`, arr4);
console.log(`array 5`, arr5);

//3° opcion para vaciar un array (opcion más recomendable)
//esta opción es la más recomendable, ya que no genera problemas con otras variables que hagan referencia al array.
//ya que vaciara el array original y la que hace referencia a él también se verá afectada.
let arr6 = [1, 2];
let arr7 = arr6;
arr6.splice(0, arr6.length); //elimina desde la posición 0 hasta la longitud del array, eliminando todos los elementos.
console.log(`array 6`, arr6);
console.log(`array 7`, arr7);

//4° opcion para vaciar un array(no recomendable)
let arr8 = [1, 2];
while(arr8.length>0){
    arr8.pop();
}
console.log(`array 8`, arr8);
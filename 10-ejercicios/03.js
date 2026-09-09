// Ejercicio 3


// Forma 1:
function callback(fn, ...rest) {
    fn(...rest);
}

function log(...args) {
    console.log(args);
}

callback(log, 1, 2, 3, 4);

//Forma 2:

function callback2(fn, ...rest) {
    fn(...rest);
}


callback2((...args) =>{
    console.log(args)
}, 1, 2, 3, 4);

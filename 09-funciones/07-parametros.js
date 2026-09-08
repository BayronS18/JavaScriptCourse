//Los parametros son variables que se definen en la función y que se pueden usar dentro de ella. 
//Los argumentos son los valores que se pasan a la función cuando se llama.
/**
 * {
 * url: ...
 * bucket: amazon s3
 * port:80
 * }
 */


//Forma antigua de llamar
// function configurarAPI(url) {
//     const defaultUrl = url || 'https://holamundo.io'
//     return `${defaultUrl}`;
// }

//forma nueva de llamar
// function configurarAPI(url = 'https://holamundo.io') {
//     return `${url}`;
// }



function configurarAPI(url, bucket = 145, port = 80) { //destrictirurando la url de un objeto
    return `${url}/${bucket}:${port}`;
}
console.log(configurarAPI('https://chaomundo.io'));
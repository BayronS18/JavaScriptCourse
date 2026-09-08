// Un parámetro desestructurado es una sintaxis en programación (muy común en JavaScript y TypeScript) que permite extraer
// valores directamente de un objeto o un arreglo cuando se pasan como argumento a una función

//Con un objeto
let configuracion = {
    url: 'https://holamundo.oi',
    socket: '725',
    port: 80,
    direccion: {
        calle: 'valle del sauce',
        numero: 5455
    }
}

function webserver({ url, socket, port , direccion: { calle, numero}}){ //tambien se puede destructurar aqui parametros
    // const url = config.url; //Metodo de antes
    // const { url, socket, port } = config; //nuevo metodo destructurandop el objeto config

    return `${url}/${socket}:${port}`
}

console.log(webserver(configuracion))

//con un array:

let configuracionArray = [
    'https://holamundo.oi',
    725,
    80,


]

function webserverArray(configuracion){ 
    const [url, socket, port] = configuracion;

    return `${url}/${socket}:${port}`
}

console.log(webserverArray(configuracionArray))
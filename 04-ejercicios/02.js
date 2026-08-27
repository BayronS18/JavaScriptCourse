//Ejercicio 2 calidad de imagen
/*
* Nombre: ancho x alto
* 8K 7680 × 4320
* 4K 3840 x 2160
* WQHD 2560 x 1440
* FHD 1920 x 1080
* HD 1280 x 720
*/

function resolucion(ancho, alto){
    if(ancho >= 7680 && alto >= 4320){
        return '8K';
    }else if(ancho >= 3840 && alto >= 2160){
        return '4K';
    }else if(ancho >= 2560 && alto >= 1440){
        return 'WQHD';
    }else if(ancho >= 1920 && alto >= 1080){
        return 'FHD';
    }else if(ancho >= 1280 && alto >= 720){
        return 'HD';
    }else{
        return null;
    }
    
}

let anchoCalidad = 3841;
let altoCalidad = 2160;

let calidad = resolucion(anchoCalidad,altoCalidad);
if(calidad != null){
    console.log(`La calidad obtenida es: ${calidad}`);
}else{
    console.log(`Lo siento calidad no encontrada`);
}

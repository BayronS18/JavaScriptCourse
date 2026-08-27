//numeros impar

let hastaNumero = 20;

for(let i = 0; i <= hastaNumero; i++){
    if(i % 2 !== 0){
        console.log(`impar ${i}`);
    }
}

//numero par

for(let i = 0; i <= hastaNumero; i++){
    if(i % 2 === 0){
        console.log(`par ${i}`);
    }
}

//con while
let p = 0;
while(p <= hastaNumero){
    if(p % 2 !== 0){
        console.log(`while`)
        console.log(`impar ${p}`);
    }
    p++
}
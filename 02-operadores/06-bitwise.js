/*
Bitwise JavaScript se refiere a un conjunto de operadores que realizan cálculos directos sobre los ceros
y unos (la representación binaria) de los números enteros de 32 bits
*/

//Decimal 0,1,2,3,4,5,6,7,8,9
//Bit: 0 1
//Byte 8 bits
//Byte: 00000000 -> 0
//Byte: 00000001 -> 1
//Byte: 00000010 -> 2
//Byte: 00000011 -> 3
//Byte: 00000100 -> 4
//Byte: 00000101 -> 5 
//Byte: 00000110 -> 6 
//Byte: 00000111 -> 7 
//Byte: 00001000 -> 8 
//Byte: 00001001 -> 9 
//Byte: 00001010 -> 10 

console.log(1 | 3); // 00000011 resultado 3
console.log(1 | 4); // 00000101 resultado 5
console.log(3 | 5); // 00000111 resultado 7

console.log(1 & 3); // 00000001 resultado 3 devuelve 1
console.log(1 & 4); // 00000000 resultado 5 devuelve 0
console.log(3 & 5); // 00000001 resultado 7 devuelve 1